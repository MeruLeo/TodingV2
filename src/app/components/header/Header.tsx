"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuSearch } from "react-icons/lu";
import {
  AiFillMessage,
  AiFillHome,
  AiFillBell,
  AiFillHeart,
} from "react-icons/ai";
import "./Header.module.css";
import Image from "next/image";
import avatar from "../../favicon.ico";
import "../../../icons/uicons-solid-rounded/css/uicons-solid-rounded.css";

const Header: React.FC = () => {
  const [isSearch, setIsSearch] = useState(false);

  const navbarLinks = [
    {
      id: 1,
      title: "Home",
      href: "/",
      icon: <i className="fi fi-sr-house-blank" />,
    },
    {
      id: 2,
      title: "Directs",
      href: "/directs",
      icon: <i className="fi fi-sr-comment-dots" />,
    },
    {
      id: 3,
      title: "Notification",
      href: "/notifications",
      icon: <i className="fi fi-sr-bell" />,
    },
    {
      id: 4,
      title: "Activities",
      href: "/activities",
      icon: <i className="fi fi-sr-heart" />,
    },
  ];

  const Search: React.FC = () => (
    <div
      className={`bg-ash-graphite w-fit p-1 flex items-center border-2 transition-all duration-200 rounded-xl ${
        isSearch ? " border-forest-base" : "border-ash-graphite"
      }`}
    >
      <input
        onFocus={() => setIsSearch(true)}
        onBlur={() => setIsSearch(false)}
        type="text"
        placeholder="جستجو کنید ..."
        className="bg-transparent outline-none border-none pr-2"
      />
      <button type="submit" className="p-2 rounded-lg text-forest-base">
        <LuSearch />
      </button>
    </div>
  );

  const NavLink: React.FC<{ href: string; icon: React.ReactNode }> = ({
    href,
    icon,
  }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
      <li className="relative">
        <Link
          href={href}
          className={`text-2xl ${isActive ? "text-forest-base cursor-default" : "text-ash-light"}`}
        >
          {icon}
        </Link>
        {isActive && (
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-1 top-5 h-1 bg-forest-base rounded-full mt-2"></span>
        )}
      </li>
    );
  };

  const NavLinks: React.FC = () => (
    <ul className="flex gap-4 justify-evenly w-full">
      {navbarLinks.map((link) => (
        <NavLink key={link.id} href={link.href} icon={link.icon} />
      ))}
    </ul>
  );

  const UserAccount: React.FC<{ avatar: string; username: string }> = ({
    avatar,
    username,
  }) => (
    <div className="flex items-center bg-forest-base pl-2 rounded-full p-0.5 gap-2">
      <Image
        className="rounded-full"
        src={avatar}
        alt={username}
        width={32}
        height={32}
      />
      <span className="text-white font-semibold">{username}</span>
    </div>
  );

  return (
    <header className="flex items-center justify-between backdrop-blur-2xl fixed z-50 w-full px-4 py-3">
      <div className="flex-1 flex justify-start">
        <Search />
      </div>
      <div className="flex-1 flex justify-center">
        <NavLinks />
      </div>
      <div className="flex-1 flex justify-end">
        <UserAccount avatar={avatar} username="TheMeruLeo" />
      </div>
    </header>
  );
};

export default Header;
