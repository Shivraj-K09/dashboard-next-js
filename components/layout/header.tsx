import { ThemeToggle } from "../theme-toggle";
import { cn } from "@/lib/utils";
import { MobileSidebar } from "./mobile-sidebar";
import { UserNav } from "./user-nav";
import { Logo } from "../logo";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20">
      <nav className="h-16 flex items-center justify-between px-5">
        <div className="hidden md:hidden lg:block invert dark:invert-0">
          <Logo className="w-28 h-28" />
        </div>
        <div className={cn("block lg:hidden")}>
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-x-5 mr-5">
          <UserNav />
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
