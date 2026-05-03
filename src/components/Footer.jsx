export default function Footer() {
  return (
    <footer className="border-t border-cream-200 dark:border-ink-700 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg font-bold text-ink-900 dark:text-cream-50">
          Preetham<span className="text-ink-400 dark:text-ink-500">.</span>
        </p>
        <p className="text-sm text-ink-400 dark:text-ink-500 font-body text-center">
          Built with React &amp; Tailwind CSS · {new Date().getFullYear()}
        </p>
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-sm text-ink-400 dark:text-ink-500 hover:text-ink-700 dark:hover:text-cream-200 transition-colors flex items-center gap-1"
        >
          Back to top
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
