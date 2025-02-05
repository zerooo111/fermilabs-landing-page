import { ArrowRight, BookOpenText, Rocket } from "lucide-react";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <header className="absolute w-screen z-1">
      <nav className="container mx-auto flex justify-between p-4">
        <Logo />
        <div className="flex gap-4">
          <button className="btn py-2 px-4 group bg-amber-300 text-amber-950 ring-amber-950 hover:ring-1">
            <Rocket className="w-6 group-hover:w-0 duration-200 group:hover:mr-0 mr-2" />
            Launch App
            <ArrowRight className="w-0 group-hover:w-6 group-hover:h-6 duration-200 group-hover:ml-2" />
          </button>

          <button className="btn group py-2 px-4 bg-primary-light text-primary-dark ring-primary-dark hover:ring-1">
            <BookOpenText className="w-6 group-hover:w-0 duration-200 group:hover:mr-0 mr-2" />
            Read docs
            <ArrowRight className="w-0 group-hover:w-6 group-hover:h-6 duration-200 group-hover:ml-2" />
          </button>
        </div>
      </nav>
    </header>
  );
}; 