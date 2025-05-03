import Experience from "./Experience";
import { Feature } from "./Feature";
import { features } from "@/lib/constants";

export const FeatureSection = () => {
  return (
    <section className="text-secondary-dark">
      {features.map((f, index) => (
        <Feature key={index} {...f} />
      ))}
      <Experience/>
    </section>
  );
}; 