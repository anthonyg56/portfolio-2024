
import { Metadata, ResolvingMetadata } from "next";
import { capitalizeFirst, cn } from "@/lib/utils";
import { cloudinaryUrl, projects } from "@/lib/data";
import Section from "@/components/layout/sections";
import TextGradient from "@/components/ui/misc/GradientText";
import { H1, H4, P } from "@/components/ui/typography";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { CldImage } from 'next-cloudinary';
import { CloudinaryResource, CloudinaryResourcesRes } from "@/lib/types";
import { v2 as cloudinary } from 'cloudinary';
import ProjectScreenshotsCarousel from "@/components/page-specific/my_work/ProjectScreenshotsCarousel";
// import { fetchImages } from "@/lib/api";

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

  const images: null | CloudinaryResourcesRes = await cloudinary.api.resources({
    prefix: `portfolio/UI_UX/${project.screenshotDir}/`,
    resource_type: "image",
    type: "upload",
  }, (error: unknown, results: CloudinaryResourcesRes) => {
    if (error instanceof Error) {
      console.log(error)
      return null
    };

    if (!results)
      return null;

    return results;
  });

  console.log(images)
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
      <ProjectScreenshotsCarousel images={images} />

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