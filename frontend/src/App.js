import React, { useState } from 'react';
import './App.css';
import {
  Briefcase, GraduationCap, Calendar, Menu, X, CheckCircle, ArrowRight,
  Instagram, MapPin, Cpu, Cloud, Code2, Terminal, TrendingUp, Brain, Shield, Users,
} from 'lucide-react';

const INSTAGRAM_DM = 'https://ig.me/m/one.byte.one';
const INSTAGRAM_HANDLE = '@one.byte.one';

const Navigation = ({ mobileMenuOpen, setMobileMenuOpen }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-obo-cream/95 backdrop-blur-md border-b border-gray-200/50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex items-center justify-between h-16 sm:h-20">
        <a href="#" className="flex items-center gap-2">
          <img src="/logo.webp" alt="OneByteOne" className="h-10 sm:h-12 w-auto" />
          <span className="text-lg sm:text-xl font-bold tracking-tight text-obo-dark">
            OneByte<span className="text-obo-primary">One</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-obo-dark hover:text-obo-primary transition-colors font-medium">Who We Are</a>
          <a href="#why-us" className="text-obo-dark hover:text-obo-primary transition-colors font-medium">Why Us</a>
          <a href="#offerings" className="text-obo-dark hover:text-obo-primary transition-colors font-medium">Offerings</a>
          <a href="#resources" className="text-obo-dark hover:text-obo-primary transition-colors font-medium">Roadmaps</a>
          <a href={INSTAGRAM_DM} target="_blank" rel="noopener noreferrer" className="btn-primary">DM Us</a>
        </div>
        <button className="md:hidden p-2 text-obo-dark" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>
    {mobileMenuOpen && (
      <div className="md:hidden bg-obo-cream border-t border-gray-200/50 py-4">
        <div className="flex flex-col gap-4 px-6">
          <a href="#about" className="text-obo-dark font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Who We Are</a>
          <a href="#why-us" className="text-obo-dark font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Why Us</a>
          <a href="#offerings" className="text-obo-dark font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Offerings</a>
          <a href="#resources" className="text-obo-dark font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Roadmaps</a>
          <a href={INSTAGRAM_DM} target="_blank" rel="noopener noreferrer" className="btn-primary text-center" onClick={() => setMobileMenuOpen(false)}>DM Us</a>
        </div>
      </div>
    )}
  </nav>
);

