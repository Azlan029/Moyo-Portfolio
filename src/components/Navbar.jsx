import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import useActiveSection from '../hooks/useActiveSection';

const NAV_LINKS = [
  { label: 'Home',     to: 'hero' },
  { label: 'About',    to: 'about' },
  { label: 'Skills',   to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact',  to: 'contact' },
];

const SCROLL_PROPS = {
  smooth: true,
  duration: 500,
  offset: -64,
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const navRef = useRef(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu  = () => setMenuOpen(false);

  // Close when tapping/clicking anywhere outside the navbar
  useEffect(() => {
    if (!menuOpen) return;
    const handleOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('touchstart', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('touchstart', handleOutside);
    };
  }, [menuOpen]);

  const linkClass = (to) =>
    `cursor-pointer transition-colors duration-200 hover:text-indigo-400 ${
      activeSection === to
        ? 'text-indigo-400 font-semibold border-b-2 border-indigo-400'
        : 'text-gray-300'
    }`;

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm shadow-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        <span className="text-white font-bold text-lg tracking-wide select-none">
          Faiza
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                {...SCROLL_PROPS}
                className={linkClass(to)}
                onClick={closeMenu}
                aria-current={activeSection === to ? 'page' : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger — mobile only, right side */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`block h-0.5 w-6 bg-gray-300 transition-transform duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-gray-300 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-gray-300 transition-transform duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown — only renders when open, no extra height when closed */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-gray-900/95 border-t border-gray-700"
        >
          <ul className="flex flex-col items-end px-6 py-3 gap-4">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  {...SCROLL_PROPS}
                  className={linkClass(to)}
                  onClick={closeMenu}
                  aria-current={activeSection === to ? 'page' : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
