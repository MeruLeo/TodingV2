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
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
  User,
} from "@nextui-org/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import me from "../../../public/me.jpg";
import UserIcon from "@heroicons/react/24/outline";

const userIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
    />
  </svg>
);
const settingsIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);
const plusIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>
);
const infoIncon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
    />
  </svg>
);
const logoutIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
    />
  </svg>
);
const downIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
);

const Header: React.FC = () => {
  const [isSearch, setIsSearch] = useState(false);

  const navbarLinks = [
    {
      id: 1,
      title: "خانه",
      href: "/",
      icon: <i className="fi fi-sr-house-blank" />,
    },
    {
      id: 2,
      title: "صندوق",
      href: "/directs",
      icon: <i className="fi fi-sr-comment-dots" />,
    },
    {
      id: 3,
      title: "اعلان ها",
      href: "/notifications",
      icon: <i className="fi fi-sr-bell" />,
    },
    {
      id: 4,
      title: "فعالیت ها",
      href: "/activities",
      icon: <i className="fi fi-sr-heart" />,
    },
  ];

  const Search: React.FC = () => (
    <div
      className={`bg-ash-graphite sm:w-fit w-full justify-between p-1 flex items-center border-2 transition-all duration-200 rounded-xl ${
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

  const NavLink: React.FC<{
    href: string;
    icon: React.ReactNode;
    title: string;
  }> = ({ href, icon, title }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
      <li className="relative">
        <Link
          href={href}
          className={`text-2xl flex flex-col items-center ${isActive ? "text-forest-base cursor-default" : "text-ash-light"}`}
        >
          {icon}
          <span className="text-base font-sfBold">{title}</span>
        </Link>
        {isActive && (
          <span className="absolute left-1/2 sm:block hidden transform -translate-x-1/2 bottom-0 w-1 top-5 h-1 bg-forest-base rounded-full mt-2"></span>
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
    <Dropdown
      className="relative"
      placement="bottom-start"
      size="sm"
      radius="lg"
      backdrop="blur"
      classNames={{
        base: "before:bg-default-200",
        content: "p-0 border-small border-divider bg-ash-graphite",
      }}
    >
      <DropdownTrigger>
        <Button
          variant="solid"
          disableRipple
          radius="full"
          className="bg-forest-base text-white font-sfBold"
          endContent={downIcon}
        >
          {username}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Custom item styles"
        disabledKeys={["profile"]}
        className="p-3"
        itemClasses={{
          base: [
            "rounded-md",
            "text-default-500",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "data-[hover=true]:bg-ash-iron",
            "dark:data-[hover=true]:bg-ash-iron",
            "data-[selectable=true]:focus:bg-ash-iron",
            "data-[pressed=true]:opacity-70",
            "data-[focus-visible=true]:ring-default-500",
          ],
        }}
      >
        <DropdownSection aria-label="Profile & Actions" showDivider>
          <DropdownItem
            isReadOnly
            key="profile"
            className="h-14 gap-2"
            className="opacity-100"
          >
            <User
              name="امیرعلی الله‌وردی"
              description="MeruLeo@"
              classNames={{
                name: "text-ash-light text-xl font-sfBold",
                description: "text-forest-base",
              }}
              avatarProps={{
                size: "lg",
                src: "/src/public/me.jpg",
              }}
            />
          </DropdownItem>
          <DropdownItem key="dashboard" startContent={userIcon}>
            حساب
          </DropdownItem>
          <DropdownItem key="settings" startContent={settingsIcon}>
            تنظیمات
          </DropdownItem>
          <DropdownItem
            key="new_project"
            startContent={plusIcon}
            endContent={<PlusIcon className="text-large" />}
          >
            توییت جدید
          </DropdownItem>
        </DropdownSection>

        <DropdownSection aria-label="Help & Feedback">
          <DropdownItem key="help_and_feedback" startContent={infoIncon}>
            کمک و راهنمایی
          </DropdownItem>
          <DropdownItem key="logout" startContent={logoutIcon}>
            خروج از حساب
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );

  return (
    <>
      <header className="flex items-center justify-between backdrop-blur-2xl fixed z-50 w-full px-4 py-3">
        <div className="flex-1 flex justify-start">
          <Search />
        </div>
        <div className="flex-1 sm:flex hidden justify-center">
          <NavLinks />
        </div>
        <div className="flex-1 hidden sm:flex justify-end">
          <UserAccount avatar={avatar} username="TheMeruLeo" />
        </div>
      </header>
      <nav className="flex sm:hidden list-none items-center bottom-0 justify-between backdrop-blur-2xl fixed z-50 w-full p-4">
        {navbarLinks.map((link) => (
          <NavLink
            key={link.id}
            href={link.href}
            icon={link.icon}
            title={link.title}
          />
        ))}
      </nav>
    </>
  );
};

export default Header;
