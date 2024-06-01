import { H1, H2, H3, P } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Avatar from "../../public/Photo Mar 11 2024, 7 54 22 PM.jpg"
import { Separator } from "@/components/ui/separator";
import ProjectCard from "@/components/ui/cards/project";
import TechIcons from "@/components/ui/tech-icons";

import { Project } from "@/lib/db/entities";
import { Metadata } from "next";
import { ProjectCard as TProjectCard } from "@/lib/types";

export const metadata: Metadata = {
  title: "Fullstack Web Developer | Indianapolis, Indiana | Home",
  description: "A Full stack web developer specialized in building frontend experinces, located in Marion county Indianapolis, Indiana. Accepting fulltime work or freelance contracts with creatives, startups, or small businesses in their early stages.",
};

/**
 * Homepage with 5 Sections:
 * - Hero: Name, location, and email
 * - About: Image, and about me.  
 *  - Should express my personality. Personalable, Authentic, Creative
 * - What i Do: All the ways i can provide value
 * - My Work: Focus on the tools i use and what i have made with them
 * - Call to Action:
 * 
 *  Potential COA line: Have an idea? Lets make it a reality.
 * 
 * @returns 
 */
export default async function Page() {
  const projects = new Project(['category', 'slug', 'cover_image', 'name'], {
    limit: 3,
    order: {
      dir: "DESC",
      field: "created_on"
    }
  })

  await projects.fetchData()

  return (
    <main className="">

      {/* Landing/Header */}
      <div className="grid grid-cols-12" id="home">
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

      {/* Image (Add about me to make it one page) */}
      <div className="grid lg:grid-cols-12 w-full" id="about">
        <Image
          src={Avatar}
          alt="picture of me"
          width={0}
          height={0}
          sizes="100vw 100%"
          quality={100}
          className="col-span-6 max-h-[800px] object-cover object- w-full"
        />
        <div className="col-span-6 container flex flex-col justify-center lg:w-10/12">
          <div className="py-6">
            <H3>About Me</H3>
            <P size="lg" className="text-muted-foreground !mt-0">Full stack developer focused on building front end experinces.</P>
            <P>As a solo practitioner, I collaborate with independent creatives, startups, and small businesses in their initial stages. Utilizing cutting-edge web technologies and frameworks, I take pleasure in turning their ideas into fully functional and visually striking web applications.</P>
          </div>
          <div className="py-6">
            <H3>Skills and Technologies</H3>
            <TechIcons />
          </div>
          <div className="py-6">
            <H3>Motivation</H3>
            <P>I am deeply passionate about web development because it allows me to be creative and transform abstract ideas into tangible, user-friendly experiences. The ability to create something from scratch, shape it with code, and witness it come to life on the screen is what fuels my enthusiasm. I am motivated by the dynamic nature of the industry, where there's always something new to learn and master. The challenge of solving problems and the constant evolution of technologies keep me inspired to push my boundaries and stay at the forefront of innovation."</P>
          </div>
        </div>
      </div>

      <Separator orientation="horizontal" className="bg-[#090909]/10 my-7" />

      {/* What I Do */}
      <div className="grid lg:grid-cols-12 w-full py-36">
        <div className="col-span-6">
          <H3>What I Do</H3>
        </div>
        <div className="col-span-6 grid grid-cols-6 md:grid-cols-12">
          <div className="col-span-5 space-y-[60px]">
            {whatIDo.left.map(item => (
              <div className="col-span-6 flex flex-col" key={item.title}>
                <H3>{item.title}</H3>
                <P className="!mt-3">{item.description}</P>
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
                <P className="!mt-3">{item.description}</P>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Separator orientation="horizontal" className="bg-[#090909]/10 my-7" />

      {/* Most Recent Projects */}
      <div className="grid lg:grid-cols-12 w-full py-36 gap-y-6" id="work">
        <div className="col-span-6">
          <H3>My Work</H3>
        </div>
        <div className="col-span-6 grid md:grid-cols-12 gap-6">
          {projects.rows.map(item => (
            <ProjectCard key={item.slug} {...item} />
          ))}
        </div>
      </div>

      <Separator orientation="horizontal" className="bg-[#090909]/10 my-7" />

    </main>
  );
}


const whatIDo = {
  left: [
    {
      title: "Website Development",
      description: "I create stunning digital designs that engage and inspire your audience; along with a performant website. Let me bring your brand to life with my skills."
    },
    {
      title: "MVP/App Development",
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



