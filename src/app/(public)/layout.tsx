import { AppFooter } from "@/widgets/app-footer/app-footer";
import { AppHeader } from "@/widgets/app-header/app-header";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center min-h-screen">
      <AppHeader />
      <div className="w-full flex-1 max-w-[1024px] px-4 lg:px-0 mx-auto">
        {children}
      </div>
      <AppFooter />
    </section>
  );
}
