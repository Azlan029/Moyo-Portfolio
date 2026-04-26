import { Link } from 'react-scroll';
import heroImage from '../assets/hero.png';

const OWNER_NAME = 'Faiza Adeoye';
const OWNER_TITLE = 'Full-Stack Software Engineer';
const OWNER_TAGLINE = 'I build clean, performant web experiences that users love.';

const SCROLL_PROPS = {
  smooth: true,
  duration: 500,
  offset: -64,
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gray-900 flex items-center justify-center pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12 py-16">
        <div className="flex-1 text-center md:text-left">
          <p className="text-indigo-400 font-medium tracking-widest uppercase text-sm mb-3">
            Welcome
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            {OWNER_NAME}
          </h1>
          <h2 className="text-xl sm:text-2xl text-indigo-300 font-semibold mb-5">
            {OWNER_TITLE}
          </h2>
          <p className="text-gray-400 text-lg max-w-lg mx-auto md:mx-0 mb-8">
            {OWNER_TAGLINE}
          </p>
          <Link
            to="projects"
            {...SCROLL_PROPS}
            className="inline-block cursor-pointer bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            aria-label="View my projects"
          >
            View My Projects
          </Link>
        </div>

        {/* Profile image */}
        <div className="shrink-0">
          <img
            src={heroImage}
            alt="Profile photo of Moyo Adekoya"
            className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-indigo-500 shadow-xl shadow-indigo-900/40"
          />
        </div>
      </div>
    </section>
  );
}
