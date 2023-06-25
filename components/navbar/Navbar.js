"use client"; // This is a client component
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navStyle from "./navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  const pathName = usePathname();
  const [openNav, setOpenNav] = useState(false);
  const toggleNav = () => {
    setOpenNav((openNav) => !openNav);
  };
  const links = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/projects",
      text: "Projects",
    },
    {
      path: "/about",
      text: "About Me",
    },
    {
      path: "/blogs",
      text: "Blogs",
    },
  ];

  return (
    <nav className={navStyle.navbar}>
      <div className={navStyle.logo}>
        <Image src="/logo.png" alt="Logo" width={97} height={60} />
      </div>
      <div className={openNav ? `${navStyle.activeNav}` : `${navStyle.navs}`}>
        <div className={navStyle.navLinks}>
          {links.map((data, index) => {
            return (
              <Link
                href={data.path}
                className={pathName === data.path ? "activeLink" : ""}
                key={index}
                onClick={toggleNav}
              >
                {data.text}
              </Link>
            );
          })}
        </div>
        <div className={navStyle.verticalLine}>
          <span></span>
        </div>
        <div className={navStyle.usefulLinks}>
          <Link href="https://github.com/yashksaini" target="_blank">
            <button className={`${navStyle.linkBtn} ${navStyle.githubBtn}`}>
              Visit Github
            </button>
          </Link>
          <Link href="https://yashksaini.netlify.app/" target="_blank">
            <button className={`${navStyle.linkBtn} ${navStyle.portfolioBtn}`}>
              Visit Portfolio
            </button>
          </Link>
        </div>
        <div className={navStyle.transparentBox} onClick={toggleNav}></div>
      </div>
      <div className={navStyle.menu} onClick={toggleNav}>
        {openNav ? (
          <Image src="/close.png" alt="Menu" width={48} height={48} />
        ) : (
          <Image src="/menu.png" alt="Menu" width={48} height={48} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
