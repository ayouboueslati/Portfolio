// Deployment trigger: 2026-03-12
import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import FloatingTechBackground from '../components/FloatingTechBackground';

/* ─── Data ─────────────────────────────────────────────── */

const experienceData = [
  {
    date: 'Jan 2025 – Jul 2025',
    role: 'Final Year Project',
    company: 'Hendrik Thurau Enterprises, Switzerland',
    desc: 'Booking & event management system using event sourcing, Kafka, AI recommender & Ionic.',
  },
  {
    date: 'Jun 2024 – Sept 2024',
    role: 'Mobile Developer Intern',
    company: 'Tabaani Travel Agency, Tunisia',
    desc: 'Flutter mobile app for travel booking and trip management with Node.js backend.',
  },
  {
    date: 'Jun 2024 – Sept 2024',
    role: 'Mobile Developer Intern',
    company: 'Ebuild, Tunisia',
    desc: 'Cross-platform app for a sports center: scheduling, payments, chat & dashboard.',
  },
  {
    date: 'Aug 2021 – Sept 2021',
    role: 'Intern',
    company: 'Electronic Payment Department, Tunisia',
    desc: 'Worked on electronic payment systems and optimization processes.',
  },
];

const tickerItems = [
  'Flutter', 'Kotlin', 'SwiftUI', 'Ionic', 'Next.js', 'Python', 'FastAPI',
  'Node.js', 'Docker', 'Kafka', 'Git', 'Weaviate', 'PHP', 'Symfony',
  '.NET', 'Jenkins', 'Vagrant', 'Zod', 'Figma',
];

const categories = [
  { label: 'Mobile', items: ['Flutter', 'Kotlin', 'SwiftUI', 'Ionic'] },
  { label: 'Web & Backend', items: ['Next.js', 'PHP', 'Symfony', '.NET', 'Node.js', 'Python', 'FastAPI'] },
  { label: 'DevOps & Tools', items: ['Docker', 'Jenkins', 'Kafka', 'Git', 'Vagrant', 'Zod', 'Weaviate'] },
  { label: 'Design', items: ['UI/UX Design', 'Figma'] },
];

const freelanceProjects = [
  {
    index: 'F1',
    name: 'The Chillery',
    tags: ['Web', 'E-commerce', 'Stripe'],
    status: 'Live',
    statusColor: 'live',
    desc: 'Premium e-commerce store for smoking accessories — Stripe payments, age verification & full admin dashboard.',
  },
  {
    index: 'F2',
    name: 'Tapply',
    tags: ['SaaS', 'NFC', 'PostgreSQL'],
    status: 'In Development',
    statusColor: 'dev',
    desc: 'Multi-tenant NFC event lead-capture platform. Replaces paper sign-up sheets with instant digital forms using secure, isolated org databases.',
  },
  {
    index: 'F3',
    name: 'Nour Distribution',
    tags: ['Web', 'B2B/B2C', 'Dashboard'],
    status: 'Offline',
    statusColor: 'offline',
    desc: 'African hair distribution platform — ordering, invoice generation, stock management & complete back office.',
  },
];

const projects = [
  {
    index: '01',
    name: 'Charge Tunisie',
    tags: ['Web', 'Next.js', 'TypeScript'],
    desc: 'Electric vehicle platform for the Tunisian market — catalog, charging map, dealership locator & test drive booking.',
  },
  {
    index: '02',
    name: 'Booking & Event System',
    tags: ['Web', 'Mobile', 'Ionic', 'Kafka'],
    desc: 'Event sourcing-based booking system for lake tours with AI recommendations and real-time reservation workflows.',
  },
  {
    index: '03',
    name: 'Job Finder – Renewable Energy',
    tags: ['iOS', 'Android', 'Flutter'],
    desc: 'Multi-platform job platform for the renewable energy sector — SwiftUI, Kotlin & Flutter dashboard.',
  },
  {
    index: '04',
    name: 'Iqraa – Spiritual Guide App',
    tags: ['Mobile', 'Web', 'Blockchain'],
    desc: 'Religious companion app with Flutter, VueJS, NodeJS, Python & Hedera blockchain.',
  },
  {
    index: '05',
    name: 'Artistic Avenue',
    tags: ['Mobile', 'Web', 'Symfony'],
    desc: 'Cross-platform platform for artists to display work and engage with audiences.',
  },
  {
    index: '06',
    name: 'DevOps CI/CD Pipeline',
    tags: ['DevOps', 'Docker', 'Kubernetes'],
    desc: 'Automated CI/CD pipeline with Spring Boot, Jenkins, SonarQube, Grafana & Kubernetes.',
  },
];

/* ─── Components ───────────────────────────────────────── */

