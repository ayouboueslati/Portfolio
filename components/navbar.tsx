import { Link } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const links = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <nav className={`tl-nav${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        {/* Logo */}
        <Link href="/" className="tl-nav-logo" aria-label="Home">
          AO
        </Link>

        {/* Desktop links */}
        <ul className="tl-nav-links" role="list">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
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
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
