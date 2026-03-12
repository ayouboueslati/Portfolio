import { useState, useEffect } from 'react';
import Link from 'next/link';

const links = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      
      const sections = links.map(l => document.getElementById(l.id));
      let current = '';
      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          // Find the section that dominates the middle of the screen
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section.id;
          }
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`tl-nav${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="tl-nav-bg-grain" aria-hidden="true" />
        
        {/* Logo */}
        <a href="/" className="tl-nav-logo" aria-label="Home">
          AO
        </a>

        {/* Desktop links */}
        <ul className="tl-nav-links" role="list">
          {links.map((l) => {
            const isActive = activeSection === l.id;
            return (
              <li key={l.id}>
                <Link href={`/#${l.id}`} className={isActive ? 'active-cli' : ''}>
                  {isActive ? (
                    <>
                      &gt; {l.label.toLowerCase()}
                      <span className="blink">_</span>
                    </>
                  ) : (
                    l.label
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Hamburger */}
        <button
          className="tl-nav-hamburger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div className={`tl-mobile-menu${menuOpen ? ' open' : ''}`} role="dialog" aria-modal="true">
        <button
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', color: 'var(--muted)', fontSize: '1.2rem', cursor: 'none' }}
        >
          ✕
        </button>
        {links.map((l) => {
          const isActive = activeSection === l.id;
          return (
            <Link key={l.id} href={`/#${l.id}`} onClick={() => setMenuOpen(false)} className={isActive ? 'active-cli' : ''}>
              {isActive ? `> ${l.label.toLowerCase()}_` : l.label}
            </Link>
          );
        })}
      </div>
    </>
  );
}
