
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


  return (
    <div className={cn(["w-full flex sticky justify-center items-center"])}>
      <div className="max-w-screen-3xl w-full px-3 lg:px-6 flex flex-row justify-between items-center py-3 lg:py-0">
        <P size="lg" className="inline-flex mr-auto">AG</P>
        <NavMenu />
        <MobileNavDrawer />
      </div>
    </div>
  )
}

function NavMenu({ isMobile, classNames }: { isMobile?: boolean; classNames?: string; }) {
  const pathname = usePathname();

  return (
    <nav className={cn(["hidden md:inline-flex ml-auto py-5", {
      "flex m-auto": isMobile,
    }, classNames])}>
      <ul className={cn(["flex flex-row gap-x-3 justify-center", {
        "flex-col py-6 gap-y-3 text-center": isMobile
      }])}>
        <li className={cn(["my-auto", {
          "border-b-2 border-b-black": pathname === "/"
        }])}>
          <Link href="/#home">
            Home
          </Link>
        </li>
        {/* <li className={cn(["my-auto", {
          "border-b-2 border-b-black": pathname === "/"
        }])}>
          <Link href="/#about">
            About
          </Link>
        </li> */}
        <li className={cn(["my-auto", {
          "border-b-2 border-b-black": pathname.includes('/work/')
        }])}>
          <Link href="/#work">
            My Work
          </Link>
        </li>
      </ul>
    </nav>
  )
}

function MobileNavDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
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