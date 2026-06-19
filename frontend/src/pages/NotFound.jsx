import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-5">
      <div className="font-display text-7xl text-okn-palemint">404</div>
      <p className="text-okn-mint/70 mt-3 mb-8 font-display italic text-xl">This page hasn't taken root yet.</p>
      <Link to="/" className="btn-leaf text-xs uppercase tracking-eyebrow">Back to Home</Link>
    </section>
  );
}
