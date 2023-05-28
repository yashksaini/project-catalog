"use client"; // This is a client component
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navStyle from "./navbar.module.css";

const Navbar = () => {
  const pathName = usePathname();
  const [openNav, setOpenNav] = useState(false);
  const toggleNav = () => {
    setOpenNav((openNav) => !openNav);
  };

  return (
    <nav className={navStyle.navbar}>
      <div className={navStyle.logo}>
        <span className="material-symbols-outlined">donut_small</span>
        <span>Projects</span>
      </div>
      <div className={openNav ? `${navStyle.activeNav}` : `${navStyle.navs}`}>
        <Link href="/" className={pathName === "/" ? "activeLink" : ""}>
          <span className="material-symbols-outlined">home</span> Home
        </Link>
        <Link
          href="/projects"
          className={pathName === "/projects" ? "activeLink" : ""}
        >
          <span className="material-symbols-outlined">insights</span> Projects
        </Link>
        <Link
          href="/about"
          className={pathName === "/about" ? "activeLink" : ""}
        >
          <span className="material-symbols-outlined">person_pin</span> About Me
        </Link>
      </div>
      <div className={navStyle.menu} onClick={toggleNav}>
        <span className="material-symbols-outlined">menu</span>
      </div>
    </nav>
  );
};

export default Navbar;
