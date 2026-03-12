import { AppProps } from 'next/app';
import Navbar from '../components/navbar';
import '../styles/globals.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const dot = document.getElementById('cursor-dot');
    const trail = document.getElementById('cursor-trail');
    const progress = document.getElementById('scroll-progress');

    const onMove = (e: MouseEvent) => {
      if (dot) { dot.style.left = e.clientX + 'px'; dot.style.top = e.clientY + 'px'; }
      if (trail) { trail.style.left = e.clientX + 'px'; trail.style.top = e.clientY + 'px'; }
    };

    const onScroll = () => {
      if (!progress) return;
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = total > 0 ? `${(scrolled / total) * 100}%` : '0%';
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('scroll', onScroll, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <div id="scroll-progress" aria-hidden="true" />
      <div id="grain-overlay" aria-hidden="true" />
      <div id="cursor-dot" aria-hidden="true" />
      <div id="cursor-trail" aria-hidden="true" />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
