import Link from "next/link";
import { H4, P } from "../ui/typography";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { MenuSVG } from "../svgs";
import { cn } from "@/lib/utils";
import Logo from "./logo";

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
    <div className={cn(["flex flex-row w-full sticky justify-center px-3",])}>
      <P size="lg" className="inline-flex mr-auto">AG</P>
      <NavMenu />
      <MobileNavDrawer />
    </div>
  )
}

function NavMenu({ isMobile, classNames }: { isMobile?: boolean; classNames?: string; }) {
  return (
    <nav className={cn(["hidden md:inline-flex ml-auto", {
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

function MobileNavDrawer() {
  return (
    <Drawer>
      <DrawerTrigger className="md:hidden">
        <MenuSVG className="w-6 h-6" />
      </DrawerTrigger>
      <DrawerContent>
        <NavMenu isMobile />
      </DrawerContent>
    </Drawer>
  )
}