export function Layout({
  logo,
  links,
}: {
  logo?: React.ReactNode;
  links?: React.ReactNode;
}) {
  return (
    <footer className="w-full border-t border-gray-500  bg-background">
      <div className="container flex flex-col-reverse sm:flex-row py-4 sm:py-0  h-64 sm:h-24 items-center justify-between">
        {logo}
        {links}
      </div>
    </footer>
  );
}
