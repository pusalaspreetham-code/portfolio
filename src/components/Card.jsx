export default function Card({ children, className = "" }) {
  return (
    <div className={`card-base p-6 ${className}`}>
      {children}
    </div>
  );
}
