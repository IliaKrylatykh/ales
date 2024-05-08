import { LogoIcon } from "@/shared/ui/logo-icon";
import Link from "next/link";

export function Logo() {
  return (
    <Link className="flex items-center space-x-2" href="/">
      <span className="font-bold inline-block">Ales embroidery</span>
    </Link>
  );
}
