"use client";

import FermiLogo3d from "@/components/FermiLogoSVG";
import GridAnimation from "@/components/GridAnimation";

export default function Home() {
  return (
    <main className="relative bg-secondary-light flex flex-col min-h-screen">
      <GridAnimation />
      <section className="flex flex-col items-center justify-center h-screen">
        <FermiLogo3d className="absolute top-[50%] opacity-50 left-[50%] z-0 -translate-x-1/2 -translate-y-1/2 size-80 aspect-square" />
        <h1 className="text-4xl z-10 font-bold text-primary text-center">
          Ultra Fast <br /> Provably fair <br />
          Capital Efficient
        </h1>
      </section>
    </main>
  );
}
