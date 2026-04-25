import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';
import {
  Briefcase, GraduationCap, Calendar, Menu, X, CheckCircle, ArrowRight,
  Instagram, MapPin, Cpu, Cloud, Code2, Terminal, TrendingUp, Brain, Shield, Users,
  ChevronDown, Copy, Check, User, Building2, Rocket,
} from 'lucide-react';

const INSTAGRAM_USERNAME = 'one.byte.one';
const INSTAGRAM_DM = 'https://ig.me/m/one.byte.one';
const INSTAGRAM_HANDLE = '@one.byte.one';

/* ---------- Instagram deep-link: opens app on mobile, web on desktop ---------- */
const isMobileUA = () =>
  typeof navigator !== 'undefined' &&
  /iPhone|iPad|iPod|Android/i.test(navigator.userAgent || '');

const openInstagramDM = (e) => {
  if (!isMobileUA()) return; // let <a target="_blank"> handle desktop
  if (e && e.preventDefault) e.preventDefault();
  // Try the app via custom scheme first (opens Instagram app profile, user taps Message).
  const appUrl = `instagram://user?username=${INSTAGRAM_USERNAME}`;
  const startedAt = Date.now();
  // Fallback to the official ig.me DM universal link if the app didn't take over.
  const fallback = setTimeout(() => {
    if (Date.now() - startedAt < 2500 && document.visibilityState === 'visible') {
      window.location.href = INSTAGRAM_DM;
    }
  }, 1200);
  // Hide the fallback if the app actually opened (page gets backgrounded).
  const cancel = () => {
    if (document.visibilityState === 'hidden') clearTimeout(fallback);
  };
  document.addEventListener('visibilitychange', cancel, { once: true });
  window.location.href = appUrl;
};

/* --------------------------------- SLIDES --------------------------------- */
const SLIDES = [
  { id: 'intro',      label: 'Start' },
  { id: 'mission',    label: 'Mission' },
  { id: 'architect',  label: 'Founder' },
  { id: 'problem',    label: 'Why We Exist' },
  { id: 'offerings',  label: 'What We Do' },
  { id: 'audience',   label: 'Who It\'s For' },
  { id: 'next-steps', label: 'Free Resources' },
  { id: 'cta',        label: 'Contact' },
];

/* ------------------------------- NAVIGATION ------------------------------- */
const Navigation = ({ mobileMenuOpen, setMobileMenuOpen, goToSlide }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-obo-dark/90 backdrop-blur-md border-b border-white/10" data-testid="main-nav">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex items-center justify-between h-16 sm:h-20">
        <button
          onClick={() => goToSlide(0)}
          className="flex items-center gap-2 group"
          data-testid="logo-home-btn"
        >
          <img src="/logo.webp" alt="OneByteOne" className="h-10 sm:h-12 w-auto" />
          <span className="text-lg sm:text-xl font-bold tracking-tight">
            <span className="text-white">One</span><span className="text-obo-primary">Byte</span><span className="text-white">One</span>
          </span>
        </button>
        <div className="hidden md:flex items-center gap-6">
          {SLIDES.slice(1, -1).map((s, i) => (
            <button
              key={s.id}
              onClick={() => goToSlide(i + 1)}
              className="text-white/80 hover:text-obo-primary transition-colors font-medium text-sm"
              data-testid={`nav-${s.id}`}
            >
              {s.label}
            </button>
          ))}
          <button
            onClick={() => goToSlide(SLIDES.length - 1)}
            className="btn-primary"
            data-testid="nav-dm-btn"
          >
            DM Us
          </button>
        </div>
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>
    {mobileMenuOpen && (
      <div className="md:hidden bg-obo-dark border-t border-white/10 py-4">
        <div className="flex flex-col gap-2 px-6">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => { goToSlide(i); setMobileMenuOpen(false); }}
              className="text-left text-white/90 font-medium py-2"
              data-testid={`mobile-nav-${s.id}`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    )}
  </nav>
);

