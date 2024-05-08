import { LogoIcon } from "@/shared/ui/logo-icon";
import Link from "next/link";

export function Logo() {
  return (
    <Link className="flex items-center space-x-2" href="/">
      <LogoIcon className="h-6 w-6" />
      <span className="hidden md:flex font-bold">Ales embroidery</span>
    </Link>
  );
}
