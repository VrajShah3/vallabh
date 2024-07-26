"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "gallery",
    path: "/gallery",
  },
  {
    name: "about us",
    path: "/aboutus",
  },
  {
    name: "",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {Links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "navv"
            } capitalize transition-all navv`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