/* ------------------------------ PROGRESS DOTS ----------------------------- */
const SlideProgress = ({ active, goToSlide }) => (
  <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3" data-testid="slide-progress">
    {SLIDES.map((s, i) => (
      <button
        key={s.id}
        onClick={() => goToSlide(i)}
        className="group flex items-center gap-3"
        aria-label={`Go to slide ${i + 1}: ${s.label}`}
        data-testid={`progress-dot-${i}`}
      >
        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono text-obo-dark bg-white/90 px-2 py-0.5 rounded shadow">
          {String(i + 1).padStart(2, '0')} · {s.label}
        </span>
        <span
          className={`block h-2.5 rounded-full transition-all duration-300 ${
            active === i ? 'w-8 bg-obo-primary' : 'w-2.5 bg-obo-dark/30 hover:bg-obo-dark/60'
          }`}
        />
      </button>
    ))}
  </div>
);

/* ----------------------------- SLIDE WRAPPER ------------------------------ */
const Slide = ({ id, children, className = '' }) => (
  <section
    id={id}
    data-slide={id}
    data-testid={`slide-${id}`}
    className={`slide snap-start min-h-screen w-full flex items-center relative ${className}`}
  >
    {children}
  </section>
);

const SlideNumber = ({ n, total }) => (
  <div
    className="absolute bottom-4 right-4 sm:top-24 sm:left-8 sm:bottom-auto sm:right-auto
               font-mono text-[10px] sm:text-xs tracking-[0.3em] text-obo-primary/80
               bg-black/30 sm:bg-transparent px-2 py-1 sm:px-0 sm:py-0 rounded-full sm:rounded-none
               backdrop-blur-sm sm:backdrop-blur-0 z-20 pointer-events-none select-none"
    data-testid={`slide-num-${n}`}
  >
    {String(n).padStart(2, '0')} / {String(total).padStart(2, '0')}
  </div>
);


/* ------------------------------- 01 · INTRO (DARK) ------------------------- */
const IntroSlide = ({ goToSlide }) => (
  <Slide id="intro" className="bg-obo-dark">
    <SlideNumber n={1} total={SLIDES.length} />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full text-center">
      <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full shadow-sm border border-white/10 mb-6">
        <span className="w-2 h-2 bg-obo-primary rounded-full animate-pulse"></span>
        <span className="text-sm text-white/85 font-mono tracking-wide">
          // open for projects + 1:1 mentorship
        </span>
      </div>
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.02] mb-6 tracking-tight">
        Real engineering,<br />
        <span className="text-obo-primary">made approachable.</span>
      </h1>
      <p className="text-base sm:text-lg lg:text-xl text-white/75 mb-4 max-w-2xl mx-auto leading-relaxed">
        OneByteOne is a small tech studio that builds production software for businesses and trains the next wave of engineers.
      </p>
      <p className="text-sm sm:text-base lg:text-lg text-white/65 mb-10 max-w-2xl mx-auto leading-relaxed">
        Two doors, same engineers. <span className="text-white font-medium">Businesses</span> get custom software and cloud infrastructure that actually ships — no duct tape, no subscription tax. <span className="text-white font-medium">Learners and working pros</span> get honest 1:1 mentorship and a real path into (or up through) tech.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => goToSlide(1)}
          className="btn-primary text-base px-8 py-4"
          data-testid="intro-explore-btn"
        >
          See How We Work <ArrowRight size={20} className="ml-2 inline" />
        </button>
        <button
          onClick={() => goToSlide(SLIDES.length - 1)}
          className="btn-secondary text-base px-8 py-4"
          data-testid="intro-dm-btn"
        >
          Message Us on Instagram
        </button>
      </div>
    </div>
    <button
      onClick={() => goToSlide(1)}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-obo-primary animate-bounce"
      aria-label="Next slide"
      data-testid="intro-scroll-indicator"
    >
      <ChevronDown size={32} />
    </button>
  </Slide>
);

