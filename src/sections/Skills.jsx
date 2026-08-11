import Section from "../components/SectionWrapper";

const skillCategories = [
  {
    category: "Frontend",
    color: "bg-blue-50 dark:bg-blue-950/30 border-blue-100 dark:border-blue-900/40",
    skills: ["React", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "HTML / CSS", "Next.js"],
  },
  {
    category: "Backend",
    color: "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-100 dark:border-emerald-900/40",
    skills: ["Node.js", "Express.js", "Python", "MongoDB", "PostgreSQL", "REST APIs"],
  },
  {
    category: "Tools & Other",
    color: "bg-amber-50 dark:bg-amber-950/30 border-amber-100 dark:border-amber-900/40",
    skills: ["Git & GitHub", "Docker", "C++", "Linux", "Figma", "AWS (S3, EC2)"],
  },
];

function SkillTag({ name }) {
  return (
    <span className="inline-block font-body text-sm font-medium text-ink-700 dark:text-cream-100 bg-cream-100 dark:bg-ink-800 border border-cream-200 dark:border-ink-600 rounded-full px-3.5 py-1.5 mr-2 mb-2">
      {name}
    </span>
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
            <div className="flex flex-wrap">
              {cat.skills.map((skill) => (
                <SkillTag key={skill} name={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}