import { techIconSize, Technology } from "@/lib/types"
import { techImages } from "@/lib/data"
import TechnologyIconNoText from "./TechnologyIconNoText"
import TechnologyIconWithText from "./TechnologyIconWithText";

type Props = {
  technologies: Technology[],
  size?: techIconSize,
};

export default function TechnologiesIcons({ technologies, size = "default" }: Props) {
  return (
    <div className="flex flex-row flex-wrap gap-x-2 py-3">
      {technologies.map(tech => {
        const index = techImages.findIndex(item => item.title === tech);

        console.log(size);

        if (size === "about") {
          return (
            <TechnologyIconWithText
              key={tech}
              size={size}
              index={index}
              technologyName={tech}
            />
          )
        } else {
          return (
            <TechnologyIconNoText
              key={tech}
              size={size}
              index={index}
              technologyName={tech}
            />
          )
        }
      })}
    </div>
  )
}