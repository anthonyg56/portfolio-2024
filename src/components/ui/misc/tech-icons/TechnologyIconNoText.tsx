import { techImages } from "@/lib/data"
import { cn } from "@/lib/utils"
import { size } from "lodash"
import { P } from "../../typography"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../tooltip"
import { techIconSize, Technology } from "@/lib/types"

type Props = {
  technologyName: Technology,
  size: techIconSize,
  index: number,
}

export default function TechnologyIconNoText({ index, size, technologyName }: Props) {
  return (
    <TooltipProvider key={technologyName}>
      <Tooltip>
        <TooltipTrigger>
          <img
            src={techImages[index].logo}
            alt={`${techImages[index].title} logo`}
            className={cn([{
              "w-9 h-9": size === "large",
              "w-6 h-6": size === "default",
              "w-5 h-5": size === "small",
            }])}
          />
        </TooltipTrigger>
        <TooltipContent>
          <P size="sm">{techImages[index].title}</P>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}