import { ArrowRight, BookOpenText, Rocket } from "lucide-react";
import FermiLogo3d from "./FermiLogoSVG";
import SpinningBg from "./SpinningBg";
import Header from "./Header";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="w-full relative bg-primary-dark h-screen flex   "
    >
      <SpinningBg />
      <FermiLogo3d className="absolute  -left-[25%] w-[50vw]  -bottom-[25%]  rotate-90 opacity-20 blur-3xl" />
      <FermiLogo3d className="absolute  -translate-y-[60%]  w-[50vw]  left-[25%]  rotate-90 opacity-20 blur-3xl" />
      
      <Header />
      {/* Hero Section */}
      <div className="container z-10 mx-auto flex  flex-col justify-center  flex-1 p-4 ">
        <h1 className="text-7xl font-bold font-antiqua leading-loose brightness-110 text-secondary ">
          Liquidity <span className="">Unlocked</span>
        </h1>
        <p className="text-2xl text-primary-light font-antiqua">
          Fermi is the first DEX that Locks{" "}
          <span className="font-bold italic"> No Capital.</span> <br />
        </p>
        <p className="text-primary-light text-xl bg-gradient-to-tr from-bg-primary/10 via-primary/20 backdrop-brightness-75 to-primary/5 p-4 w-fit backdrop-blur-xl rounded-lg mt-8 border border-primary ">
          For{" "}
          <span className="font-bold italic brightness-125 text-secondary">
            {" "}
            LPs,{" "}
          </span>{" "}
          this means orders of magnitude increased exposure to orderflow, and
          resulting ROI. <br />
          For{" "}
          <span className="font-bold italic brightness-125 text-secondary">
            traders,{" "}
          </span>
          it means the best prices and lowest slippage of any trading venue.
          <br />
        </p>
        <div className="flex gap-4 mt-8">
          <button className="btn py-4 px-8 text-lg  group bg-secondary text-amber-950 ring-amber-950 hover:ring-1">
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
      </div>
    </section>
  );
};

export default HeroSection;
