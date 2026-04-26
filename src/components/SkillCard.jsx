export default function SkillCard({ name, icon, color }) {
  return (
      <div className="overflow-hidden flex flex-col items-center gap-3 
  bg-gray-900 border border-gray-700 rounded-xl p-5 cursor-pointer

  transition-all duration-500
  ease-[cubic-bezier(0.16,1,0.3,1)]

  hover:-translate-y-3 
  hover:scale-[1.04]
  hover:shadow-[0_25px_60px_rgba(99,102,241,0.25)]
  hover:border-indigo-500
">
      <span className={color}>{icon}</span>
      <span className="text-gray-300 text-sm font-medium">{name}</span>
    </div>
  );
}
