import { Technology } from "@/lib/types"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip"
import { P } from "./typography"
import { techImages } from "@/lib/data"
import { cn } from "@/lib/utils"

type Props = {
  technologies: Technology[],
  size?: "default" | "small" | "large"
}

export default function TechnologiesIcons({ technologies, size = "default" }: Props) {
  return (
    <div className="flex flex-row gap-x-2 py-3">
      {technologies.map(tech => {
        const index = techImages.findIndex(item => item.title === tech);

        return (
          <TooltipProvider key={tech}>
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
      })}
    </div>
  )
}