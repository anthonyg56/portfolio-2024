import React from "react"
import { Separator } from "../ui/separator"
import { H3, H4 } from "../ui/typography"
import { cn } from "@/lib/utils"

type Props = {
  title: string,
  children: React.ReactNode,
  leftColClassNames?: string,
  rightColClassNames?: string,
  containerClassNames?: string,
}

export default function Section({ children, title, containerClassNames, leftColClassNames, rightColClassNames }: Props) {
  return (
    <React.Fragment>
      <Separator orientation="horizontal" className="bg-[#090909]/10 my-7" />
      <div className={cn(["grid max-lg:container xl:grid-cols-12 w-full gap-y-6 py-14 2xl:py-20", containerClassNames])}>
        <div className={cn(["col-span-6", rightColClassNames])}>
          <H4 classNames="font-bold">{title}</H4>
        </div>
        <div className={cn(["col-span-6", leftColClassNames])}>
          {children}
        </div>
      </div>
    </React.Fragment>
  )
}