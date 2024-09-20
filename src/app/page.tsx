import { H1, H3, H4, P } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Avatar from "../../public/me.jpg"
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
            <H4 classNames="text-muted-foreground !font-medium !mt-2 md:text-[16px] lg:text-[18px]">Full stack developer, specialized in turning ideas into products.</H4>
            <P>I picked up web development after college when i was surfing between my friends couches as a way to earn extra cash. I love the creative process of building things to the point it became a hobby and developed a skill in realizing ideas through code. Now, as a solo practitioner, I primarilly collaborate with independent creatives, startups, and small businesses who have an idea and the grit to turn it into a product.</P>
          </div>
          <div className="py-6">
            <H3>Skills and Technologies</H3>
            <TechIcons />
          </div>
        </div>
      </div>

      <Separator orientation="horizontal" className="bg-[#090909]/10 my-7" />

      {/* What I Do */}
      <div className="grid max-lg:container xl:grid-cols-12 w-full gap-y-6 py-14 2xl:py-20">
        <div className="col-span-6">
          <H3>What I Do</H3>
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
      <div className="grid xl:grid-cols-12 max-lg:container w-full gap-y-6 py-14 2xl:py-20" id="work">
        <div className="col-span-6">
          <H3 classNames="">My Work</H3>
        </div>
        <Suspense fallback={<ProjectCarouselSkeleton />}>
          <ProjectsCarousel />
        </Suspense>
      </div>
    </main>
  );
}


const whatIDo = {
  left: [
    {
      title: "MVP Development",
      description: "Transform your idea into a product through the use of bleeding-edge web technologies and realize your vision."
    },
    {
      title: "Feature Integration",
      description: "Have a specific feature in mind? Lets help you integrate it into your current site or create a custom solution for you."
    },
  ],
  right: [
    {
      title: "UI/UX Design",
      description: "Lets bring your brand to life with digital designs that is authentic to the companys mission while engaging and inspire your audience."
    },

    {
      title: "Migrations/Upgrades",
      description: "Struggling with your current website? I can help you migrate to a more modern framework and even upgrade your current site to a more performant version of itself."
    }
  ]
}



