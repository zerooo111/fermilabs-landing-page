import { cn } from "@/lib/utils";

interface FeatureProps {
  title?: string;
  description?: string;
  className?: string;
}

export const Feature = ({ title, description, className }: FeatureProps) => {
  return (
    <div className={cn("h-[50vh]", className)}>
      <div className="container h-full flex items-center justify-between mx-auto px-4">
        <div>
          <h2 className="text-5xl font-bold leading-loose">{title}</h2>
          <p className="text-2xl max-w-3/5 border-l-4 border-amber-700/50 pl-4 ml-1">
            {description}
          </p>
        </div>
        {/* image here */}
        <div className="bg-secondary h-[10vh] w-[20vw] border rounded-full"></div>
      </div>
    </div>
  );
}; 