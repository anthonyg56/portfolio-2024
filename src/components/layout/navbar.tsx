import Link from "next/link";
import { H3, H4 } from "../ui/typography";
import Button from "../ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { MenuSVG } from "../svgs";
import { cn } from "@/lib/utils";

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
    <div className="flex flex-row w-full sticky justify-center px-3">
      <H4 classNames="mr-auto md:mr-0">AG</H4>

      <NavMenu />

      <Button classNames="hidden md:inline-flex">
        Get in Touch
      </Button>
      <MobileNavDrawer />
    </div>
  )
}

function NavMenu({ isMobile, classNames }: { isMobile?: boolean; classNames?: string; }) {
  return (
    <nav className={cn(["hidden md:flex mx-auto justify-center", {
      "flex": isMobile,
    }, classNames])}>
      <ul className={cn(["flex flex-row gap-x-3 justify-center", {
        "flex-col py-6 gap-y-3 text-center": isMobile
      }])}>
        <li className="my-auto">
          <Link href="/">
            Home
          </Link>
        </li>
        <li className="my-auto">
          <Link href="/work">
            My Work
          </Link>
        </li>
        <li className="my-auto">
          <Link href="/about">
            About
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