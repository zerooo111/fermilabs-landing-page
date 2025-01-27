import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-primary-dark py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-primary-light text-sm">
            © {new Date().getFullYear()} Fermi Labs. All rights reserved.
          </div>

          <div className="flex gap  divide-x divide-primary-light ">
            <Link
              href="https://twitter.com/FermiLabs"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 text-primary-light hover:text-secondary transition-colors"
            >
              Docs
            </Link>
            <Link
              href="https://twitter.com/FermiLabs"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 text-primary-light hover:text-secondary transition-colors"
            >
              Whitepaper
            </Link>
            <Link
              href="https://twitter.com/FermiLabs"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 text-primary-light hover:text-secondary transition-colors"
            >
              Launch App
            </Link>
            <Link
              href="https://twitter.com/FermiLabs"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 text-primary-light hover:text-secondary transition-colors"
            >
              X / Twitter
            </Link>
            <Link
              href="https://github.com/FermiLabs"
              target="_blank"
              rel="noopener noreferrer"
              className="pl-4 text-primary-light hover:text-secondary transition-colors"
            >
              Discord
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
