import { ArrowRight, BookOpenText, Rocket } from "lucide-react";
import FermiLogo3d from "@/components/FermiLogoSVG";

export const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-primary-dark overflow-hidden">
      <div className="w-[100vw] z-[0] blur-[100px] -bottom-[100%] absolute aspect-square rounded-full bg-black/20" />
      <FermiLogo3d className="w-screen -bottom-[100%] blur-[100px] left-0 absolute z-0 rotate-210 drop-shadow-2xl" />

      <h1 className="text-8xl font-extrabold leading-relaxed text-center text-zinc-100 z-1 drop-shadow-xl">
        Liquidity Unlocked
      </h1>
      <p className="text-3xl text-center max-w-3/5 text-primary-light z-1 drop-shadow-xl">
        The portal to a new dimension of on-chain liquidity abstraction <br />
        and <em className="font-medium">just-in-time</em> order settlement
      </p>
      <div className="flex gap-4 mt-8 z-1">
        <button className="btn py-4 px-8 text-lg group bg-amber-300 text-amber-950 ring-amber-950 hover:ring-1">
          <Rocket className="w-6 group-hover:w-0 duration-200 group:hover:mr-0 mr-2" />
          Launch App
          <ArrowRight className="w-0 group-hover:w-6 group-hover:h-6 duration-200 group-hover:ml-2" />
        </button>

        <button className="btn group py-4 px-8 text-lg bg-primary-light text-primary-dark ring-primary-dark hover:ring-1">
          <BookOpenText className="w-6 group-hover:w-0 duration-200 group:hover:mr-0 mr-2" />
          Read docs
          <ArrowRight className="w-0 group-hover:w-6 group-hover:h-6 duration-200 group-hover:ml-2" />
        </button>
      </div>
    </section>
  );
}; 