import Section from "../components/SectionWrapper";
import Card from "../components/Card";
import { internships } from "../data/internships";

export default function Internships() {
  return (
    <Section id="internships" className="border-t border-cream-200 dark:border-ink-700">
      
      <p className="font-mono text-sm text-ink-400 dark:text-ink-500 mb-3 tracking-widest uppercase">
        05 / Internships
      </p>

      <h2 className="section-heading">Experience</h2>

      <p className="section-subheading">
        My current research internship and learning journey.
      </p>

      <div className="space-y-6">
        {internships.map((intern) => (
          <Card key={intern.id} className="group">
            <div className="grid md:grid-cols-3 gap-6">

              {/* LEFT SIDE */}
              <div className="md:col-span-1">
                
                {/* Placeholder icon */}
                <div className="w-12 h-12 rounded-xl bg-cream-200 dark:bg-ink-700 flex items-center justify-center mb-3">
                  <span className="text-xs text-ink-500 dark:text-cream-200">
                    Intern
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-cream-50">
                  {intern.company}
                </h3>

                <p className="text-sm text-ink-600 dark:text-cream-200 mt-1">
                  {intern.role}
                </p>

                <p className="text-xs text-ink-400 dark:text-ink-500 mt-2">
                  {intern.duration}
                </p>

                <p className="text-xs text-ink-400 dark:text-ink-500">
                  {intern.location}
                </p>

                {/* Ongoing badge */}
                {intern.status === "Ongoing" && (
                  <span className="inline-block mt-2 text-xs px-2 py-1 rounded bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">
                    Ongoing
                  </span>
                )}
              </div>

              {/* RIGHT SIDE */}
              <div className="md:col-span-2">
                
                <p className="text-sm text-ink-500 dark:text-cream-200 leading-relaxed mb-4">
                  {intern.description}
                </p>

                {/* Work / learning */}
                <div className="mb-4">
                  <p className="text-xs font-mono font-medium text-ink-400 dark:text-ink-500 uppercase tracking-wide mb-2">
                    What I'm working on
                  </p>

                  {intern.responsibilities && intern.responsibilities.length > 0 ? (
                    <ul className="space-y-1.5">
                      {intern.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-ink-600 dark:text-cream-200">
                          <span className="mt-2 w-1 h-1 rounded-full bg-ink-400 dark:bg-ink-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-ink-400">
                      Currently exploring and learning concepts related to my research.
                    </p>
                  )}
                </div>

                {/* Skills */}
                <div>
                  <p className="text-xs font-mono font-medium text-ink-400 dark:text-ink-500 uppercase tracking-wide mb-2">
                    Skills
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {intern.skills.map((skill) => (
                      <span key={skill} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}