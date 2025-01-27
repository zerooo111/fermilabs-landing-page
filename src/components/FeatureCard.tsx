import { Feature } from "@/types/features";

const FeatureCard = ({ title, description }: Feature) => {
  return (
    <div className="p-1.5 border max-w-lg border-secondary bg-secondary-light rounded-md group  duration-200 hover:scale-105 hover:shadow-2xl">
      <div className="bg-gradient-to-tr from-white/50 via-white to-white/25 p-8 border border-secondary rounded-md h-full shadow-lg shadow-secondary-dark/25 ">
        <h3 className="text-2xl font-bold mb-4 text-amber-900 font-antiqua">
          {title}
        </h3>
        <div className="h-[1px] mb-4 bg-amber-700" />
        <p className="text text-amber-800 text-xl">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
