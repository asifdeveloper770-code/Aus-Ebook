import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type TiltProps = {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees. */
  strength?: number;
  /** Adds a moving light sheen following the cursor. */
  glare?: boolean;
};

/** Cursor-driven 3D tilt wrapper. */
export function Tilt({ children, className, strength = 9, glare = true }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, on: false });

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setStyle({
      transform: `rotateX(${(0.5 - py) * strength * 2}deg) rotateY(${(px - 0.5) * strength * 2}deg) translateZ(14px)`,
      transition: "transform 120ms linear",
    });
    setGlarePos({ x: px * 100, y: py * 100, on: true });
  }

  function onLeave() {
    setStyle({
      transform: "rotateX(0deg) rotateY(0deg) translateZ(0)",
      transition: "transform 700ms var(--ease-out-soft)",
    });
    setGlarePos((g) => ({ ...g, on: false }));
  }

  return (
    <div className={cn("scene-3d", className)}>
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ ...style, transformStyle: "preserve-3d" }}
        className="relative h-full"
      >
        {children}
        {glare && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500"
            style={{
              opacity: glarePos.on ? 0.55 : 0,
              background: `radial-gradient(420px circle at ${glarePos.x}% ${glarePos.y}%, color-mix(in oklab, var(--accent) 22%, transparent), transparent 60%)`,
            }}
          />
        )}
      </div>
    </div>
  );
}
