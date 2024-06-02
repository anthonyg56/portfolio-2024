import { H1, H3, H4, P } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Avatar from "../../public/Photo Mar 11 2024, 7 54 22 PM.jpg"
import { Separator } from "@/components/ui/separator";
import TechIcons from "@/components/ui/tech-icons";

import { Metadata } from "next";
import { Suspense } from "react";
import ProjectsCarousel, { ProjectCarouselSkeleton } from "@/components/ui/list/projects";

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
  return (
    <main className="">

      {/* Landing/Header */}
      <div className="flex flex-col lg:flex-row py gap-x-6 pt-6" id="home">
        <H1 classNames="text-center lg:text-start">ANTHONY GAYFLOR</H1>
        <div className={cn([
          "text-muted-foreground gap-3",
          "flex flex-col md:flex-row lg:flex-col",
          "",
          "justify-center lg:justify-end",
          "items-center md:items-start",
          "pb-5 xl:pb-6 2xl:pb-10"
        ])}>
          <P><span className="font-semibold">Location:</span> Indianapolis, In</P>
          <P className="!mt-0"><span className="font-semibold text-primary-text hover:cursor-default">Email:</span> <a href="mailto:Anthonygayflor6@gmail.com" className="hover:cursor-pointer text-primary">AnthonyGayflor6@gmail.com</a></P>
        </div>
      </div>

      {/* Image (Add about me to make it one page) */}
      <div className="grid lg:grid-cols-12 w-full items-center" id="about">
        <Image
          src={Avatar}
          alt="picture of me"
          width={0}
          height={0}
          sizes="100vw 100%"
          quality={100}
          className="col-span-6 max-h-[800px] object-cover object-center w-full"
        />
        <div className="col-span-6 container flex flex-col justify-center xl:w-10/12">
          <div className="py-6">
            <H3>About Me</H3>
            <H4 classNames="text-muted-foreground !font-medium !mt-2">Full stack developer, specialized in turning ideas into products.</H4>
            <P>After college i picked up web development when i was surfing between my friends couches as a way to earn extra cashand get a job in the field i studied in. I enjoyed the creative process enough to the point it ended up becoming a hobby in my freetime and developed a skill in taking ideas and realizing it through code. Now, as a solo practitioner, I primarilly collaborate with independent creatives, startups, and small businesses who have an idea and the grit to turn it into a product.</P>

          </div>
          <div className="py-6">
            <H3>Skills and Technologies</H3>
            <TechIcons />
          </div>
          <div className="py-6">
            <H3>Motivation</H3>
            <P>I am deeply passionate about web development because it allows me to be creative and transform abstract ideas into tangible, user-friendly experiences. The ability to create something from scratch, shape it with code, and witness it come to life on the screen is what fuels my enthusiasm. The challenge of solving problems and the constant evolution of technologies keep me inspired to push my boundaries and stay at the forefront of innovation.</P>
          </div>
        </div>
      </div>

      <Separator orientation="horizontal" className="bg-[#090909]/10 my-7" />

      {/* What I Do */}
      <div className="grid max-lg:container xl:grid-cols-12 w-full gap-y-6 py-14 2xl:py-20">
        <div className="col-span-6">
          <H3>Services & What I Do</H3>
        </div>
        <div className="col-span-6 grid grid-cols-6 md:grid-cols-12">
          <div className="col-span-6 pb-[60px] md:pb-0 md:col-span-5 space-y-[60px] w-full">
            {whatIDo.left.map(item => (
              <div className="col-span-6 flex flex-col" key={item.title}>
                <H4 classNames="font-bold">{item.title}</H4>
                <P className="!mt-3">{item.description}</P>
              </div>
            ))}
          </div>
          <div className="hidden col-span-2 md:flex justify-center">
            <Separator orientation="vertical" className="bg-[#090909]/10" />
          </div>
          <div className="col-span-6 md:col-span-5 space-y-[60px]">
            {whatIDo.right.map(item => (
              <div className="col-span-6 flex flex-col" key={item.title}>
                <H4 classNames="font-bold">{item.title}</H4>
                <P className="!mt-3">{item.description}</P>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Separator orientation="horizontal" className="bg-[#090909]/10 my-7" />

      {/* Most Recent Projects */}
      <div className="grid lg:grid-cols-12 max-lg:container w-full gap-y-6 py-14 2xl:py-20" id="work">
        <div className="col-span-6">
          <H3 classNames="font-medium">My Work</H3>
        </div>
        <Suspense fallback={<ProjectCarouselSkeleton />}>
          <ProjectsCarousel />
        </Suspense>
      </div>

      <Separator orientation="horizontal" className="bg-[#090909]/10 my-7" />

    </main>
  );
}


const whatIDo = {
  left: [
    {
      title: "MVP Development",
      description: "I create stunning digital designs that engage and inspire your audience; along with a performant website. Let me bring your brand to life with my skills."
    },
    {
      title: "Website Development",
      description: "I create stunning digital designs that engage and inspire your audience; along with a performant website. Let me bring your brand to life with my skills."
    },
  ],
  right: [
    {
      title: "Website Maintenance",
      description: "I create stunning digital designs that engage and inspire your audience; along with a performant website. Let me bring your brand to life with my skills."
    },

    {
      title: "UI/UX Design",
      description: "I create stunning digital designs that engage and inspire your audience; along with a performant website. Let me bring your brand to life with my skills."
    }
  ]
}



