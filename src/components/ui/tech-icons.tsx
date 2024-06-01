import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip"
import { P } from "./typography"

export default function TechIcons() {
  return (
    <div className="flex flex-row gap-x-2 py-3">
      {techStack.map(item => (
        <TooltipProvider key={item.title}>
          <Tooltip>
            <TooltipTrigger>
              <img
                src={item.logo}
                alt={`${item.title} logo`}
                className="w-6 h-6"
              />
            </TooltipTrigger>
            <TooltipContent>
              <P size="sm">{item.title}</P>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  )
}

const techStack = [
  {
    title: "Next.Js",
    logo: "https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png",
  },
  {
    title: "TypeScript",
    logo: "https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_plain_logo_icon_146316.png",
  },
  {
    title: "JavaScript",
    logo: "https://www.computerhope.com/jargon/j/javascript.png",
  },
  {
    title: "React.Js",
    logo: "https://th.bing.com/th/id/OIP.cPh7ujRIfcHAy4kW2ADGOwHaHa?rs=1&pid=ImgDetMain",
  },
  {
    title: "Node.Js",
    logo: "https://api.qspiders.com/media/course_images/node-js_a3KAOmA.png",
  },
  {
    title: "PostgreSQL",
    logo: "https://th.bing.com/th/id/OIP.6pLWWA3aD7z2GozLFuDQKgHaHp?rs=1&pid=ImgDetMain",
  },
  {
    title: "TailwindCSS",
    logo: "https://th.bing.com/th/id/OIP.4MLiXSkY-1i2fgt0gR6aowAAAA?rs=1&pid=ImgDetMain",
  },
  {
    title: "Supabase",
    logo: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png",
  },
  {
    title: "LEARNING: Rust 🦀",
    logo: "https://miro.medium.com/max/1200/1*lmv2kXnZ9qsUGkrPz__QsQ.png",
  }
]