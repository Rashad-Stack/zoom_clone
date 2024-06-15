"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <section className="bg-dark-1 sticky left-0 flex h-screen w-fit flex-col justify-between p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-col gap-6">
        {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.route || pathname.startsWith(link.route);
          return (
            <Link
              key={link.route}
              href={link.route}
              className={cn(
                "flex items-center justify-start gap-4 rounded-lg p-4",
                {
                  "bg-blue-100": isActive,
                },
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
