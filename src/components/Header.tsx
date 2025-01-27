import React from "react";
import FermiLogo from "./FermiLogo";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute mx-auto w-full p-4 z-20">
      <nav className="flex items-center justify-between container mx-auto">
        <div className="flex items-center gap-4 ">
          <FermiLogo />
          <Link href="#about" className="navlink">
            About
          </Link>
          <Link href="#contact" className="navlink">
            Contact
          </Link>
        </div>

        <div className="flex gap-4">
          <button className="btn group bg-secondary text-amber-950 ring-amber-950 hover:ring-1">
            Launch App
            <ArrowUpRight className="w-0 group-hover:w-6 group-hover:h-6 duration-200 " />
          </button>

          <button className="btn group bg-primary-light  text-primary-dark ring-primary-dark hover:ring-1">
            Read docs
            <ArrowUpRight className="w-0 group-hover:w-6 group-hover:h-6 duration-200" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
