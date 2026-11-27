export default function Toast({ message }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 rounded-full px-5 py-2.5 text-sm font-medium shadow-lg transition-all duration-300 ${message ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
      style={{ background: "var(--fg)", color: "var(--bg)" }}
    >
      {message}
    </div>
  );
}
