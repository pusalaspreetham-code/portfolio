import Section from "../components/SectionWrapper";
import Card from "../components/Card";
import { hackathons } from "../data/hackathons";

export default function Hackathons() {
  return (
    <Section id="hackathons" className="border-t border-cream-200 dark:border-ink-700">
      <p className="font-mono text-sm text-ink-400 dark:text-ink-500 mb-3 tracking-widest uppercase">
        04 / Hackathons
      </p>
      <h2 className="section-heading">Competing &amp; building fast</h2>
      <p className="section-subheading">
  Hackathon experience where I collaborated with a team and worked on problem-solving.
      </p>

      <div className="space-y-6">
        {hackathons.map((h, idx) => (
          <Card key={h.id} className="group">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Left info */}
              <div className="md:col-span-1">
                <div className="flex items-start justify-between md:flex-col md:justify-start gap-2">
                  <div>
                    <p className="font-mono text-xs text-ink-400 dark:text-ink-500 mb-1">{h.date}</p>
                    <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-cream-50 leading-tight">
                      {h.name}
                    </h3>
                    <p className="text-sm text-ink-500 dark:text-ink-400 mt-1">{h.organizer}</p>
                  </div>
                  {h.achievement && h.achievement !== "Participated" && (
                    <span className="inline-block text-xs px-3 py-1.5 rounded-lg bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border">
                      {h.achievement}
                    </span>
                  )}
                </div>
              </div>

              {/* Right content */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono text-ink-400 dark:text-ink-500 uppercase tracking-wide">Project</span>
                  <div className="h-px flex-1 bg-cream-200 dark:bg-ink-700" />
                </div>
                <p className="font-display text-lg font-semibold text-ink-800 dark:text-cream-100 mb-1">{h.project}</p>
                <p className="text-sm text-ink-500 dark:text-cream-200 leading-relaxed mb-3">{h.description}</p>

                <p className="text-xs font-mono text-ink-400 dark:text-ink-500 mb-1 uppercase tracking-wide">Role</p>
                <p className="text-sm font-medium text-ink-700 dark:text-cream-100 mb-4">{h.role}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {h.technologies.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {h.github && (
                    <a href={h.github} target="_blank" rel="noopener noreferrer" className="btn-outline text-xs px-4 py-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View Code
                    </a>
                  )}
                  {h.demo && (
                    <a href={h.demo} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs px-4 py-2">
                      Live Demo
                    </a>
                  )}
                  
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
