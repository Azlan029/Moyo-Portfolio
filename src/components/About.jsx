const SUMMARY = `Faiza Adeoye is a Full-Stack Software Engineer with over 6 years of experience
designing and shipping production-grade web applications. She specialises in React
ecosystems on the frontend and Node.js / Python services on the backend, with a
strong focus on clean architecture, performance, and developer experience. Faiza
has worked across early-stage startups and scale-ups, leading cross-functional
teams and mentoring junior engineers along the way.`;

const HIGHLIGHTS = [
  { stat: '6+', label: 'Years of experience' },
  { stat: '20+', label: 'Projects shipped' },
  { stat: '3', label: 'Open-source contributions' },
  { stat: '2', label: 'Engineering teams led' },
];

export default function About() {
  return (
    <section id="about" className="bg-gray-800 py-24">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <p className="text-indigo-400 font-medium tracking-widest uppercase text-sm mb-3 text-center">
          Background
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          About Me
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Professional summary */}
          <div className="flex-1">
            <p className="text-gray-300 text-lg leading-relaxed">{SUMMARY}</p>

            {/* Resume download */}
            <a
              href="/resume.pdf"
              download
              className="inline-block mt-8 overflow-hidden 
            transition-duration-300 hover:-translate-y-2 hover:shadow-gray-700 hover:shadow-xl cursor-pointer bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800"
              aria-label="Download Faiza's resume as a PDF"
            >
              Download Resume
            </a>
          </div>

          {/* Career highlights */}
          <div className="grid grid-cols-2 gap-6 lg:w-72 shrink-0">
            {HIGHLIGHTS.map(({ stat, label }) => (
              <div
                key={label}
                className="bg-gray-900 rounded-xl p-6 text-center border overflow-hidden 
            transition duration-300 hover:-translate-y-2 hover:shadow-indigo-500/40 hover:shadow-xl cursor-pointer border-gray-700"
              >
                <p className="text-3xl font-bold text-indigo-400 mb-1">{stat}</p>
                <p className="text-gray-400 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
