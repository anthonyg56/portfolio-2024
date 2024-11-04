import React from "react"
import { Separator } from "../ui/separator"
import { H3, H4 } from "../ui/typography"
import { cn } from "@/lib/utils"
import TextGradient from "../ui/misc/GradientText"

type Props = {
  title: string,
  children: React.ReactNode,
  leftColClassNames?: string,
  rightColClassNames?: string,
  containerClassNames?: string,
}

export default function Section({
  children,
  title,
  containerClassNames,
  leftColClassNames,
  rightColClassNames
}: Props) {
  return (
    <React.Fragment>
      <div className={cn(["flex flex-col", containerClassNames])}>
        <div className={cn(["", rightColClassNames])}>
          <H4 classNames="font-bold">
            <TextGradient>
              {title}
            </TextGradient>
          </H4>
        </div>
        <div className={cn(["", leftColClassNames])}>
          {children}
        </div>
      </div>
    </React.Fragment>
  )
}

{/* <React.Fragment>
<Separator orientation="horizontal" className="bg-[#090909]/10 my-7" />
<div className={cn(["grid max-lg:container xl:grid-cols-12 w-full gap-y-6 py-14 2xl:py-20", containerClassNames])}>
  <div className={cn(["col-span-6", rightColClassNames])}>
    <H4 classNames="font-bold">
      <TextGradient>
        {title}
      </TextGradient>
    </H4>
  </div>
  <div className={cn(["col-span-6", leftColClassNames])}>
    {children}
  </div>
</div>
</React.Fragment> */}