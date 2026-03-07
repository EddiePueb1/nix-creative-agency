'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();
  const router = useRouter();
  const [hash, setHash] = useState('');
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Prevent browser from restoring scroll position on reload
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    // On initial page load or reload
    if (isInitialMount.current) {
      isInitialMount.current = false;
      
      if (hash) {
        // Use React Router's navigate to strip the hash, updating its internal state
        router.replace(pathname);
      }
      
      // Force scroll to top
      window.scrollTo(0, 0);
      // Add a tiny delay to override any native browser jump to the ID
      setTimeout(() => window.scrollTo(0, 0), 50);
      return;
    }

    // On subsequent navigations within the app
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, router]);

  useEffect(() => {
    // Basic hash change listener since next/navigation doesn't provide useHash
    const onHashChange = () => {
      setHash(window.location.hash);
    };
    onHashChange(); // Initial check
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return null;
}
