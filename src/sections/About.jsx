import Section from "../components/SectionWrapper";

const interests = [
  "Machine Learning",
  "Full-Stack Development",
  "Artificial Intelligence",
  "Data Structures & Algorithms",
  "Problem Solving",
  "Backend Development",
];

export default function About() {
  return (
    <Section
      id="about"
      className="border-t border-cream-200 dark:border-ink-700"
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Text side */}
        <div>
          <p className="font-mono text-sm text-ink-400 dark:text-ink-500 mb-3 tracking-widest uppercase">
            01 / About
          </p>

          <h2 className="section-heading">A little about me</h2>

          <div className="space-y-4 text-ink-600 dark:text-cream-200 leading-relaxed">
            <p>
              I'm a Computer Science and Engineering undergraduate at SRM
              University, Amaravati, with a strong interest in Machine
              Learning and Full-Stack Development. I enjoy building
              practical software solutions that combine intelligent systems
              with reliable web applications.
            </p>

            <p>
              I've worked on projects involving AI-powered civic technology,
              machine learning prediction systems, and end-to-end web
              applications. My work spans data preparation, model
              development, APIs, databases, and user-facing interfaces.
            </p>

            <p>
              Currently, I've completed a research internship focused on
              electricity consumption forecasting, where I worked with
              real-world smart-meter data, feature engineering, machine
              learning models, and weather-based forecasting.
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

          {/* Stats */}
          <div className="absolute -bottom-4 -left-4 bg-white dark:bg-ink-800 border border-cream-200 dark:border-ink-600 rounded-xl px-4 py-3 shadow-lg">
            <p className="font-display text-2xl font-bold text-ink-900 dark:text-cream-50">
              367+
            </p>
            <p className="text-xs text-ink-500 dark:text-cream-200 font-body">
              LeetCode problems
            </p>
          </div>

          <div className="absolute -top-4 -right-4 bg-white dark:bg-ink-800 border border-cream-200 dark:border-ink-600 rounded-xl px-4 py-3 shadow-lg">
            <p className="font-display text-2xl font-bold text-ink-900 dark:text-cream-50">
              4+
            </p>
            <p className="text-xs text-ink-500 dark:text-cream-200 font-body">
              Hackathons participated
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}