import { Technology, techIconSize } from "@/lib/types";
import { Card, CardContent, CardTitle } from "../../card";
import { techImages } from "@/lib/data";
import { cn } from "@/lib/utils";
import { H4 } from "../../typography";

type Props = {
  technologyName: Technology,
  size: techIconSize,
  index: number,
}

export default function TechnologyIconWithText({ index, size, technologyName }: Props) {
  console.log(index, size, technologyName)
  return (
    <div className="flex flex-row gap-x-3 my-3 flex-wrap pr-2">
      <img
        src={techImages[index].logo}
        alt={`${techImages[index].title} logo`}
        className={cn([{
          "w-9 h-9": size === "large",
          "w-6 h-6": size === "default" || size === "about",
          "w-5 h-5": size === "small",
        }])}
      />
      <H4 classNames="!text-sm">{technologyName}</H4>
    </div>
  );
}