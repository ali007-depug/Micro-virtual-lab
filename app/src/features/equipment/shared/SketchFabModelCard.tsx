import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MousePointerClick, AlertTriangle } from "lucide-react";
import { EquipmentCanvas } from "./EquipmentCanvas";
import { GLTFModel } from "./GLTFModel";
import { ModelErrorBoundary } from "./ModelErrorBoundary";
import type { Hotspot3D, Accent, Attribution } from "../types";

interface Props {
  name: string;
  icon: string;
  description: string;
  modelUrl: string;
  modelScale?: number;
  hotspots?: Hotspot3D[];
  interactiveKeys?: string[];
  accent?: Accent;
  attribution?: Attribution;
}

export function SketchfabModelCard({
  name,
  description,
  modelUrl,
  modelScale,
  hotspots = [],
  interactiveKeys = [],
  attribution,
}: Props) {
  const [interactionState, setInteractionState] = useState<
    Record<string, boolean>
  >({});
  const toggle = (key: string) =>
    setInteractionState((prev) => ({ ...prev, [key]: !prev[key] }));
  void interactionState; // reserved for future model states beyond hotspot toggles

  return (
    <Card className="overflow-hidden border-ink/10">
      <CardHeader className="flex flex-row items-center gap-3">
        <CardTitle className="font-display text-lg text-ink">{name}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="h-72 w-full rounded-lg bg-glass border border-ink/10">
          <ModelErrorBoundary
            fallback={
              <div className="flex h-full flex-col items-center justify-center gap-2 px-6 text-center">
                <AlertTriangle className="h-5 w-5 text-agar" />
                <p className="text-sm text-ink/60">
                  3D model couldn't be loaded.
                </p>
              </div>
            }
          >
            <EquipmentCanvas>
              <GLTFModel
                url={modelUrl}
                scale={modelScale}
                hotspots={hotspots}
                interactiveKeys={interactiveKeys}
                onToggle={toggle}
              />
            </EquipmentCanvas>
          </ModelErrorBoundary>
        </div>

        <p className="flex items-center justify-center gap-2 text-xs text-ink/50 font-mono">
          <MousePointerClick className="h-3.5 w-3.5" /> Drag to rotate · scroll
          to zoom
        </p>

        {attribution?.license === "CC-BY" && (
          <p className="text-center text-[11px] text-ink/40">
            Model by{" "}
            <a
              href={attribution.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-culture"
            >
              {attribution.author}
            </a>{" "}
            — CC-BY
          </p>
        )}

        <div className="rounded-lg bg-ink/5 p-4 text-sm text-ink/80 leading-relaxed">
          {description}
        </div>
      </CardContent>
    </Card>
  );
}
