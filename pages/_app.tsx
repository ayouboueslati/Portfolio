import { AppProps } from 'next/app';
import Navbar from '../components/navbar';
import '../styles/globals.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const dot = document.getElementById('cursor-dot');
    const trail = document.getElementById('cursor-trail');

    const onMove = (e: MouseEvent) => {
      if (dot) { dot.style.left = e.clientX + 'px'; dot.style.top = e.clientY + 'px'; }
      if (trail) { trail.style.left = e.clientX + 'px'; trail.style.top = e.clientY + 'px'; }
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <>
      <div id="grain-overlay" aria-hidden="true" />
      <div id="cursor-dot" aria-hidden="true" />
      <div id="cursor-trail" aria-hidden="true" />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
