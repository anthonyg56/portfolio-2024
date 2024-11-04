
"use client"

import Link from "next/link";
import { H4, P } from "../ui/typography";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { MenuSVG } from "../svgs";
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

/**
 * Navbar is made up of 4 other components/elements:
 * - Logo/Initals
 * - Nav Links
 * - Get in Contact Button
 * - 
 * @returns 
 */

export default function Navbar() {
  const pathname = usePathname();

  let isWorkPage: boolean;

  if (pathname.includes('/work/')) {
    isWorkPage = true;
  };

  return (
    <div className={cn(["w-full"])}>
      <div className="w-full">
        <P size="lg" className="inline-flex mr-auto">AG</P>
        <NavMenu />
        <MobileNavDrawer pathname={pathname} />
      </div>
    </div>
  )
}

function NavMenu({ isMobile, classNames }: { isMobile?: boolean; classNames?: string; }) {
  return (
    <nav className={cn(["hidden md:inline-flex ml-auto py-5", {
      "flex m-auto": isMobile,
    }, classNames])}>
      <ul className={cn(["flex flex-row gap-x-3 justify-center", {
        "flex-col py-6 gap-y-3 text-center": isMobile
      }])}>
        <li className="my-auto">
          <Link href="/#home">
            Home
          </Link>
        </li>
        <li className="my-auto">
          <Link href="/#about">
            About
          </Link>
        </li>
        <li className="my-auto">
          <Link href="/#work">
            My Work
          </Link>
        </li>
      </ul>
    </nav>
  )
}

function MobileNavDrawer({ pathname }: { pathname: string }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log('Pathname changed');
    setIsOpen(false);
  }, [pathname]);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger className="md:hidden">
        <MenuSVG className="w-6 h-6" />
      </DrawerTrigger>
      <DrawerContent>
        <NavMenu isMobile />
      </DrawerContent>
    </Drawer>
  )
}