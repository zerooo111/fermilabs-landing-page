import React from "react";
import { features } from "@/data/features";
import FeatureCard from "./FeatureCard";
import VaultSVG from "./VaultSVG";

const FeatureSection = () => {
  return (
    <section
      id="features"
      className="w-full relative bg-secondary/20 py-16 md:py-24"
    >
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold font-antiqua text-amber-900 mb-12 md:mb-16 text-center">
          Why Choose Fermi?
        </h2>

        <div className="flex flex-wrap gap-8 mx-auto justify-center">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
          <div className="max-w-lg relative">
            <div className="h-50 w-60  -rotate-12 bg-secondary rounded-full absolute left-[50%] -translate-[50%] top-[50%] -translate-y-[50%]" />
            <VaultSVG className="h-50 w-lg  right-0 rotate-3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