/* ------------------------------ 02 · MISSION (LIGHT) ---------------------- */
const MissionSlide = () => (
  <Slide id="mission" className="bg-obo-cream">
    <SlideNumber n={2} total={SLIDES.length} />
    <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
      <span className="text-obo-primary font-mono text-xs uppercase tracking-[0.3em]">
        // mission.statement
      </span>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-obo-dark mt-4 mb-5 leading-[1.05] tracking-tight">
        Closing the gap between what tech can do — and <span className="text-obo-primary">who gets to use it</span>.
      </h2>
      <p className="text-gray-600 text-base sm:text-lg max-w-3xl leading-relaxed mb-4">
        The way technology gets built and taught today doesn't serve most people well. We're changing that — one project, one person at a time.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="border-l-2 border-obo-primary pl-5">
          <p className="text-obo-primary font-mono text-[11px] uppercase tracking-[0.2em] mb-2">// why</p>
          <p className="text-gray-700 leading-relaxed">
            Great engineering has been locked behind enterprise budgets and gatekept career paths for too long. Talent is everywhere; access isn't.
          </p>
        </div>
        <div className="border-l-2 border-obo-primary pl-5">
          <p className="text-obo-primary font-mono text-[11px] uppercase tracking-[0.2em] mb-2">// what</p>
          <p className="text-gray-700 leading-relaxed">
            For businesses: production-grade systems you actually own. For people: real mentorship on real projects — not theory, not filler.
          </p>
        </div>
        <div className="border-l-2 border-obo-primary pl-5">
          <p className="text-obo-primary font-mono text-[11px] uppercase tracking-[0.2em] mb-2">// long-term</p>
          <p className="text-gray-700 leading-relaxed">
            We want the leverage of modern tech to reach the people and communities it usually skips. An equalizer, not another gatekeeper.
          </p>
        </div>
      </div>

      <div className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-obo-dark bg-obo-surface px-4 py-2 rounded-full border border-obo-primary/20">
        <MapPin size={16} className="text-obo-primary" /> Fort Worth, TX · Working with clients and learners worldwide
      </div>
    </div>
  </Slide>
);

