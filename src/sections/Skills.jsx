import Section from "../components/SectionWrapper";

const skillCategories = [
  {
    category: "Frontend",
    color: "bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900/40",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML / CSS", level: 92 },
    ],
  },
  {
    category: "Backend",
    color: "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-100 dark:border-emerald-900/40",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
      { name: "Python", level: 78 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 68 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    category: "Tools & Other",
    color: "bg-amber-50 dark:bg-amber-950/30 border-amber-100 dark:border-amber-900/40",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "C++", level: 82 },
    ],
  },
];

function SkillBar({ name, level }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-body text-sm font-medium text-ink-700 dark:text-cream-100">{name}</span>
        <span className="font-mono text-xs text-ink-400 dark:text-ink-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-cream-200 dark:bg-ink-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-ink-700 dark:bg-cream-200 rounded-full transition-all duration-700"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <Section id="skills" className="border-t border-cream-200 dark:border-ink-700">
      <p className="font-mono text-sm text-ink-400 dark:text-ink-500 mb-3 tracking-widest uppercase">
        02 / Skills
      </p>
      <h2 className="section-heading">What I work with</h2>
      <p className="section-subheading">
        Technologies I use to build products from idea to deployment.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((cat) => (
          <div
            key={cat.category}
            className={`rounded-2xl border p-6 ${cat.color}`}
          >
            <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-cream-50 mb-6">
              {cat.category}
            </h3>
            {cat.skills.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}