const AnimatedCounter = ({ end, suffix = '' }: { end: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2000; // 2 seconds
    let animationFrame: number;
    let observer: IntersectionObserver;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    if (ref.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            startTime = null;
            animationFrame = requestAnimationFrame(animate);
            observer.disconnect(); // Only animate once
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(ref.current);
    }

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      if (observer) observer.disconnect();
    };
  }, [end]);

  return <p ref={ref} className="stat-number">{count}{suffix}</p>;
};

/* ─── Home Component ────────────────────────────────────── */

export default function Home() {
  /* IntersectionObserver for scroll reveals */
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    els.forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${(i % 5) * 100}ms`;
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  /* Email copy */
  const copyEmail = () => {
    navigator.clipboard.writeText('ayoubweslati00@gmail.com');
    const tooltip = document.getElementById('copied-tooltip');
    if (tooltip) {
      tooltip.innerText = 'Address Copied';
      tooltip.classList.add('show');
      setTimeout(() => tooltip.classList.remove('show'), 2000);
    }
  };return (
    <>
      <Head>
        <title>Ayoub Oueslati — Software Engineer</title>
        <meta name="description" content="Portfolio of Ayoub Oueslati, Software Engineer specialising in mobile & web development." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        {/* ── Page Loader ── */}
        <div id="page-loader" aria-hidden="true">
          <div className="loader-terminal">
            &gt; Ayoub Oueslati_
            <span className="loader-cursor" />
          </div>
        </div>

        {/* ═══════ HERO ═══════ */}
        <section className="hero-section" aria-label="Hero">
          <div className="hero-bg" aria-hidden="true" />

          {/* Main content — fades in after typing */}
          <div className="hero-content">
            <h1 className="hero-name">Ayoub Oueslati</h1>
            <p className="hero-subtitle">Software Engineer · Mobile &amp; Web</p>
            <Link href="/OueslatiAyoub.pdf" download="Ayoub_Oueslati_CV.pdf" className="cv-btn">
              <span className="cv-btn-icon">↓</span>
              Download CV
            </Link>
          </div>

          {/* Scroll arrow */}
          <Link id="hero-scroll-arrow" className="hero-scroll-arrow" href="#about" aria-label="Scroll to about" style={{ opacity: 0, transition: 'opacity 1s 1.5s' }}>
            <span>Scroll</span>
            <div className="scroll-chevron" aria-hidden="true" />
          </Link>
        </section>

        <div className="tl-divider" />

        {/* ═══════ ABOUT ═══════ */}
        <section id="about" aria-label="About">
          <div className="tl-section">
            <span className="section-number reveal">01 —</span>
            <p className="section-label reveal"> about</p>
            <h2 className="section-title reveal">Who I am.</h2>
            <div className="about-grid">
              <div className="reveal">
                <div className="about-avatar-wrap">
                  <div className="about-avatar-frame"></div>
                  <Image
                    src="/images/ayoubpic.jpeg"
                    alt="Ayoub Oueslati"
                    className="about-avatar-img"
                    width={400}
                    height={500}
                    priority
                  />
                </div>
              </div>
              <div>
                <p className="about-bio reveal">
                  Passionate software engineer building mobile apps, web platforms, and scalable
                  backend systems. I specialise in cross-platform development, event-driven
                  architectures, and AI-powered features — from idea to deployment.
                </p>
                <div className="about-pills reveal">
                  <span className="pill">📍 Riga Latvia</span>
                  <span className="pill">🎓 Software Engineering</span>
                </div>
                <div className="language-strip reveal">
                  <span className="lang-item"><span className="lang-flag">🇹🇳</span> Arabic</span>
                  <span className="lang-item"><span className="lang-flag">🇫🇷</span> French</span>
                  <span className="lang-item"><span className="lang-flag">🇬🇧</span> English</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ STATS STRIP ═══════ */}
        <div className="stats-strip reveal">
          <div className="stat-item">
            <AnimatedCounter end={4} suffix="+" />
            <p className="stat-label">Internships</p>
          </div>
          <div className="stat-item">
            <AnimatedCounter end={8} suffix="+" />
            <p className="stat-label">Projects Built</p>
          </div>
          <div className="stat-item">
            <AnimatedCounter end={3} />
            <p className="stat-label">Languages Spoken</p>
          </div>
          <div className="stat-item">
            <AnimatedCounter end={3} />
            <p className="stat-label">Countries</p>
          </div>
        </div>

        <div className="tl-divider" />

        {/* ═══════ EXPERIENCE ═══════ */}
        <section id="experience" aria-label="Experience">
          <div className="tl-section">
            <span className="section-number reveal">02 —</span>
            <p className="section-label reveal"> experience</p>
            <h2 className="section-title reveal">Where I&apos;ve worked.</h2>
            <div className="timeline">
              {experienceData.map((entry, i) => (
                <div key={i} className="timeline-entry reveal">
                  <div className="timeline-dot" aria-hidden="true" />
                  <p className="timeline-date">{entry.date}</p>
                  <p className="timeline-role">
                    {entry.role} · <em style={{ opacity: 0.7 }}>{entry.company}</em>
                  </p>
                  <p className="timeline-desc">{entry.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="tl-divider" />

        {/* ═══════ TECHNOLOGIES ═══════ */}
        <section id="skills" aria-label="Technologies">
          <div className="tl-section">
            <span className="section-number reveal">03 —</span>
            <p className="section-label reveal"> technologies</p>
            <h2 className="section-title reveal">What I build with.</h2>

            {/* Ticker */}
            <div className="ticker-wrapper reveal" aria-hidden="true">
              <div className="ticker-track">
                {[...tickerItems, ...tickerItems].map((item, i) => (
                  <span key={i} className="ticker-item">
                    {item}
                    <span className="ticker-sep">·</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Category grid */}
            <div className="cat-grid">
              {categories.map((cat) => (
                <div key={cat.label} className="cat-card reveal">
                  <p className="cat-label">{cat.label}</p>
                  <ul className="cat-list" role="list">
                    {cat.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="tl-divider" />

        {/* ═══════ FREELANCE WORK ═══════ */}
        <section id="freelance" aria-label="Freelance Work">
          <div className="tl-section">
            <FloatingTechBackground />
            <span className="section-number reveal">04 —</span>
            <p className="section-label reveal"> client work</p>
            <h2 className="section-title reveal">Freelance &amp; Live Projects.</h2>
            <div className="projects-grid">
              {freelanceProjects.map((p) => (
                <article key={p.index} className="project-card reveal" tabIndex={0} aria-label={p.name}>
                  <span className="project-index" aria-hidden="true">{p.index}</span>
                  <span className="project-arrow" aria-hidden="true">→</span>
                  <span className="project-id" aria-hidden="true">[ ID: 0x00{p.index} ]</span>
                  
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="project-name" data-text={p.name} style={{ marginBottom: 0 }}>{p.name}</h3>
                    <span className={`status-pill ${p.statusColor}`}>
                      <span className="status-dot"></span>
                      {p.status}
                    </span>
                  </div>
                  
                  <div className="project-pills mt-3">
                    {p.tags.map((tag) => (
                      <span key={tag} className="project-pill">{tag}</span>
                    ))}
                  </div>
                  <p className="project-desc">{p.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="tl-divider" />

        {/* ═══════ PROJECTS ═══════ */}
        <section id="projects" aria-label="Projects">
          <div className="tl-section">
            <span className="section-number reveal">05 —</span>
            <p className="section-label reveal"> projects</p>
            <h2 className="section-title reveal">Selected work.</h2>
            <div className="projects-grid">
              {projects.map((p) => (
                <article key={p.index} className="project-card reveal" tabIndex={0} aria-label={p.name}>
                  <span className="project-index" aria-hidden="true">{p.index}</span>
                  <span className="project-arrow" aria-hidden="true">→</span>
                  <span className="project-id" aria-hidden="true">[ ID: 0x00{p.index} ]</span>
                  <h3 className="project-name" data-text={p.name}>{p.name}</h3>
                  <div className="project-pills">
                    {p.tags.map((tag) => (
                      <span key={tag} className="project-pill">{tag}</span>
                    ))}
                  </div>
                  <p className="project-desc">{p.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="tl-divider" />

        {/* ═══════ CONTACT ═══════ */}
        <section id="contact" aria-label="Contact">
          <div className="contact-section">
            <span className="section-number reveal">06 —</span>
            <p className="section-label reveal"> init connection</p>
            
            <h2 className="contact-headline reveal">Let&apos;s build<br />something.</h2>
            <p className="contact-subline reveal">Open to freelance, full-time &amp; collaborations.</p>

            <div className="contact-luxe-wrap reveal">
              <span id="copied-tooltip" className="contact-luxe-feedback" role="status" aria-live="polite">
                Address Copied
              </span>
              <button
                className="contact-luxe-email"
                onClick={copyEmail}
                aria-label="Copy email address"
                type="button"
              >
                ayoubweslati00@gmail.com
              </button>
            </div>

            {/* Socials */}
            <div className="contact-socials reveal">
              <a
                href="https://github.com/ayouboueslati"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub profile"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/ayoub-weslati-73b697202/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn profile"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ═══════ FOOTER ═══════ */}
        <footer className="tl-footer">
          <p>© 2025 Ayoub Oueslati</p>
        </footer>
      </main>
    </>
  );
}
