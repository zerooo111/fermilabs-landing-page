
"use client"

import GridAnimation from "./GridAnimation";

export default function HeaderV2() {
  return (
    <div className="relative w-full h-screen">
      {/* Grid Animation Background */}
      <div className="absolute inset-0 z-0">
        <GridAnimation />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-6xl font-bold mb-4">Ultra-fast. Provably fair.</h1>
        <h2 className="text-4xl mb-8">Capital efficient.</h2>
        <p className="text-xl max-w-2xl mx-auto">
          Fermi is the first decentralized order-book exchange
        </p>
      </div>
    </div>
  );
}
