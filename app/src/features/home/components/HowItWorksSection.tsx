import { Search, FlaskConical, Award } from "lucide-react"

const STEPS = [
  { icon: Search, label: "Browse", title: "Pick your tools", desc: "Explore the equipment library — no account needed." },
  { icon: FlaskConical, label: "Run", title: "Follow the steps", desc: "Work through a guided simulation at your own pace." },
  { icon: Award, label: "Review", title: "See your results", desc: "Get instant feedback; sign in only if you want it saved." },
]

export default function HowItWorksSection() {
  return (
    <section className="px-6 py-20 bg-ink text-glass">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center font-display text-3xl font-semibold mb-14">How it works</h2>
        <div className="grid gap-10 sm:grid-cols-3">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.label} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-colony/50">
                  <Icon className="h-6 w-6 text-colony" />
                </div>
                <span className="font-mono text-xs tracking-[0.2em] text-agar uppercase">
                  {String(i + 1).padStart(2, "0")} — {step.label}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-glass/70">{step.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}