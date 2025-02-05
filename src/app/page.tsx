import { ArrowRight, BookOpenText, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import FermiLogo3d from "@/components/FermiLogoSVG";

export const features = [
  {
    title: "No TVL Required",
    description:
      "Back open orders with delegated liquidity. A revolutionary approach that eliminates the need for locked capital.",
    className: "bg-secondary/25",
  },
  {
    title: "Shared Liquidity",
    description:
      "Liquidity can be shared across trades, markets, and applications. Use the entire existing liquidity on Solana to back trades on Fermi!",
    className: "bg-secondary/50",
  },
  {
    title: "Just-In-Time Settlement",
    description:
      "Maximize capital efficiency with our JIT settlement system. Capital is only called when orders are matched.",
    className: "bg-secondary/75",
  },
  {
    title: "Best-in-class Pricing",
    description:
      "Avail the deepest liquidity and lowest slippage on all trades across assets",
    className: "bg-secondary",
  },
  {
    title: "Fully On-chain",
    description:
      "Benefit from maximum reliability and transparency with our fully on-chain order matching system.",
    className: "bg-secondary-dark text-secondary-light/75",
  },
];

const Feature = ({
  title,
  description,
  className,
}: {
  title?: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div className={cn("h-[50vh]", className)}>
      <div className="container h-full flex items-center justify-between mx-auto px-4">
        <div>
          <h2 className="text-5xl font-bold leading-loose">{title}</h2>
          <p className="text-2xl  max-w-3/5 border-l-4 border-amber-700/50 pl-4 ml-1 ">
            {description}
          </p>
        </div>
        {/* image here */}
        <div className="bg-secondary h-[10vh] w-[20vw] border  rounded-full"></div>
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <div className="flex items-center gap-2 text-white relative">
      <div className="h-5 w-5 bg-amber-300 absolute z-1 -left-1 blur-xl" />
      <FermiLogo3d className="w-8 aspect-square z-2" />
      <span className="z-2 font-bold text-lg">Fermi labs</span>
    </div>
  );
};

const Header = () => {
  return (
    <header className="absolute w-screen z-1">
      <nav className="container mx-auto flex  justify-between p-4">
        <Logo />
        <div className="flex gap-4">
          <button className="btn py-2 px-4  group bg-amber-300 text-amber-950 ring-amber-950 hover:ring-1">
            <Rocket className="w-6 group-hover:w-0 duration-200 group:hover:mr-0 mr-2" />
            Launch App
            <ArrowRight className="w-0 group-hover:w-6 group-hover:h-6 duration-200 group-hover:ml-2" />
          </button>

          <button className="btn group py-2 px-4  bg-primary-light  text-primary-dark ring-primary-dark hover:ring-1">
            <BookOpenText className="w-6 group-hover:w-0 duration-200 group:hover:mr-0 mr-2" />
            Read docs
            <ArrowRight className="w-0 group-hover:w-6 group-hover:h-6 duration-200 group-hover:ml-2" />
          </button>
        </div>
      </nav>
    </header>
  );
};

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-primary-dark overflow-hidden">
      <div className="w-[100vw] z-[0] blur-[100px] -bottom-[100%]  absolute aspect-square rounded-full bg-black/20" />
      <FermiLogo3d className="w-screen -bottom-[100%] blur-[100px] left-0 absolute z-0 rotate-210 drop-shadow-2xl " />

      <h1 className="text-8xl font-extrabold leading-relaxed text-center text-zinc-100 z-1 drop-shadow-xl">
        Liquidity Unlocked
      </h1>
      <p className="text-3xl text-center max-w-3/5 text-primary-light z-1 drop-shadow-xl">
        The portal to a new dimension of on-chain liquidity abstraction <br />
        and <em className="font-medium"> just-in-time </em> order settlement
      </p>
      <div className="flex gap-4 mt-8 z-1">
        <button className="btn py-4 px-8 text-lg  group bg-amber-300 text-amber-950 ring-amber-950 hover:ring-1">
          <Rocket className="w-6 group-hover:w-0 duration-200 group:hover:mr-0 mr-2" />
          Launch App
          <ArrowRight className="w-0 group-hover:w-6 group-hover:h-6 duration-200 group-hover:ml-2" />
        </button>

        <button className="btn group py-4 px-8 text-lg bg-primary-light  text-primary-dark ring-primary-dark hover:ring-1">
          <BookOpenText className="w-6 group-hover:w-0 duration-200 group:hover:mr-0 mr-2" />
          Read docs
          <ArrowRight className="w-0 group-hover:w-6 group-hover:h-6 duration-200 group-hover:ml-2" />
        </button>
      </div>
    </section>
  );
};

const FeatureSection = () => {
  return (
    <section className="text-secondary-dark">
      {features.map((f, index) => (
        <Feature key={index} {...f} />
      ))}
    </section>
  );
};

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <HeroSection />
      {/* Feature Section */}
      <FeatureSection />
    </main>
  );
}
