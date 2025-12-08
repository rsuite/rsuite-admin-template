import { useState, useEffect } from 'react';

function getHeight(win: Window | undefined): number {
  if (typeof window === 'undefined' || !win) return 0;
  return win.innerHeight || win.document.documentElement.clientHeight || win.document.body.clientHeight;
}

export function useWindowHeight(): number {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowHeight(getHeight(window));
      
      const handleResize = () => setWindowHeight(getHeight(window));
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return windowHeight;
}
