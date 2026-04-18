export function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-sm gradient-text font-bold tracking-wider">
          VG
        </span>
        <span className="text-xs text-content-secondary tracking-wide">
          &copy; {new Date().getFullYear()} Vanush Grigoryan
        </span>
      </div>
    </footer>
  );
}
