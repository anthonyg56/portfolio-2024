import { H1, H3, H4, P } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Avatar from "../../public/Photo Mar 11 2024, 7 54 22 PM.jpg"
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function Home() {
  return (
    <main className="">
      <div className="grid grid-cols-12">
        <H1 classNames="col-span-12 md:col-span-6 lg:col-span-8 text-center md:text-start">ANTHONY GAYFLOR</H1>
        <div className={cn([
          "text-muted-foreground gap-x-3",
          "flex flex-row",
          "col-span-12 md:col-span-6 lg:col-span-4",
          "justify-center md:justify-start",
          "items-end",
          "pb-0 md:pb-6 lg:pb-9 xl:pb-11"
        ])}>
          <P><span className="font-semibold">Location:</span> Indianapolis, In</P>
          <P className="!mt-0"><span className="font-semibold">Email:</span> Anthonygayflor6@gmail.com</P>
        </div>
      </div>
      <div>
        <Image
          src={Avatar}
          alt="picture of me"
          width={0}
          height={0}
          sizes="100vw 100%"
          quality={100}
          className="max-h-[800px] object-cover object- w-full"
        />
      </div>
      <Separator orientation="horizontal" className="bg-[#090909]/10 my-7" />
      <div className="grid lg:grid-cols-12 w-full">
        <div className="col-span-6">
          <H3>What I Do</H3>
          <div className="flex flex-row gap-x-2 py-3">
            {techStack.map(item => (
              <TooltipProvider>
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

        </div>
        <div className="col-span-6 grid grid-cols-6 md:grid-cols-12">
          <div className="col-span-5 space-y-[60px]">
            {whatIDo.left.map(item => (
              <div className="col-span-6 flex flex-col" key={item.title}>
                <H3>{item.title}</H3>
                <P>{item.description}</P>
              </div>
            ))}
          </div>
          <div className="col-span-2 flex justify-center">
            <Separator orientation="vertical" className="bg-[#090909]/10" />
          </div>
          <div className="col-span-5 space-y-[60px]">
            {whatIDo.right.map(item => (
              <div className="col-span-6 flex flex-col" key={item.title}>
                <H3>{item.title}</H3>
                <P>{item.description}</P>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}


const whatIDo = {
  left: [
    {
      title: "Web Development",
      description: "I create stunning digital designs that engage and inspire your audience; along with a performant website. Let me bring your brand to life with my skills."
    },
    {
      title: "Upgrades",
      description: "I create stunning digital designs that engage and inspire your audience. Let me bring your brand to life with my skills."
    },
  ],
  right: [
    {
      title: "Website Maintenance",
      description: "I create stunning digital designs that engage and inspire your audience. Let me bring your brand to life with my skills."
    },

    {
      title: "Consultations",
      description: "I create stunning digital designs that engage and inspire your audience. Let me bring your brand to life with my skills."
    }
  ]
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
]

