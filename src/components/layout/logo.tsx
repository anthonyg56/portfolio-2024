"use client"

import { usePathname } from "next/navigation"
import { H4, P } from "../ui/typography"

export default function Logo() {
  const pathnames = usePathname()
  const logoTxt = pathnames.includes('/work') ? "Anthony Gayflor" : "AG"

  return <P size="lg" className="inline-flex mr-auto">{logoTxt}</P>
}