export function Layout({
  logo,
  links,
}: {
  logo?: React.ReactNode;
  links?: React.ReactNode;
}) {
  return (
    <footer className="w-full border-t border-gray-500  bg-background">
      <div className="container flex h-24 items-center justify-between">
        {logo}
        {links}
      </div>
    </footer>
  );
}
