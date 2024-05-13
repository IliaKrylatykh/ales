import { getRoute } from "@/shared/lib/getRoute";
import Link from "next/link";

export function MainNav() {
  return (
    <nav className="flex items-center gap-6 text-sm font-medium">
      <Link
        className="transition-colors hover:text-foreground/80 text-foreground/60"
        href={getRoute.Main()}
      >
        Products
      </Link>
      <Link
        className="transition-colors hover:text-foreground/80 text-foreground/60"
        href={getRoute.About()}
      >
        About
      </Link>
    </nav>
  );
}
