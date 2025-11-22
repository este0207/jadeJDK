"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function BodyClass({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    const known = ["page-home", "page-about", "page-contact"];

    // derive class name from pathname
    let cls = "page-home";
    if (pathname === "/") cls = "page-home";
    else if (pathname.startsWith("/about")) cls = "page-about";
    else if (pathname.startsWith("/contact")) cls = "page-contact";
    else {
      // fallback: turn `/some/path` -> `page-some-path`
      const cleaned = pathname.replace(/\/+$/g, "").replace(/^\//, "").replace(/\//g, "-");
      cls = cleaned ? `page-${cleaned}` : "page-home";
    }

    // remove any previous page-* classes
    const toRemove = Array.from(document.body.classList).filter((c) => c.startsWith("page-"));
    toRemove.forEach((c) => document.body.classList.remove(c));

    document.body.classList.add(cls);

    return () => {
      document.body.classList.remove(cls);
    };
  }, [pathname]);

  return <>{children}</>;
}
