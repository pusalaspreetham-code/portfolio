export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-cream-200 dark:bg-ink-800 rounded-full blur-2xl opacity-30" />
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-cream-100 dark:bg-ink-700 rounded-full blur-xl opacity-20" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-20">
        
        {/* Status */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cream-200 dark:border-ink-600 bg-white dark:bg-ink-800 mb-8 text-sm text-ink-500 dark:text-cream-200">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
          Open to internship opportunities
        </div>

        {/* Name */}
        <h1 className="font-display text-6xl md:text-8xl font-bold text-ink-900 dark:text-white mb-4 leading-none tracking-tight">
          Pusala Preetham
        </h1>

        {/* Role */}
        <p className="text-2xl md:text-3xl text-ink-500 dark:text-ink-400 italic mb-6">
          Web Developer & CS Student
        </p>

        {/* Intro */}
        <p className="text-lg text-ink-600 dark:text-cream-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          I build web applications and enjoy solving real-world problems through code.
          I have worked on projects like a dropout prediction system, virtual cookbook,
          and sports tournament management system. Currently exploring new concepts
          through my research internship.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo("#projects")}
            className="btn-primary px-8 py-3.5"
          >
            View My Projects
          </button>

          <button
            onClick={() => scrollTo("#contact")}
            className="btn-outline px-8 py-3.5"
          >
            Get in Touch
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mt-12">
          
          {/* GitHub */}
          <a
            href="https://github.com/pusalaspreetham-code"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-xl border border-cream-200 dark:border-ink-600 bg-white dark:bg-ink-800 text-gray-700 dark:text-white hover:scale-110 transition"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 0c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2.9-.3 2-.4 3-.4s2.1.1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4 0-6.6-5.4-12-12-12z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/pusala-preetham-3b2ba533a/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-xl border border-cream-200 dark:border-ink-600 bg-white dark:bg-ink-800 text-blue-600 hover:scale-110 transition"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.7H9.1V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.3-1.8 3.5 0 4.2 2.3 4.2 5.4v6.2zM5.3 7.4c-1.1 0-2.1-.9-2.1-2.1 0-1.1.9-2.1 2.1-2.1s2.1.9 2.1 2.1c0 1.2-1 2.1-2.1 2.1zm1.8 13H3.5V9h3.6v11.4zM22.2 0H1.8C.8 0 0 .8 0 1.8v20.4C0 23.2.8 24 1.8 24h20.4c1 0 1.8-.8 1.8-1.8V1.8C24 .8 23.2 0 22.2 0z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-400 dark:text-ink-500">
        <span className="text-xs uppercase">Scroll</span>
      </div>
    </section>
  );
}