/* ---------------------------- 03 · WHO I AM (DARK) ------------------------ */
const ArchitectSlide = () => (
  <Slide id="architect" className="bg-obo-dark">
    <SlideNumber n={3} total={SLIDES.length} />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
      <span className="text-obo-primary font-mono text-xs uppercase tracking-[0.3em]">// founder.profile</span>
      <h2 className="text-3xl sm:text-5xl font-bold text-white mt-3 mb-10 tracking-tight">
        Brian Ta <span className="text-white/40 font-light">— Founder & Lead Engineer</span>
      </h2>
      <div className="grid md:grid-cols-5 gap-8 items-center">
        <div className="md:col-span-2">
          <div className="grid grid-cols-2 gap-3">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-white/5">
              <img src="/brian3.png" alt="Brian Ta" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-white/5">
              <img src="/brian2.png" alt="Brian Ta" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="text-white/80 text-lg leading-relaxed mb-4">
            8+ years across the stack — software engineering, DevOps, and cloud architecture — most of it inside <span className="font-semibold text-white">three Fortune 500</span> environments where downtime costs money and security isn't optional.
          </p>
          <p className="text-white/65 leading-relaxed mb-6">
            OneByteOne is that enterprise playbook, translated for the rest of us. Lean, fast builds for businesses. Honest, no-filler roadmaps for engineers. Plain language when you need it; technical depth when you don't.
          </p>
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-obo-primary">8+</div>
              <div className="text-[10px] text-white/80 font-medium mt-1 uppercase tracking-wider">Years</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-obo-primary">3</div>
              <div className="text-[10px] text-white/80 font-medium mt-1 uppercase tracking-wider">Fortune 500</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-obo-primary">F/S</div>
              <div className="text-[10px] text-white/80 font-medium mt-1 uppercase tracking-wider">Full-Stack</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Software Engineering', 'DevOps & CI/CD', 'Cloud Architecture (AWS/Azure/GCP)', 'Systems Design', '1:1 Mentorship'].map((tag) => (
              <span key={tag} className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-obo-primary/40 text-obo-primary bg-white/5">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              { icon: Code2, label: 'Production architecture' },
              { icon: Cloud, label: 'Cloud-native infra' },
              { icon: Cpu, label: 'Systems that scale' },
              { icon: Terminal, label: 'Mentorship that ships' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="text-obo-primary flex-shrink-0" size={16} />
                <span className="text-white/85 text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Slide>
);

/* ----------------------------- 04 · THE PROBLEM (LIGHT) ------------------- */
const ProblemSlide = () => {
  const sections = [
    {
      tag: '01',
      title: 'The First-Gen Gap',
      intro: 'First-generation grads start with the same diploma but a smaller network and less inherited know-how — and the data shows it.',
      points: [
        {
          hl: 'Mobility Myth',
          stat: 'Pew',
          note: 'First-gen grads are far less likely to reach the top income quintile than peers with the same degree.',
        },
        {
          hl: 'Debt, No Degree-Match',
          stat: '−27%',
          note: 'First-gens carry higher debt and have a 27% lower chance of landing a degree-relevant job within 4 years. (NCES)',
        },
        {
          hl: 'Network Gap',
          stat: '9×',
          note: 'A strong professional network makes someone roughly 9× more likely to get hired. (LinkedIn referral data)',
        },
      ],
    },
    {
      tag: '02',
      title: 'Underemployment is the Rule',
      intro: 'The standard college-to-career path is over-promising and under-delivering — and the longer you stay stuck, the harder it is to climb out.',
      points: [
        {
          hl: '52% Underemployed',
          stat: '52%',
          note: 'of recent grads are underemployed one year after graduation. (Burning Glass, 2024)',
        },
        {
          hl: 'The Stagnation Loop',
          stat: '70%',
          note: 'stuck in job #1 → 70% chance still underemployed five years later.',
        },
        {
          hl: 'Why',
          stat: '—',
          note: 'Schools teach syntax. The market pays for solving real problems.',
        },
      ],
    },
    {
      tag: '03',
      title: 'Businesses Leak Time and Money',
      intro: 'That\'s why our business track exists — to plug the leaks with software you actually own.',
      points: [
        {
          hl: 'Time Tax',
          stat: '~2h/day',
          note: 'the average employee loses about a quarter of the work week to manual, repeatable tasks. (WorkMarket)',
        },
        {
          hl: 'SaaS Bloat',
          stat: '$15K+/yr',
          note: 'average SMB software spend — and 38% of those subscriptions go unused. (BetterCloud)',
        },
        {
          hl: 'Custom = Leverage',
          stat: '1×',
          note: 'One well-built internal tool can replace 5+ subscriptions and pay for itself inside a year.',
        },
      ],
    },
  ];

  return (
    <Slide id="problem" className="bg-obo-warm-gray">
      <SlideNumber n={4} total={SLIDES.length} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <span className="text-obo-primary font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em]">
          // system.diagnosis
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-obo-dark mt-2 mb-2 tracking-tight leading-[1.1]">
          The traditional path is failing.
        </h2>
        <p className="text-gray-600 text-xs sm:text-base max-w-2xl mb-4 sm:mb-8 leading-snug">
          Three things the data makes obvious — and what we're doing about them.
        </p>

        <div className="grid md:grid-cols-3 gap-3 sm:gap-4">
          {sections.map((s) => (
            <div
              key={s.tag}
              className="bg-obo-cream rounded-2xl p-4 sm:p-5 border border-gray-200/60 card-hover"
              data-testid={`problem-section-${s.tag}`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-mono text-obo-primary tracking-[0.2em]">// {s.tag}</span>
                <span className="flex-1 h-px bg-obo-primary/20" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-obo-dark mb-1.5 leading-snug tracking-tight">
                {s.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-gray-600 leading-snug mb-3">
                {s.intro}
              </p>
              <ul className="space-y-2">
                {s.points.map((p, i) => (
                  <li key={i} className="border-l-2 border-obo-primary/60 pl-2.5">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-[11px] sm:text-xs font-semibold text-obo-dark leading-tight">
                        {p.hl}
                      </span>
                      <span className="text-[11px] sm:text-xs font-bold text-obo-primary font-mono whitespace-nowrap">
                        {p.stat}
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-gray-600 leading-snug mt-0.5">
                      {p.note}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-4 sm:mt-8 bg-obo-cream rounded-2xl p-4 sm:p-6 border border-obo-primary/20">
          <p className="text-obo-primary font-mono text-[10px] uppercase tracking-[0.2em] mb-1">
            // our solution
          </p>
          <p className="text-sm sm:text-lg text-obo-dark font-semibold leading-snug">
            We're not here to patch the system. We're here to rewrite it — with practical skills, real projects, and engineers who've actually shipped production code.
          </p>
        </div>
      </div>
    </Slide>
  );
};

/* ----------------------------- 05 · OFFERINGS (DARK) ---------------------- */
const OfferingsSlide = ({ goToSlide }) => {
  const offerings = [
    { icon: Briefcase,     title: 'For Businesses', subtitle: 'Software you actually own',
      description: 'Enterprise-grade engineering, delivered lean and on a real timeline.',
      features: ['Custom internal tools and apps, built to spec', 'DevOps, CI/CD, and cloud infrastructure', 'Architecture audits and technical strategy', 'Workflow automation and system integrations'], accent: 'border-obo-primary' },
    { icon: GraduationCap, title: 'For Learners',   subtitle: 'From zero to your first (or next) offer',
      description: '1:1 mentorship on real projects, not tutorials.',
      features: ['Direct 1:1 with a Fortune 500 engineer', 'Project-based learning, zero filler', 'Portfolio and interview prep', 'Career strategy and offer negotiation'], accent: 'border-obo-accent' },
    { icon: Calendar,      title: 'Free Discovery Call', subtitle: '30 minutes, no pitch',
      description: 'Not sure where you fit? Start here.',
      features: ['Honest read on where you are', 'The 1–2 things actually blocking you', 'A personalized next-step plan', 'Zero pressure to buy anything'], accent: 'border-obo-beige', highlight: true },
  ];
  return (
    <Slide id="offerings" className="bg-obo-dark">
      <SlideNumber n={5} total={SLIDES.length} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <span className="text-obo-primary font-mono text-xs uppercase tracking-[0.3em]">// what.we.do</span>
        <h2 className="text-3xl sm:text-5xl font-bold text-white mt-3 mb-3 tracking-tight">
          Two tracks. One standard.
        </h2>
        <p className="text-white/70 text-base sm:text-lg max-w-2xl mb-10">
          Pick the track that fits where you are. We'll meet you there.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {offerings.map((o, i) => (
            <div
              key={i}
              className={`bg-white/5 rounded-2xl p-6 card-hover border-t-4 ${o.accent} border-x border-b border-white/10 ${o.highlight ? 'ring-2 ring-obo-primary/30' : ''} flex flex-col`}
              data-testid={`offering-${i}`}
            >
              {o.highlight && (
                <div className="inline-block self-start bg-obo-primary text-white text-[9px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3">
                  Recommended
                </div>
              )}
              <div className="w-12 h-12 bg-obo-primary/20 rounded-xl flex items-center justify-center mb-4">
                <o.icon className="text-obo-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-1 tracking-tight">{o.title}</h3>
              <p className="text-obo-primary font-medium text-sm mb-2">{o.subtitle}</p>
              <p className="text-white/70 text-sm mb-4">{o.description}</p>
              <ul className="space-y-2 mb-5 flex-1">
                {o.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2">
                    <CheckCircle className="text-obo-primary flex-shrink-0 mt-0.5" size={15} />
                    <span className="text-white/85 text-xs sm:text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={INSTAGRAM_DM}
                target="_blank"
                rel="noopener noreferrer"
                onClick={openInstagramDM}
                className={`inline-flex items-center justify-center gap-2 font-semibold px-4 py-2.5 rounded-xl transition-all w-full text-sm ${
                  o.highlight
                    ? 'bg-obo-primary text-white hover:bg-white hover:text-obo-primary'
                    : 'bg-white/10 text-obo-primary hover:bg-obo-primary hover:text-white border border-obo-primary/40'
                }`}
                data-testid={`offering-cta-${i}`}
              >
                <Instagram size={16} /> DM to start
              </a>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
};

/* ------------------------------ 06 · AUDIENCE (LIGHT) --------------------- */
const AUDIENCE = [
  {
    key: 'learner',
    tag: 'LEARNER',
    arrow: 'Skip the noise. Get to the work.',
    icon: User,
    profile: 'Students, career switchers, and junior devs stuck in tutorial loops.',
    pain: 'Generic roadmaps that don\'t lead anywhere. Memorizing syntax instead of understanding how real systems are built.',
    win: 'Think and build like a senior engineer. Get past the gatekeepers with a portfolio that actually proves it.',
  },
  {
    key: 'business',
    tag: 'BUSINESS',
    arrow: 'Stop paying the manual-work tax.',
    icon: Building2,
    profile: 'Small and mid-sized business owners and team leads buried in repetitive admin.',
    pain: 'SaaS bloat — a dozen subscriptions that don\'t talk to each other — and 10+ hours a week lost to copy-paste work.',
    win: 'Custom automation and internal tools built for your workflow. Fortune-500-grade infrastructure, SMB-friendly delivery, fully owned by you.',
  },
  {
    key: 'strategist',
    tag: 'OPERATOR',
    arrow: 'Buy back your time.',
    icon: Rocket,
    profile: 'Working tech pros, senior ICs, and educators who want more leverage from the same hours.',
    pain: 'High income, no time. Stuck as the "human glue" holding processes together at work, with no margin to build anything of their own.',
    win: 'Automate the parts of your job that drain you, or build a one-person business on the side. Either way, get hours back.',
  },
];

const AudienceSlide = () => {
  const [active, setActive] = useState('learner');
  return (
    <Slide id="audience" className="bg-obo-warm-gray">
      <SlideNumber n={6} total={SLIDES.length} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <span className="text-obo-primary font-mono text-xs uppercase tracking-[0.3em]">// who.its.for</span>
        <h2 className="text-3xl sm:text-5xl font-bold text-obo-dark mt-3 mb-2 tracking-tight">
          Which one sounds like you?
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mb-8">
          Three kinds of people show up here. Tap a card to see how we'd help.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          {AUDIENCE.map((a) => {
            const isActive = active === a.key;
            return (
              <button
                key={a.key}
                onMouseEnter={() => setActive(a.key)}
                onFocus={() => setActive(a.key)}
                onClick={() => setActive(a.key)}
                className={`text-left rounded-2xl p-6 border transition-all duration-300 ${
                  isActive
                    ? 'bg-obo-primary border-obo-primary shadow-[0_12px_40px_rgba(8,155,185,0.25)] scale-[1.02]'
                    : 'bg-obo-cream border-gray-200/60 hover:border-obo-primary/40 hover:shadow-md'
                }`}
                data-testid={`audience-card-${a.key}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${isActive ? 'bg-white/20' : 'bg-obo-primary/15'}`}>
                    <a.icon className={isActive ? 'text-white' : 'text-obo-primary'} size={22} />
                  </div>
                  <span className={`text-[10px] font-mono tracking-[0.2em] ${isActive ? 'text-white/80' : 'text-gray-400'}`}>
                    [{a.tag}]
                  </span>
                </div>
                <p className={`font-mono text-[11px] uppercase tracking-[0.2em] mb-2 ${isActive ? 'text-white/90' : 'text-obo-primary'}`}>
                  {'>'} {a.arrow}
                </p>
                <div className={`space-y-3 transition-opacity ${isActive ? 'opacity-100' : 'opacity-95'}`}>
                  <div>
                    <p className={`text-[10px] font-mono uppercase tracking-wider mb-1 ${isActive ? 'text-white/80' : 'text-gray-500'}`}>Profile</p>
                    <p className={`text-sm leading-relaxed ${isActive ? 'text-white' : 'text-obo-dark'}`}>{a.profile}</p>
                  </div>
                  {isActive && (
                    <>
                      <div>
                        <p className="text-[10px] font-mono uppercase tracking-wider mb-1 text-white/80">Pain</p>
                        <p className="text-sm leading-relaxed text-white">{a.pain}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-mono uppercase tracking-wider mb-1 text-white/80">Win</p>
                        <p className="text-sm leading-relaxed text-white font-medium">{a.win}</p>
                      </div>
                    </>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </Slide>
  );
};

/* ----------------------------- 07 · NEXT STEPS (DARK) --------------------- */
const NextStepsSlide = () => {
  const roadmaps = [
    { tag: 'BUILD',   title: '6-Week Tech Roadmap',     desc: 'Week-by-week milestones to take you from "I\'m curious" to shipping a real project.' },
    { tag: 'MINDSET', title: '14-Day Engineer Mindset', desc: 'Two weeks of daily habits and frameworks for thinking like an engineer who actually finishes things.' },
  ];
  return (
    <Slide id="next-steps" className="bg-obo-dark">
      <SlideNumber n={7} total={SLIDES.length} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
        <span className="text-obo-primary font-mono text-xs uppercase tracking-[0.3em]">// free.resources</span>
        <h2 className="text-3xl sm:text-5xl font-bold text-white mt-3 mb-3 tracking-tight">
          Start with a free blueprint.
        </h2>
        <p className="text-white/70 text-base sm:text-lg max-w-2xl mb-8">
          Two roadmaps, zero fluff. DM us on Instagram with your name and which one you want — we'll send it over.
        </p>
        <div className="grid md:grid-cols-2 gap-5 mb-8">
          {roadmaps.map((r, i) => (
            <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-obo-primary/50 transition-all card-hover">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-semibold tracking-[0.2em] text-obo-primary bg-white/5 px-2.5 py-1 rounded-full border border-obo-primary/30">
                  {r.tag}
                </span>
                <span className="text-xs font-mono text-white/40">0{i + 1}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight">{r.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">{r.desc}</p>
              <a
                href={INSTAGRAM_DM}
                target="_blank"
                rel="noopener noreferrer"
                onClick={openInstagramDM}
                className="inline-flex items-center justify-center gap-2 font-semibold px-4 py-2.5 rounded-xl transition-all w-full text-sm bg-white/10 text-obo-primary hover:bg-obo-primary hover:text-white border border-obo-primary/40"
                data-testid={`roadmap-cta-${i}`}
              >
                <Instagram size={16} /> DM to request
              </a>
            </div>
          ))}
        </div>
        <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-sm text-white/75 font-mono">
          {'> '}include your <span className="text-obo-primary font-semibold">name</span> + <span className="text-obo-primary font-semibold">which roadmap</span>. We'll do the rest.
        </div>
      </div>
    </Slide>
  );
};

/* -------------------------------- 08 · CTA (LIGHT) ------------------------ */
const TEMPLATES = {
  learner: {
    label: 'I\'m a Learner',
    icon: User,
    subject: 'For students, career switchers, junior devs',
    body:
`Hey OneByteOne — I\'m [Your Name].

I\'m trying to break into tech (or level up from a junior role) and I keep getting stuck in tutorial loops. I want to learn how senior engineers actually think, not just memorize syntax.

Where I am:
• [current role or what you\'re studying]
• [what you\'ve tried so far]

What I want:
• [land my first role | level up to mid/senior | build a real portfolio project | map out a 6-week plan]

Can we set up a quick discovery call? Thanks.`
  },
  business: {
    label: 'I\'m a Business',
    icon: Building2,
    subject: 'For owners, operators, department leads',
    body:
`Hey OneByteOne — I\'m [Your Name] at [Company].

We\'re losing too many hours a week to manual admin and a stack of SaaS tools that don\'t talk to each other. We\'d rather invest in something we own than pay another subscription.

Where we are today:
• [tools or workflows causing the most pain]
• [roughly __ hours per week lost to them]
• [team size, if relevant]

What we\'re exploring:
• [internal tool | workflow automation | cloud setup | architecture audit]

Open to a free 30-minute call? Thanks.`
  },
  strategist: {
    label: 'I\'m an Operator',
    icon: Rocket,
    subject: 'For working pros, educators, solopreneurs',
    body:
`Hey OneByteOne — I\'m [Your Name].

I\'m a [role] — high income, no time. I want to buy back hours by automating the parts of my job that drain me, or by starting a one-person side business.

Context:
• [what you do now]
• [the work that\'s eating your hours]

Goal:
• [automate my current role | ship a side project | turn my expertise into a product]

Would love to compare notes. Thanks.`
  },
};

const CtaSlide = () => {
  const [tab, setTab] = useState('learner');
  const [copied, setCopied] = useState(false);
  const tpl = TEMPLATES[tab];
  const textareaRef = useRef(null);

  const copyTemplate = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(tpl.body);
    } catch {
      if (textareaRef.current) {
        textareaRef.current.select();
        document.execCommand('copy');
      }
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }, [tpl.body]);

  return (
    <Slide id="cta" className="bg-obo-cream">
      <SlideNumber n={8} total={SLIDES.length} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full py-24">
        <span className="text-obo-primary font-mono text-xs uppercase tracking-[0.3em]">// let's talk</span>
        <h2 className="text-3xl sm:text-5xl font-bold text-obo-dark mt-3 mb-3 tracking-tight">
          Ready to talk?
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mb-8">
          Pick the track that fits, copy the template, and DM us on Instagram. One message, one plan, zero overhead.
        </p>

        <div className="flex flex-wrap gap-2 mb-5" role="tablist">
          {Object.entries(TEMPLATES).map(([key, t]) => {
            const TabIcon = t.icon;
            const isActive = tab === key;
            return (
              <button
                key={key}
                role="tab"
                aria-selected={isActive}
                onClick={() => { setTab(key); setCopied(false); }}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-obo-primary text-white shadow-[0_8px_24px_rgba(8,155,185,0.35)]'
                    : 'bg-white text-obo-dark hover:bg-obo-surface border border-gray-200'
                }`}
                data-testid={`cta-tab-${key}`}
              >
                <TabIcon size={16} /> {t.label}
              </button>
            );
          })}
        </div>

        <div className="bg-obo-surface border border-gray-200 rounded-2xl p-5 sm:p-6">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500">
              // {tpl.subject}
            </p>
            <button
              onClick={copyTemplate}
              className={`inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${
                copied ? 'bg-emerald-500 text-white' : 'bg-obo-primary text-white hover:bg-obo-dark'
              }`}
              data-testid="cta-copy-btn"
            >
              {copied ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy template</>}
            </button>
          </div>
          <textarea
            ref={textareaRef}
            readOnly
            value={tpl.body}
            rows={12}
            className="w-full bg-white text-obo-dark text-sm leading-relaxed font-mono p-4 rounded-xl border border-gray-200 focus:border-obo-primary focus:outline-none resize-none"
            data-testid="cta-template-text"
          />
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a
              href={INSTAGRAM_DM}
              target="_blank"
              rel="noopener noreferrer"
              onClick={openInstagramDM}
              className="inline-flex items-center justify-center gap-2 bg-obo-primary text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-obo-dark transition-all flex-1"
              data-testid="cta-dm-btn"
            >
              <Instagram size={20} /> DM {INSTAGRAM_HANDLE} on Instagram
            </a>
            <a
              href={INSTAGRAM_DM}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => { copyTemplate(); openInstagramDM(e); }}
              className="inline-flex items-center justify-center gap-2 bg-white text-obo-dark font-semibold px-6 py-3.5 rounded-xl hover:bg-obo-surface transition-all border border-gray-200"
              data-testid="cta-copy-and-dm"
            >
              <Copy size={18} /> Copy + Open DM
            </a>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between flex-wrap gap-3 text-gray-500 text-xs font-mono">
          <span className="flex items-center gap-1.5"><MapPin size={13} /> Fort Worth, Texas</span>
          <span>© {new Date().getFullYear()} OneByteOne · built byte by byte</span>
        </div>
      </div>
    </Slide>
  );
};

/* ---------------------------------- APP ----------------------------------- */
function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState(0);
  const deckRef = useRef(null);

  const goToSlide = useCallback((i) => {
    const deck = deckRef.current;
    if (!deck) return;
    const target = deck.querySelectorAll('.slide')[i];
    if (!target) return;
    const top = target.offsetTop;
    if (typeof deck.scrollTo === 'function') {
      deck.scrollTo({ top, behavior: 'smooth' });
    } else {
      deck.scrollTop = top;
    }
  }, []);

  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return;
    const slides = deck.querySelectorAll('.slide');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const idx = Array.from(slides).indexOf(entry.target);
            if (idx >= 0) setActive(idx);
          }
        });
      },
      { root: deck, threshold: [0.5] }
    );
    slides.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        goToSlide(Math.min(active + 1, SLIDES.length - 1));
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        goToSlide(Math.max(active - 1, 0));
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(SLIDES.length - 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, goToSlide]);

  return (
    <div className="App bg-obo-cream">
      <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} goToSlide={goToSlide} />
      <SlideProgress active={active} goToSlide={goToSlide} />
      <main ref={deckRef} className="deck h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth" data-testid="deck-container">
        <IntroSlide      goToSlide={goToSlide} />
        <MissionSlide    />
        <ArchitectSlide  />
        <ProblemSlide    />
        <OfferingsSlide  goToSlide={goToSlide} />
        <AudienceSlide   />
        <NextStepsSlide  goToSlide={goToSlide} />
        <CtaSlide        />
      </main>
    </div>
  );
}

export default App;