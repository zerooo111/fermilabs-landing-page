import FermiLogo3d from "./FermiLogoSVG";

const SpinningBg = () => {
  return (
    <>
      <div className="absolute -right-[45%] top-[50vh] -translate-[50%] blur-xl  overflow-hidden opacity-80">
        <FermiLogo3d className="w-[50vw] animate-spin-slow" />
        <div className="absolute inset-0 pointer-events-none  z-10 bg-noise bg-blend-exclusion"></div>
      </div>
    </>
  );
};

export default SpinningBg;
