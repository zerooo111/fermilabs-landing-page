import FermiLogoSVG from "@/components/FermiLogoSVG";

export default function FermiLogo() {
  return (
    <div className="flex items-center justify-center gap-1">
      <FermiLogoSVG className="h-8 w-8" />
      <span className="text-2xl select-none font-medium font-antiqua text-secondary-light">
        Fermi
      </span>
    </div>
  );
}
