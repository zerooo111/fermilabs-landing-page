"use client";

import GridAnimation from "@/components/GridAnimation";

export default function Home() {
  return (
    <main className="relative bg-secondary-light flex flex-col min-h-screen">
      <GridAnimation />
      <section className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-center">
          Ultra Fast <br /> Provably fair <br />
          Capital Efficient 
        </h1>
      </section>
    </main>
  );
}
