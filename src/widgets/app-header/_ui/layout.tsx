import { Button } from "@/shared/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
} from "@/shared/ui/sheet";
import { Menu } from "lucide-react";

export function Layout({
  logo,
  nav,
  actions,
}: {
  logo?: React.ReactNode;
  nav?: React.ReactNode;
  actions?: React.ReactNode;
}) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4">{logo}</div>
        <div className="flex items-center flex-1">
          {nav}
          <div className="flex flex-1 items-center justify-end space-x-3">
            {actions}
          </div>
        </div>
      </div>
    </header>
  );
}
