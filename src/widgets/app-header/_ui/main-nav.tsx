import Link from "next/link";

export function MainNav() {
  return (
    <nav className="flex items-center gap-6 text-sm font-medium">
      <Link
        className="transition-colors hover:text-foreground/80 text-foreground/60"
        href="/"
      >
        Products
      </Link>
      <Link
        className="transition-colors hover:text-foreground/80 text-foreground/60"
        href="/about"
      >
        About
      </Link>
    </nav>
  );
}
