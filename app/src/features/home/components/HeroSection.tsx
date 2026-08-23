import { Button } from "@/components/ui/button";

import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink text-glass px-6 py-24 md:py-32">
      {/* Specimen viewfinder signature */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20">
        <div className="h-[520px] w-[520px] rounded-full border border-colony/40" />
        <div className="absolute h-[520px] w-px bg-colony/30" />
        <div className="absolute w-[520px] h-px bg-colony/30" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <span className="font-mono text-xs tracking-[0.2em] text-agar uppercase">
          Specimen 01 — Virtual Microbiology Lab
        </span>
        <h1 className="mt-4 font-display text-4xl md:text-6xl font-semibold leading-tight">
          See the tools. Run the experiment. Learn microbiology hands-on.
        </h1>
        <p className="mt-6 text-lg text-glass/80 max-w-xl mx-auto">
          Explore real lab equipment and walk through guided experiments — Gram staining,
          culturing, microscopy — right in your browser. No account needed to start.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button size="lg" className="bg-culture hover:bg-culture-light text-white">
            Explore Equipment <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-colony text-colony hover:bg-colony/10">
            Try an Experiment
          </Button>
        </div>
      </div>
    </section>
  )
}