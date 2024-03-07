import { useState, useEffect } from 'react';

const useScrollColor = () => {
  const [scrolling, setScrolling] = useState(false);
  const [shadowColor, setShadowColor] = useState('#ff014f');

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 340;
      if (isTop !== scrolling) {
        setScrolling(isTop);
        setShadowColor(isTop ? '#2A0E61' : '#ff014f');
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolling]);

  return shadowColor;
};

export default useScrollColor;
