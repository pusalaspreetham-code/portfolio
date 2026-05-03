export default function Section({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`py-24 px-6 max-w-6xl mx-auto ${className}`}
    >
      {children}
    </section>
  );
}
