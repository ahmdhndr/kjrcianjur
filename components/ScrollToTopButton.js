import { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTopButton() {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 400) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 400) {
      setShowScroll(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', checkScrollTop);
  }
  return (
    <div className={`scrollTop ${showScroll ? 'flex items-center justify-center' : 'none'}`}>
      <FaArrowUp onClick={scrollTop} className='text-white text-2xl' />
    </div>
  );
}
