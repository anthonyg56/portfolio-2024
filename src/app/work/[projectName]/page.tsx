import { Metadata, ResolvingMetadata } from "next";
import { capitalizeFirst, cn } from "@/lib/utils";
import { projects } from "@/lib/data";
import Section from "@/components/layout/sections";
import TextGradient from "@/components/ui/misc/GradientText";
import { H1, H4, P } from "@/components/ui/typography";
import Image from "next/image";
import { readdirSync } from "fs";
import { join, resolve } from "path";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { readdir } from "fs/promises";

type PageParams = {
  projectName: Promise<{ slug: string }>,
};

type MetadataProps = {
  params: {
    projectName: string,
  },
  searchParams: { [key: string]: string | string[] | undefined },
};

export async function generateMetadata({ params, searchParams }: MetadataProps, parent: ResolvingMetadata): Promise<Metadata> {
  // read route params
  const { projectName } = params;

  const project = projects.find(value => value.name === projectName);

  if (project === undefined) {
    return {
      title: "Project Not Found | My Work",
      description: "Please check the url and try again"
    };
  };

  const cleansedName = capitalizeFirst(project.name);

  return {
    title: `${cleansedName} | Fullstack Web Developer | Indianapolis, Indiana | My Work`,
    description: project.about.text,
  };
};

type PageProps = {
  params: Promise<{ projectName: string }>,
};

export default async function Page({ params }: PageProps) {
  const slug = (await params).projectName
  const project = projects.filter(value => value.slug === slug)[0];

  if (!project) {
    throw new Error("Project not found");
  };

  /**
 * Takes the path of a directory and returns a string array
 * containing the names of all the files in said directory
 * 
 * @param dirPath - Path of the directory containing the files
 * @returns a string array containing the names of all the files
 */
  async function mapFileNames(dirPath: string | null): Promise<string[] | undefined | null> {
    console.log(project?.screenshotDir)
    if (!dirPath || !project?.screenshotDir)
      return

    const files = await readdir(dirPath);

    return files.map(file => join(dirPath, file)
      .replace(`public\\`, "")
      .replace("\\", "/")
      .replace("\\", "/")
    );
  };

  const dirPath = project.screenshotDir ? `./public/UI_UX/${project.screenshotDir}` : null;
  const fileNames = await mapFileNames(dirPath);

  console.log(fileNames)
  return (
    <div className="grid">
      {/* Header */}
      <div className="flex flex-col py gap-x-6 pt-6 relative text-center" id="home">
        <H4 classNames="font-bold text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[30px] translate-y-[15px] xl:translate-y-[21px] 2xl:translate-y-[28px] 3xl:translate-y-[36px]">
          {project.tags.join(", ")}
        </H4>
        <H1 classNames="block text-center lg:text-[75px]">
          <TextGradient>
            {project.name.toUpperCase()}
          </TextGradient>
        </H1>
        <div className={cn([
          "text-muted-foreground gap-3 flex-wrap",
          "flex flex-col md:flex-row ",
          "gap-x-1",
          "justify-center",
          "items-center md:items-start lg:items-end",
          "pb-0 md:pb-5 lg:pb-6 2xl:pb-10"
        ])}>
          {project.liveUrl && (
            <div className="flex flex-row gap-x-1">
              <P className="!font-bold">Live Demo:</P>
              <a href={project.liveUrl} className="text-primary transition-colors">{project.liveUrl}</a>
            </div>
          )}
          {project.githubUrl && (
            <div className="flex flex-row">
              <P className="!font-bold">Github:</P>
              <a href={project.githubUrl} className="text-primary transition-colors">{project.githubUrl}</a>
            </div>
          )}
        </div>
      </div>

      {/* Carousel */}
      <Carousel className="w-full max-w-lg md:max-w-3xl lg:max-w-4xl 2xl:max-w-5xl 3xl:max-w-none mx-auto pb-10 md:pb-12 lg:pb-16 2xl:pb-20 pt-6 lg:pt-0">
        <CarouselContent className="w-full h-full">
          {fileNames?.map((fileName, index) => (
            <CarouselItem key={index} className="w-full h-full">
              <Image
                src={`/${fileName}`}
                alt={`${project.name}'s cover photo`}
                width={0}
                height={0}
                sizes="100vw 100%"
                quality={100}
                className="object-contain object-center w-full h-full z-10 max-h-[900px]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Sections/Contrent */}
      <div className="grid grid-cols-12 mx-auto gap-9 pb-[69px] text-center 2xl:max-w-screen-xl 3xl:max-w-screen-3xl px-6">
        <Section title="About" containerClassNames="col-span-12 md:col-span-4">
          <H4 classNames="lg:text-[22px]">{capitalizeFirst(project.about.title)}</H4>
          <P>{capitalizeFirst(project.about.text)}</P>
        </Section>

        <Section title="The Problem" containerClassNames="col-span-12 md:col-span-4">
          <H4 classNames="lg:text-[22px]">{capitalizeFirst(project.problem.title)}</H4>
          <P>{capitalizeFirst(project.problem.text)}</P>
        </Section>

        <Section title="The Solution" containerClassNames="col-span-12 md:col-span-4">
          <H4 classNames="lg:text-[22px]">{capitalizeFirst(project.solution.title)}</H4>
          <P>{capitalizeFirst(project.solution.text)}</P>
        </Section>
      </div>
    </div>
  )
}