const HeroSection = () => (
  <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-b from-obo-warm-gray to-obo-cream relative overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-obo-cream px-4 py-2 rounded-full shadow-sm border border-obo-primary/20 mb-6">
          <span className="w-2 h-2 bg-obo-primary rounded-full animate-pulse"></span>
          <span className="text-sm text-obo-dark font-mono tracking-wide">// architecting futures · byte by byte</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-obo-dark leading-[1.05] mb-6 tracking-tight">
          Precision-engineered outcomes.<br />
          <span className="text-obo-primary">Tactical paths into tech.</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
          A dual-vector technology firm delivering production-grade systems for businesses and high-leverage skill blueprints for engineers ready to level up.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#offerings" className="btn-primary text-lg px-8 py-4">Explore Offerings<ArrowRight size={20} className="ml-2 inline" /></a>
          <a href="#about" className="btn-secondary text-lg px-8 py-4">Meet the Architect</a>
        </div>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="py-16 sm:py-24 bg-obo-cream">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
        <div>
          <span className="text-obo-primary font-mono text-xs uppercase tracking-[0.2em]">// system.init</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-obo-dark mt-3 mb-6 tracking-tight">Bridging the delta between demand and capability.</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-5">
            <span className="font-semibold text-obo-dark">OneByteOne</span> is a dual-vector technology firm operating from <span className="inline-flex items-center gap-1 font-medium text-obo-dark"><MapPin size={16} className="text-obo-primary" />Fort Worth, Texas</span> — architecting solutions that close the gap between market demand and technical capability.
          </p>
          <div className="border-l-2 border-obo-primary pl-5 mb-6">
            <p className="text-obo-primary font-mono text-xs uppercase tracking-[0.2em] mb-2">// mission.statement</p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              To democratize access to elite-tier engineering expertise and accelerate careers through practical, affordable, and outcome-driven pathways into the technology sector.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              Whether you're <span className="font-medium text-obo-dark">learning to code</span>, a <span className="font-medium text-obo-dark">student navigating your next move</span>, a <span className="font-medium text-obo-dark">business seeking digital transformation</span>, or a <span className="font-medium text-obo-dark">career switcher pivoting into tech</span> — OneByteOne is here to architect your path. We understand where you come from and can help you engineer your journey forward.
            </p>
          </div>
          <div className="bg-obo-surface rounded-xl p-5 mb-6 border border-obo-primary/10">
            <p className="text-obo-primary font-mono text-xs uppercase tracking-[0.2em] mb-2">// stretch.goal</p>
            <p className="text-gray-700 text-base leading-relaxed">
              Our long-term mission extends to <span className="font-semibold text-obo-dark">empowering low-income and underprivileged communities</span> with high-leverage technical skills — giving agency to those overlooked by traditional systems that fail too many people. Technology should be an equalizer, not a gatekeeper.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Code2, label: 'Production-grade architecture' },
              { icon: Cloud, label: 'Cloud-native infrastructure' },
              { icon: Cpu, label: 'Systems that scale' },
              { icon: Terminal, label: 'Mentorship that deploys' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon className="text-obo-primary flex-shrink-0 mt-1" size={18} />
                <span className="text-obo-dark font-medium text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="bg-obo-surface rounded-2xl p-8 sm:p-10 border border-obo-primary/10">
            <img src="/logo.webp" alt="OneByteOne Logo" className="w-28 h-28 mx-auto mb-5" />
            <blockquote className="text-center">
              <p className="text-xl sm:text-2xl text-obo-dark font-medium leading-snug mb-4">"Build the thing. Then build the people who ship the next one."</p>
              <cite className="text-obo-primary font-mono text-xs uppercase tracking-[0.2em] not-italic">— OneByteOne</cite>
            </blockquote>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200/60 pt-16">
        <div className="mb-10">
          <span className="text-obo-primary font-mono text-xs uppercase tracking-[0.2em]">// founder.profile</span>
          <h3 className="text-3xl sm:text-4xl font-bold text-obo-dark mt-3 tracking-tight">
            Brian Ta <span className="text-gray-400 font-light">— Principal Architect</span>
          </h3>
        </div>
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-3 order-2 md:order-1">
            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              8+ years deploying across the full stack — software engineering, DevOps, and cloud architecture — within <span className="font-semibold text-obo-dark">three+ Fortune 500</span> environments where uptime, throughput, and security are non-negotiable.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Brian architected OneByteOne to translate that enterprise-grade operational playbook into an accessible framework: lean, high-velocity builds for businesses that need to ship, and no-BS roadmaps for engineers who refuse to remain static.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-obo-surface rounded-xl p-4 text-center"><div className="text-2xl sm:text-3xl font-bold text-obo-primary">8+</div><div className="text-xs text-obo-dark font-medium mt-1 uppercase tracking-wider">Years</div></div>
              <div className="bg-obo-surface rounded-xl p-4 text-center"><div className="text-2xl sm:text-3xl font-bold text-obo-primary">3+</div><div className="text-xs text-obo-dark font-medium mt-1 uppercase tracking-wider">Fortune 500</div></div>
              <div className="bg-obo-surface rounded-xl p-4 text-center"><div className="text-2xl sm:text-3xl font-bold text-obo-primary">3x</div><div className="text-xs text-obo-dark font-medium mt-1 uppercase tracking-wider">Domains</div></div>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {['Software Engineering', 'DevOps', 'Cloud Architecture', 'Systems Design', 'Technical Mentorship'].map((tag) => (
                <span key={tag} className="text-xs font-mono px-3 py-1.5 rounded-full border border-obo-primary/30 text-obo-primary bg-obo-cream">{tag}</span>
              ))}
            </div>
          </div>
          <div className="md:col-span-2 order-1 md:order-2">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-obo-surface">
                <img src="/brian3.png" alt="Brian Ta" className="w-full h-full object-cover" />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-obo-surface">
                <img src="/brian2.png" alt="Brian Ta" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WhyChooseUsSection = () => {
  const problems = [
    {
      icon: TrendingUp,
      title: 'The Educational Debt Trap',
      stat: '$1.7T',
      statLabel: 'Student Loan Debt',
      description: 'The traditional "High School → Degree → Job" pipeline is delivering negative ROI for a growing population.',
      insight: '52% of college graduates are underemployed within a year. 45% remain in jobs that don\'t require their degree five years later.',
      source: 'Federal Reserve & Burning Glass Institute (2024)',
      reality: 'People are buying an expensive "system" that doesn\'t deliver the high-leverage skills the market actually demands.'
    },
    {
      icon: Users,
      title: 'The Middle Class Squeeze',
      stat: '62% → 43%',
      statLabel: 'Middle Class Income Share',
      description: 'The standard career path no longer provides the stability it did 30 years ago.',
      insight: 'While productivity has surged due to technology, real wages for the bottom 80% have remained flat since the 1970s when adjusted for inflation.',
      source: 'Pew Research (1970-2022)',
      reality: 'The system captures tech\'s "surplus value" at the top while average workers run faster just to stay in place.'
    },
    {
      icon: Shield,
      title: 'The Skills Gap & Gatekeeping',
      stat: '44%',
      statLabel: 'Skills Disrupted by 2027',
      description: 'Institutional knowledge fails to keep pace with technical evolution.',
      insight: 'Traditional institutions (corporations, schools) are slow to update their operating systems. Senior roles get protected by unwritten rules rather than objective technical merit.',
      source: 'World Economic Forum',
      reality: 'Most people are trained to be "manual laborers" for software (data entry, clicking buttons) rather than "architects" (automation, API logic).'
    },
    {
      icon: Brain,
      title: 'The Mental Health Bug',
      stat: '60%',
      statLabel: 'Emotionally Detached',
      description: 'The system\'s emphasis on external validation is causing widespread internal weather crises.',
      insight: 'Roughly 60% of people are "quiet quitting" or emotionally detached from their work. The system prioritizes optics over output.',
      source: 'Gallup\'s State of the Global Workplace',
      reality: 'People spend more energy "looking busy" to satisfy middle management than building high-leverage assets.'
    }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-obo-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-obo-primary font-mono text-xs uppercase tracking-[0.2em]">// system.diagnosis</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-obo-dark mt-3 mb-4 tracking-tight">Why the traditional path is failing.</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">The legacy system has critical bugs. We've diagnosed them. Here's why OneByteOne exists — and why the old playbook no longer computes.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-obo-cream rounded-2xl p-6 sm:p-8 card-hover border border-gray-200/50">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-obo-light rounded-xl flex items-center justify-center">
                  <problem.icon className="text-obo-primary" size={24} />
                </div>
                <span className="text-xs font-mono text-gray-400">0{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-obo-dark mb-2 tracking-tight">{problem.title}</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold text-obo-primary">{problem.stat}</span>
                <span className="text-sm text-gray-500 font-mono">{problem.statLabel}</span>
              </div>
              <p className="text-gray-600 mb-4">{problem.description}</p>
              <div className="bg-obo-surface rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-700 leading-relaxed">{problem.insight}</p>
                <p className="text-xs text-obo-primary font-mono mt-2">— {problem.source}</p>
              </div>
              <div className="border-l-2 border-obo-primary pl-4">
                <p className="text-xs font-mono text-obo-primary uppercase tracking-wider mb-1">// reality.check</p>
                <p className="text-sm text-gray-700">{problem.reality}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-block bg-obo-cream rounded-2xl p-8 sm:p-10 border border-obo-primary/20 max-w-3xl">
            <span className="text-obo-primary font-mono text-xs uppercase tracking-[0.2em]">// our.solution</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-obo-dark mt-3 mb-4 tracking-tight">We're not here to patch the system. We're here to rewrite it.</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              OneByteOne provides an alternative runtime: practical skills that map to real demand, mentorship from engineers who've shipped at scale, and a community that optimizes for output over optics.
            </p>
            <a href="#offerings" className="btn-primary">
              Explore Our Offerings <ArrowRight size={18} className="ml-2 inline" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const InstagramCTA = ({ label = `DM ${INSTAGRAM_HANDLE} on Instagram`, variant = 'primary' }) => {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-xl transition-all w-full';
  const styles = variant === 'primary' ? `${base} bg-obo-primary text-white hover:bg-obo-dark` : `${base} bg-obo-cream text-obo-primary hover:bg-obo-primary hover:text-white border border-obo-primary/30`;
  return (
    <a href={INSTAGRAM_DM} target="_blank" rel="noopener noreferrer" className={styles}>
      <Instagram size={18} />{label}
    </a>
  );
};

const OfferingsSection = () => {
  const offerings = [
    { icon: Briefcase, title: 'For Businesses', subtitle: 'Deploy what you actually need', description: 'Enterprise-grade engineering, optimized for teams that need velocity without the bloat.',
      features: ['Custom software, architected to spec', 'DevOps, CI/CD & cloud infrastructure', 'Architecture audits & technical strategy', 'Automation + systems integration', 'Fractional engineering leadership'], accent: 'border-obo-primary' },
    { icon: GraduationCap, title: 'For Learners', subtitle: 'From zero to deployable', description: 'Structured, no-fluff mentorship built around real projects and the skills that actually ship.',
      features: ['1-on-1 mentorship with a Fortune 500 engineer', 'Project-based curriculum, zero filler', 'Interview prep & portfolio optimization', 'Career strategy & offer negotiation', 'A community that ships together'], accent: 'border-obo-accent' },
    { icon: Calendar, title: 'Discovery Call', subtitle: 'A 30-minute diagnostic', description: "Uncertain about your current state? Start here. One call, honest assessment, actionable plan.",
      features: ['Diagnose current state', 'Identify the real blockers', 'Personalized recommendations', 'No commitment, no pitch', 'Next steps you can execute tomorrow'], accent: 'border-obo-beige', highlight: true },
  ];
  return (
    <section id="offerings" className="py-16 sm:py-24 bg-obo-warm-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-obo-primary font-mono text-xs uppercase tracking-[0.2em]">// service.modules</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-obo-dark mt-3 mb-4 tracking-tight">Two vectors. One standard.</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Select the track that fits your current state. We'll meet you at your coordinates and accelerate from there.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {offerings.map((o, i) => (
            <div key={i} className={`bg-obo-cream rounded-2xl p-6 sm:p-8 card-hover border-t-4 ${o.accent} ${o.highlight ? 'ring-2 ring-obo-primary/20' : ''} flex flex-col`}>
              {o.highlight && <div className="inline-block self-start bg-obo-primary text-white text-[10px] font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">Recommended</div>}
              <div className="w-14 h-14 bg-obo-light rounded-xl flex items-center justify-center mb-6"><o.icon className="text-obo-primary" size={28} /></div>
              <h3 className="text-xl sm:text-2xl font-bold text-obo-dark mb-2 tracking-tight">{o.title}</h3>
              <p className="text-obo-primary font-medium mb-3">{o.subtitle}</p>
              <p className="text-gray-600 mb-6">{o.description}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {o.features.map((f, fi) => (<li key={fi} className="flex items-start gap-3"><CheckCircle className="text-obo-primary flex-shrink-0 mt-0.5" size={18} /><span className="text-gray-700 text-sm">{f}</span></li>))}
              </ul>
              <InstagramCTA variant={o.highlight ? 'primary' : 'secondary'} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ResourcesSection = () => {
  const roadmaps = [
    { title: '6-Week Tech Roadmap', tag: 'BUILD', description: 'A six-week sprint protocol with weekly milestones — the most efficient path from curious to shipping production code.' },
    { title: '14-Day Tech Mindset Blueprint', tag: 'MINDSET', description: 'A two-week operating system for how to think, execute, and iterate like an engineer who deploys.' },
  ];
  return (
    <section id="resources" className="py-16 sm:py-24 bg-obo-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-obo-primary font-mono text-xs uppercase tracking-[0.2em]">// free.resources</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-obo-dark mt-3 mb-4 tracking-tight">Initialize with the blueprint.</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Two free roadmaps, zero fluff. DM us on Instagram with your name and which one you want — we'll transmit it over.</p>
        </div>
        <div className="max-w-xl mx-auto mb-14">
          <form onSubmit={(e) => e.preventDefault()} aria-disabled="true" className="flex flex-col sm:flex-row gap-3 opacity-60 pointer-events-none select-none">
            <input type="email" placeholder="Email form temporarily offline" className="w-full px-4 py-4 border border-gray-200 rounded-xl bg-obo-warm-gray text-gray-400" disabled />
            <button type="submit" disabled className="btn-primary py-4 px-8 whitespace-nowrap">Get Access</button>
          </form>
          <p className="text-center text-sm text-gray-500 mt-4 font-mono">// email.signup === paused. Use Instagram DM below to request either roadmap.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-10 max-w-4xl mx-auto">
          {roadmaps.map((r, i) => (
            <div key={i} className="group bg-obo-surface rounded-2xl p-6 sm:p-8 border border-obo-primary/10 hover:border-obo-primary/40 transition-all card-hover">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-semibold tracking-[0.2em] text-obo-primary bg-obo-cream px-2.5 py-1 rounded-full border border-obo-primary/20">{r.tag}</span>
                <span className="text-xs font-mono text-gray-400">0{i + 1}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-obo-dark mb-3 tracking-tight">{r.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">{r.description}</p>
              <InstagramCTA label={`DM ${INSTAGRAM_HANDLE} to request`} variant="secondary" />
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 font-mono">
          {'>'} include your <span className="text-obo-primary">name</span> and <span className="text-obo-primary">which roadmap</span> you want
        </p>
      </div>
    </section>
  );
};

const DiscoverySection = () => (
  <section id="discovery" className="py-16 sm:py-24 bg-obo-primary relative overflow-hidden">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">Ready to initialize?</h2>
      <p className="text-obo-light text-lg mb-8 max-w-2xl mx-auto">One DM. One plan. Zero overhead. Tell us what you're building or where you're headed — we'll handle the routing.</p>
      <a href={INSTAGRAM_DM} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-obo-primary font-semibold px-8 py-4 rounded-xl hover:bg-obo-cream transition-colors text-lg">
        <Instagram size={22} />DM {INSTAGRAM_HANDLE} on Instagram
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-obo-dark py-12 sm:py-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.webp" alt="OneByteOne" className="h-10 w-auto brightness-0 invert" />
            <span className="text-xl font-bold text-white tracking-tight">OneByteOne</span>
          </div>
          <p className="text-gray-400 leading-relaxed">A dual-vector technology firm — engineering outcomes for businesses, tactical paths into tech for everyone else. Fort Worth, TX.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 font-mono text-sm uppercase tracking-wider">Navigate</h4>
          <ul className="space-y-2">
            <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Who We Are</a></li>
            <li><a href="#why-us" className="text-gray-400 hover:text-white transition-colors">Why Us</a></li>
            <li><a href="#offerings" className="text-gray-400 hover:text-white transition-colors">Offerings</a></li>
            <li><a href="#resources" className="text-gray-400 hover:text-white transition-colors">Free Roadmaps</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 font-mono text-sm uppercase tracking-wider">Establish Connection</h4>
          <a href={INSTAGRAM_DM} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <Instagram size={18} />{INSTAGRAM_HANDLE}
          </a>
          <p className="text-gray-500 text-sm mt-4 flex items-center gap-1"><MapPin size={14} /> Fort Worth, Texas</p>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center">
        <p className="text-gray-500 text-sm font-mono">© {new Date().getFullYear()} OneByteOne · architected byte by byte</p>
      </div>
    </div>
  </footer>
);

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="App min-h-screen bg-obo-cream">
      <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyChooseUsSection />
        <OfferingsSection />
        <ResourcesSection />
        <DiscoverySection />
      </main>
      <Footer />
    </div>
  );
}

export default App;