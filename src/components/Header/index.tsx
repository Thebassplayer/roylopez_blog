"use client";
import Link from "next/link";
import Logo from "./Logo";
import { SunIcon } from "../Icons";
import { socialLinks } from "@/src/constants/SOCIAL_LINKS";
import useThemeSwitch from "../Hooks/useThemeSwitch";

const navButtons = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Header = () => {
  const [mode, setMode] = useThemeSwitch();

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <header className="w-full p-4 px-10 flex items-center justify-between">
      <Logo />
      <nav className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
        {navButtons.map(({ label, href }, index) => (
          <Link href={href} key={`${label}-${index}`} className="mx-2">
            {label}
          </Link>
        ))}
        <button onClick={toggleMode}>
          <SunIcon />
        </button>
      </nav>
      <div>
        {socialLinks.map(({ label, href, svg }, index) => (
          <a
            href={href}
            key={`${label}-${index}`}
            className="inline-block h-6 w-6 mr-4"
          >
            {svg}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
