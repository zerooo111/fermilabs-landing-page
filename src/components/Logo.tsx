import FermiLogo3d from "@/components/FermiLogoSVG";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2 text-white relative">
      <div className="h-5 w-5 bg-amber-300 absolute z-1 -left-1 blur-xl" />
      <FermiLogo3d className="w-8 aspect-square z-2" />
      <span className="z-2 font-bold text-lg">Fermi labs</span>
    </div>
  );
}; 