export default function Footer() {
  return (
    <footer className="border-t border-ink/10 px-6 py-8">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink/50">
        <span>© {new Date().getFullYear()} MicroLab — Virtual Microbiology Lab</span>
        <span className="font-mono">Educational use</span>
      </div>
    </footer>
  )
}