import { PROJECTS } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-800 py-24">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-indigo-400 font-medium tracking-widest uppercase text-sm mb-3 text-center">
          What I've built
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-14">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
