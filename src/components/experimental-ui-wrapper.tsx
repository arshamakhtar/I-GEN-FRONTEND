"use client";

import type { ReactNode } from "react";
import { useBackgroundContext } from "~/hooks/useBackgroundContext";
import { WebcamPixelGrid } from "~/components/ui/webcam-pixel-grid";

export function ExperimentalUIWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const { useExperimentalUI } = useBackgroundContext();

  if (!useExperimentalUI) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      {/* Webcam pixel grid background - positioned absolutely behind content */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <WebcamPixelGrid
          gridCols={60}
          gridRows={40}
          maxElevation={50}
          motionSensitivity={0.25}
          elevationSmoothing={0.2}
          colorMode="webcam"
          backgroundColor="#030303"
          mirror={true}
          gapRatio={0.05}
          invertColors={false}
          darken={0.6}
          borderColor="#ffffff"
          borderOpacity={0.06}
          className="w-full h-full"
        />
      </div>

      {/* Content layer on top of background */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
