"use client";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">

      <div className="absolute inset-0 bg-black" />

      <div className="aurora aurora-1" />
      <div className="aurora aurora-2" />
      <div className="aurora aurora-3" />

    </div>
  );
}