import Image from "next/image";
import Link from "next/link";
import profileImg from "@/public/AI-Roy.png";
import { cx } from "@/src/utils";

type LogoProps = {
  showNavBar: boolean;
};

const Logo = ({ showNavBar }: LogoProps): JSX.Element => (
  <Link href={"/"} className="flex items-center text-dark dark:text-light">
    <div
      className={cx(
        "ease mr-2 overflow-hidden rounded-full border border-solid border-dark transition-all duration-300 dark:border-light md:mr-4 md:w-16",
        showNavBar ? "w-8" : "w-12",
      )}
    >
      <Image
        src={profileImg}
        alt="Roy Lopez"
        className="h-auto w-full rounded-full"
      />
    </div>
    <span
      className={cx(
        "text-lg font-bold transition-all duration-300 ease-in-out md:text-xl",
        showNavBar ? "hidden" : "",
      )}
    >
      Persist.dev
    </span>
  </Link>
);
export default Logo;
