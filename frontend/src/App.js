import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';
import {
  Briefcase, GraduationCap, Calendar, Menu, X, CheckCircle, ArrowRight,
  Instagram, MapPin, Cpu, Cloud, Code2, Terminal, TrendingUp, Brain, Shield, Users,
  ChevronDown, Copy, Check, User, Building2, Rocket,
} from 'lucide-react';

const INSTAGRAM_DM = 'https://ig.me/m/one.byte.one';
const INSTAGRAM_HANDLE = '@one.byte.one';

/* --------------------------------- SLIDES --------------------------------- */
const SLIDES = [
  { id: 'intro',      label: 'Intro' },
  { id: 'mission',    label: 'Mission' },
  { id: 'architect',  label: 'Architect' },
  { id: 'problem',    label: 'The Problem' },
  { id: 'offerings',  label: 'Offerings' },
  { id: 'audience',   label: 'Your Node' },
  { id: 'next-steps', label: 'Next Steps' },
  { id: 'cta',        label: 'Connect' },
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
  <div className="absolute top-24 left-4 sm:left-8 font-mono text-xs tracking-[0.3em] text-obo-primary/80">
    {String(n).padStart(2, '0')} / {String(total).padStart(2, '0')}
  </div>
);

/* ------------------------------- 01 · INTRO ------------------------------- */
const IntroSlide = ({ goToSlide }) => (
  <Slide id="intro" className="bg-gradient-to-b from-obo-warm-gray to-obo-cream">
    <SlideNumber n={1} total={SLIDES.length} />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full text-center">
      <div className="inline-flex items-center gap-2 bg-obo-cream px-4 py-2 rounded-full shadow-sm border border-obo-primary/20 mb-6">
        <span className="w-2 h-2 bg-obo-primary rounded-full animate-pulse"></span>
        <span className="text-sm text-obo-dark font-mono tracking-wide">// architecting futures · byte by byte</span>
      </div>
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-obo-dark leading-[1.02] mb-6 tracking-tight">
        Precision-engineered outcomes.<br />
        <span className="text-obo-primary">Tactical paths into tech.</span>
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
        A dual-vector technology firm. We build production-grade systems for businesses and high-leverage skill blueprints for people breaking into tech.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button onClick={() => goToSlide(1)} className="btn-primary text-base px-8 py-4" data-testid="intro-explore-btn">
          Start the Tour <ArrowRight size={20} className="ml-2 inline" />
        </button>
        <button onClick={() => goToSlide(SLIDES.length - 1)} className="btn-secondary text-base px-8 py-4" data-testid="intro-dm-btn">
          Skip to DM Us
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

/* ------------------------------ 02 · MISSION ------------------------------ */
const MissionSlide = () => (
  <Slide id="mission" className="bg-obo-cream">
    <SlideNumber n={2} total={SLIDES.length} />
    <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
      <span className="text-obo-primary font-mono text-xs uppercase tracking-[0.3em]">// mission.statement</span>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-obo-dark mt-4 mb-8 leading-[1.05] tracking-tight">
        Close the gap between <span className="text-obo-primary">demand</span> and <span className="text-obo-primary">capability</span>.
      </h2>
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="border-l-2 border-obo-primary pl-5">
          <p className="text-obo-primary font-mono text-[11px] uppercase tracking-[0.2em] mb-2">// the why</p>
          <p className="text-gray-700 leading-relaxed">
            Elite-tier engineering shouldn't sit behind a paywall. Talent is everywhere; access isn't.
          </p>
        </div>
        <div className="border-l-2 border-obo-primary pl-5">
          <p className="text-obo-primary font-mono text-[11px] uppercase tracking-[0.2em] mb-2">// the what</p>
          <p className="text-gray-700 leading-relaxed">
            Ship real systems for businesses. Train real skills for people. No filler, no theory theater.
          </p>
        </div>
        <div className="border-l-2 border-obo-primary pl-5">
          <p className="text-obo-primary font-mono text-[11px] uppercase tracking-[0.2em] mb-2">// the stretch</p>
          <p className="text-gray-700 leading-relaxed">
            Long-term: give underserved communities the leverage tech can provide. Equalizer, not gatekeeper.
          </p>
        </div>
      </div>
      <div className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-obo-dark bg-obo-surface px-4 py-2 rounded-full border border-obo-primary/20">
        <MapPin size={16} className="text-obo-primary" /> Operating from Fort Worth, Texas
      </div>
    </div>
  </Slide>
);

/* ---------------------------- 03 · WHO I AM ------------------------------- */
const ArchitectSlide = () => (
  <Slide id="architect" className="bg-obo-surface">
    <SlideNumber n={3} total={SLIDES.length} />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
      <span className="text-obo-primary font-mono text-xs uppercase tracking-[0.3em]">// founder.profile</span>
      <h2 className="text-3xl sm:text-5xl font-bold text-obo-dark mt-3 mb-10 tracking-tight">
        Brian Ta <span className="text-gray-400 font-light">— Principal Architect</span>
      </h2>
      <div className="grid md:grid-cols-5 gap-8 items-center">
        <div className="md:col-span-2">
          <div className="grid grid-cols-2 gap-3">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-obo-cream">
              <img src="/brian3.png" alt="Brian Ta" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-obo-cream">
              <img src="/brian2.png" alt="Brian Ta" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            8+ years across the full stack — software engineering, DevOps, and cloud architecture — inside <span className="font-semibold text-obo-dark">three+ Fortune 500</span> environments where uptime, security, and throughput are non-negotiable.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            OneByteOne is that enterprise playbook, translated: lean high-velocity builds for businesses, no-BS roadmaps for engineers. Plain language for non-technical readers. Depth for the technical ones.
          </p>
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-obo-cream rounded-xl p-4 text-center border border-obo-primary/10">
              <div className="text-2xl sm:text-3xl font-bold text-obo-primary">8+</div>
              <div className="text-[10px] text-obo-dark font-medium mt-1 uppercase tracking-wider">Years</div>
            </div>
            <div className="bg-obo-cream rounded-xl p-4 text-center border border-obo-primary/10">
              <div className="text-2xl sm:text-3xl font-bold text-obo-primary">3+</div>
              <div className="text-[10px] text-obo-dark font-medium mt-1 uppercase tracking-wider">Fortune 500</div>
            </div>
            <div className="bg-obo-cream rounded-xl p-4 text-center border border-obo-primary/10">
              <div className="text-2xl sm:text-3xl font-bold text-obo-primary">3x</div>
              <div className="text-[10px] text-obo-dark font-medium mt-1 uppercase tracking-wider">Domains</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Software Engineering', 'DevOps', 'Cloud Architecture', 'Systems Design', 'Mentorship'].map((tag) => (
              <span key={tag} className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-obo-primary/30 text-obo-primary bg-obo-cream">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              { icon: Code2, label: 'Production architecture' },
              { icon: Cloud, label: 'Cloud-native infra' },
              { icon: Cpu, label: 'Systems that scale' },
              { icon: Terminal, label: 'Mentorship that deploys' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="text-obo-primary flex-shrink-0" size={16} />
                <span className="text-obo-dark text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Slide>
);

/* ----------------------------- 04 · THE PROBLEM --------------------------- */
const ProblemSlide = () => {
  const problems = [
    { icon: TrendingUp, stat: '$1.7T', label: 'Student Debt',        title: 'Education debt trap',  note: '52% of grads are underemployed within a year.' },
    { icon: Users,      stat: '62→43%', label: 'Middle-Class Share', title: 'The squeeze',          note: 'Wages flat since the 70s while productivity surged.' },
    { icon: Shield,     stat: '44%',   label: 'Skills Disrupted',    title: 'Skills gap',           note: 'Most people are trained as "users" of tech, not architects.' },
    { icon: Brain,      stat: '60%',   label: 'Emotionally Detached',title: 'Work burnout',         note: 'Looking busy has replaced shipping real outcomes.' },
  ];
  return (
    <Slide id="problem" className="bg-obo-warm-gray">
      <SlideNumber n={4} total={SLIDES.length} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <span className="text-obo-primary font-mono text-xs uppercase tracking-[0.3em]">// system.diagnosis</span>
        <h2 className="text-3xl sm:text-5xl font-bold text-obo-dark mt-3 mb-3 tracking-tight">
          The traditional path is failing.
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mb-10">
          Four bugs in the legacy system. We diagnosed them. That's why OneByteOne exists.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((p, i) => (
            <div key={i} className="bg-obo-cream rounded-2xl p-5 border border-gray-200/60 card-hover">
              <div className="w-10 h-10 bg-obo-light rounded-lg flex items-center justify-center mb-3">
                <p.icon className="text-obo-primary" size={20} />
              </div>
              <div className="text-2xl font-bold text-obo-primary">{p.stat}</div>
              <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-3">{p.label}</div>
              <h3 className="text-base font-bold text-obo-dark mb-2 tracking-tight">{p.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{p.note}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 bg-obo-cream rounded-2xl p-6 sm:p-7 border border-obo-primary/20">
          <p className="text-obo-primary font-mono text-[11px] uppercase tracking-[0.2em] mb-1">// our.solution</p>
          <p className="text-lg sm:text-xl text-obo-dark font-semibold leading-snug">
            We're not here to patch the system. We're here to rewrite it — with practical skills, real projects, and engineers who've shipped at scale.
          </p>
        </div>
      </div>
    </Slide>
  );
};

/* ----------------------------- 05 · OFFERINGS ----------------------------- */
const OfferingsSlide = ({ goToSlide }) => {
  const offerings = [
    { icon: Briefcase,     title: 'For Businesses', subtitle: 'Deploy what you need',
      description: 'Enterprise-grade engineering, delivered lean.',
      features: ['Custom software, built to spec', 'DevOps, CI/CD & cloud infra', 'Architecture audits & strategy', 'Automation & integrations'], accent: 'border-obo-primary' },
    { icon: GraduationCap, title: 'For Learners',   subtitle: 'From zero to deployable',
      description: 'No-fluff mentorship on real projects.',
      features: ['1-on-1 with a Fortune 500 engineer', 'Project-based, zero filler', 'Interview prep & portfolio', 'Career & offer strategy'], accent: 'border-obo-accent' },
    { icon: Calendar,      title: 'Discovery Call', subtitle: '30-minute diagnostic',
      description: 'Uncertain? Start here. Honest, actionable.',
      features: ['Diagnose your current state', 'Identify real blockers', 'Personalized plan', 'No pitch, no commitment'], accent: 'border-obo-beige', highlight: true },
  ];
  return (
    <Slide id="offerings" className="bg-obo-cream">
      <SlideNumber n={5} total={SLIDES.length} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <span className="text-obo-primary font-mono text-xs uppercase tracking-[0.3em]">// service.modules</span>
        <h2 className="text-3xl sm:text-5xl font-bold text-obo-dark mt-3 mb-3 tracking-tight">
          Two vectors. One standard.
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mb-10">
          Pick the track that matches where you are. We'll meet you there and accelerate from there.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {offerings.map((o, i) => (
            <div
              key={i}
              className={`bg-obo-surface rounded-2xl p-6 card-hover border-t-4 ${o.accent} ${o.highlight ? 'ring-2 ring-obo-primary/20' : ''} flex flex-col`}
              data-testid={`offering-${i}`}
            >
              {o.highlight && (
                <div className="inline-block self-start bg-obo-primary text-white text-[9px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3">
                  Recommended
                </div>
              )}
              <div className="w-12 h-12 bg-obo-light rounded-xl flex items-center justify-center mb-4">
                <o.icon className="text-obo-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-obo-dark mb-1 tracking-tight">{o.title}</h3>
              <p className="text-obo-primary font-medium text-sm mb-2">{o.subtitle}</p>
              <p className="text-gray-600 text-sm mb-4">{o.description}</p>
              <ul className="space-y-2 mb-5 flex-1">
                {o.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2">
                    <CheckCircle className="text-obo-primary flex-shrink-0 mt-0.5" size={15} />
                    <span className="text-gray-700 text-xs sm:text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => goToSlide(SLIDES.length - 1)}
                className={`inline-flex items-center justify-center gap-2 font-semibold px-4 py-2.5 rounded-xl transition-all w-full text-sm ${
                  o.highlight
                    ? 'bg-obo-primary text-white hover:bg-obo-dark'
                    : 'bg-obo-cream text-obo-primary hover:bg-obo-primary hover:text-white border border-obo-primary/30'
                }`}
                data-testid={`offering-cta-${i}`}
              >
                <Instagram size={16} /> DM to start
              </button>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
};

/* ------------------------------ 06 · AUDIENCE ----------------------------- */
const AUDIENCE = [
  {
    key: 'learner',
    tag: 'LEARNER',
    arrow: 'Bypass the noise.',
    icon: User,
    profile: 'Students, career switchers, and junior devs stuck in "tutorial hell."',
    pain: 'Feels like a "user" of tech rather than an architect. Drowning in generic roadmaps that don\'t lead to a job.',
    win: 'Senior-level logic. Stop memorizing syntax, start understanding systems — and bypass traditional gatekeepers.',
  },
  {
    key: 'business',
    tag: 'BUSINESS',
    arrow: 'Kill the manual labor.',
    icon: Building2,
    profile: 'Small to mid-sized business owners and department leads drowning in manual admin.',
    pain: '"SaaS bloat" — 20 subscriptions that don\'t talk to each other — and 10+ hours a week lost to repetitive data tasks.',
    win: 'Custom automation. Fortune-500-grade infrastructure built for your workflow — owned by you. No software tax.',
  },
  {
    key: 'strategist',
    tag: 'STRATEGIST',
    arrow: 'Own your time.',
    icon: Rocket,
    profile: 'Working tech professionals and educators looking for high-leverage efficiency.',
    pain: 'High-income but low-time. A "human bridge" for the company, looking to transition toward stealth-wealth or solo.',
    win: 'Technical sovereignty. Blueprints to automate your current role or build a leveraged "Company of One."',
  },
];

const AudienceSlide = () => {
  const [active, setActive] = useState('learner');
  return (
    <Slide id="audience" className="bg-obo-dark">
      <SlideNumber n={6} total={SLIDES.length} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <span className="text-obo-primary font-mono text-xs uppercase tracking-[0.3em]">// target.audience</span>
        <h2 className="text-3xl sm:text-5xl font-bold text-white mt-3 mb-2 tracking-tight">
          Identify your node.
        </h2>
        <p className="text-white/60 text-base sm:text-lg max-w-2xl mb-8">
          Three kinds of people walk through our door. Hover or tap a card to see how we engineer the win.
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
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
                data-testid={`audience-card-${a.key}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${isActive ? 'bg-white/20' : 'bg-obo-primary/20'}`}>
                    <a.icon className={isActive ? 'text-white' : 'text-obo-primary'} size={22} />
                  </div>
                  <span className={`text-[10px] font-mono tracking-[0.2em] ${isActive ? 'text-white/70' : 'text-white/40'}`}>
                    [{a.tag}]
                  </span>
                </div>
                <p className={`font-mono text-[11px] uppercase tracking-[0.2em] mb-2 ${isActive ? 'text-white/80' : 'text-obo-primary'}`}>
                  {'>'} {a.arrow}
                </p>
                <div className={`space-y-3 transition-opacity ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                  <div>
                    <p className={`text-[10px] font-mono uppercase tracking-wider mb-1 ${isActive ? 'text-white/70' : 'text-white/50'}`}>Profile</p>
                    <p className={`text-sm leading-relaxed ${isActive ? 'text-white' : 'text-white/80'}`}>{a.profile}</p>
                  </div>
                  {isActive && (
                    <>
                      <div>
                        <p className="text-[10px] font-mono uppercase tracking-wider mb-1 text-white/70">Pain</p>
                        <p className="text-sm leading-relaxed text-white">{a.pain}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-mono uppercase tracking-wider mb-1 text-white/70">Win</p>
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

/* ----------------------------- 07 · NEXT STEPS ---------------------------- */
const NextStepsSlide = ({ goToSlide }) => {
  const roadmaps = [
    { tag: 'BUILD',   title: '6-Week Tech Roadmap',          desc: 'Weekly milestones from curious to shipping production code.' },
    { tag: 'MINDSET', title: '14-Day Tech Mindset Blueprint',desc: 'Two-week OS for how to think and iterate like an engineer who deploys.' },
  ];
  return (
    <Slide id="next-steps" className="bg-obo-cream">
      <SlideNumber n={7} total={SLIDES.length} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
        <span className="text-obo-primary font-mono text-xs uppercase tracking-[0.3em]">// next.steps</span>
        <h2 className="text-3xl sm:text-5xl font-bold text-obo-dark mt-3 mb-3 tracking-tight">
          Initialize with the blueprint.
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mb-8">
          Two free roadmaps. Zero fluff. DM us on Instagram with your name and which one you want — we'll transmit it over.
        </p>
        <div className="grid md:grid-cols-2 gap-5 mb-8">
          {roadmaps.map((r, i) => (
            <div key={i} className="bg-obo-surface rounded-2xl p-6 border border-obo-primary/10 hover:border-obo-primary/40 transition-all card-hover">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-semibold tracking-[0.2em] text-obo-primary bg-obo-cream px-2.5 py-1 rounded-full border border-obo-primary/20">
                  {r.tag}
                </span>
                <span className="text-xs font-mono text-gray-400">0{i + 1}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-obo-dark mb-2 tracking-tight">{r.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{r.desc}</p>
              <button
                onClick={() => goToSlide(SLIDES.length - 1)}
                className="inline-flex items-center justify-center gap-2 font-semibold px-4 py-2.5 rounded-xl transition-all w-full text-sm bg-obo-cream text-obo-primary hover:bg-obo-primary hover:text-white border border-obo-primary/30"
                data-testid={`roadmap-cta-${i}`}
              >
                <Instagram size={16} /> DM to request
              </button>
            </div>
          ))}
        </div>
        <div className="bg-obo-surface rounded-xl p-4 border border-obo-primary/10 text-sm text-gray-600 font-mono">
          {'> '}include your <span className="text-obo-primary font-semibold">name</span> + <span className="text-obo-primary font-semibold">which roadmap</span>. We'll handle the rest.
        </div>
      </div>
    </Slide>
  );
};

/* -------------------------------- 08 · CTA -------------------------------- */
const TEMPLATES = {
  learner: {
    label: 'I\'m a Learner',
    icon: User,
    subject: 'For students, career switchers, junior devs',
    body:
`Hey OneByteOne — I\'m [Your Name].

I\'m trying to break into tech (or level up from junior) and I\'m stuck in tutorial loops. I want senior-level logic, not more syntax memorization.

Where I\'m at:
• [current role / what you\'re studying]
• [what you\'ve tried so far]

What I want:
• [land first / next role | build a real project | map out a 6-week plan]

Can we do a quick discovery call? Thanks.`
  },
  business: {
    label: 'I\'m a Business',
    icon: Building2,
    subject: 'For owners, operators, department leads',
    body:
`Hey OneByteOne — I\'m [Your Name] at [Company].

We\'re drowning in SaaS bloat and manual admin. Looking for custom automation we actually own, not another subscription.

Our stack today:
• [tools / workflows causing pain]
• [roughly __ hours/week lost to it]

What we need:
• [internal tool | automation | cloud setup | architecture audit]

Open to a 30-min diagnostic call? Thanks.`
  },
  strategist: {
    label: 'I\'m a Strategist',
    icon: Rocket,
    subject: 'For working pros, educators, solopreneurs',
    body:
`Hey OneByteOne — I\'m [Your Name].

I\'m a [role] and I\'m high-income / low-time. I want to reclaim leverage — either automate my current role or build a "Company of One."

Context:
• [what you do now]
• [what\'s eating your time]

Goal:
• [technical sovereignty | ship a side-venture | productize expertise]

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
    <Slide id="cta" className="bg-obo-dark">
      <SlideNumber n={8} total={SLIDES.length} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full py-24">
        <span className="text-obo-primary font-mono text-xs uppercase tracking-[0.3em]">// establish.connection</span>
        <h2 className="text-3xl sm:text-5xl font-bold text-white mt-3 mb-3 tracking-tight">
          Ready to initialize?
        </h2>
        <p className="text-white/70 text-base sm:text-lg max-w-2xl mb-8">
          Pick your node. Copy the template. DM us on Instagram. One message, one plan, zero overhead.
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
                    : 'bg-white/5 text-white/80 hover:bg-white/10 border border-white/10'
                }`}
                data-testid={`cta-tab-${key}`}
              >
                <TabIcon size={16} /> {t.label}
              </button>
            );
          })}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/60">
              // {tpl.subject}
            </p>
            <button
              onClick={copyTemplate}
              className={`inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${
                copied ? 'bg-emerald-500 text-white' : 'bg-obo-primary text-white hover:bg-white hover:text-obo-primary'
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
            className="w-full bg-obo-dark/60 text-white/90 text-sm leading-relaxed font-mono p-4 rounded-xl border border-white/10 focus:border-obo-primary focus:outline-none resize-none"
            data-testid="cta-template-text"
          />
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a
              href={INSTAGRAM_DM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-obo-primary text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-white hover:text-obo-primary transition-all flex-1"
              data-testid="cta-dm-btn"
            >
              <Instagram size={20} /> DM {INSTAGRAM_HANDLE} on Instagram
            </a>
            <a
              href={INSTAGRAM_DM}
              target="_blank"
              rel="noopener noreferrer"
              onClick={copyTemplate}
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-white/20 transition-all border border-white/10"
              data-testid="cta-copy-and-dm"
            >
              <Copy size={18} /> Copy + Open DM
            </a>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between flex-wrap gap-3 text-white/50 text-xs font-mono">
          <span className="flex items-center gap-1.5"><MapPin size={13} /> Fort Worth, Texas</span>
          <span>© {new Date().getFullYear()} OneByteOne · architected byte by byte</span>
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
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
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