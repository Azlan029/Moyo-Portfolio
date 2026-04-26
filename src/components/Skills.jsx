import { SKILLS } from '../data/skills.jsx';
import SkillCard from './SkillCard';

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-900 py-24">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-indigo-400 font-medium tracking-widest uppercase text-sm mb-3 text-center">
          What I work with
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-14">
          Skills
        </h2>

        <div className="flex flex-col gap-12">
          {SKILLS.map(({ category, skills }) => (
            <div key={category}>
              <h3 className="text-indigo-300 text-sm font-semibold uppercase tracking-widest mb-5">
                {category}
              </h3>
              <div className="grid grid-cols-3  sm:grid-cols-4 md:grid-cols-5 gap-4">
                {skills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
