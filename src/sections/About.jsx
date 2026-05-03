import Section from "../components/SectionWrapper";

const interests = [
  "Web Development",
  "Machine Learning",
  "Problem Solving",
  "UI/UX Design",
  "Learning New Technologies",
];

export default function About() {
  return (
    <Section id="about" className="border-t border-cream-200 dark:border-ink-700">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        {/* Text side */}
        <div>
          <p className="font-mono text-sm text-ink-400 dark:text-ink-500 mb-3 tracking-widest uppercase">
            01 / About
          </p>

          <h2 className="section-heading">A little about me</h2>

          <div className="space-y-4 text-ink-600 dark:text-cream-200 leading-relaxed">
            <p>
              I'm a Computer Science student with an interest in building web applications
              and solving real-world problems using technology. I enjoy working on both
              frontend and backend to create simple and functional applications.
            </p>

            <p>
              I have worked on projects like a dropout prediction system, virtual cookbook,
              and a sports tournament management system, which helped me understand core
              development concepts and improve my problem-solving skills.
            </p>

            <p>
              Currently, I am doing a research internship where I am exploring new concepts
              and improving my technical knowledge.
            </p>
          </div>

          <div className="mt-8">
            <p className="font-body font-semibold text-ink-900 dark:text-cream-50 mb-3">
              Things I'm interested in
            </p>

            <div className="flex flex-wrap gap-2">
              {interests.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Visual side */}
        <div className="relative">
          <div className="relative w-72 h-72 mx-auto">
            <div className="absolute inset-0 rounded-3xl bg-cream-200 dark:bg-ink-700 rotate-3" />
            <div className="absolute inset-0 rounded-3xl bg-cream-100 dark:bg-ink-800 border-2 border-cream-200 dark:border-ink-600 flex items-center justify-center overflow-hidden">
              
              {/* Avatar */}
              <div className="w-full h-full overflow-hidden rounded-3xl">
                <img
                  src="/profile.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Stats (REALISTIC) */}
          <div className="absolute -bottom-4 -left-4 bg-white dark:bg-ink-800 border border-cream-200 dark:border-ink-600 rounded-xl px-4 py-3 shadow-lg">
            <p className="font-display text-2xl font-bold text-ink-900 dark:text-cream-50">1</p>
            <p className="text-xs text-ink-500 dark:text-cream-200 font-body">Hackathon participated</p>
          </div>

          <div className="absolute -top-4 -right-4 bg-white dark:bg-ink-800 border border-cream-200 dark:border-ink-600 rounded-xl px-4 py-3 shadow-lg">
            <p className="font-display text-2xl font-bold text-ink-900 dark:text-cream-50">3</p>
            <p className="text-xs text-ink-500 dark:text-cream-200 font-body">Projects built</p>
          </div>
        </div>
      </div>
    </Section>
  );
}