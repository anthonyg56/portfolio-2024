import { redirect } from "next/navigation"
import { Metadata, ResolvingMetadata } from "next"
import Image from "next/image"
import { H1, P, H2, H4, H3 } from "@/components/ui/typography"
import { capitalizeFirst, cn } from "@/lib/utils"
import { Project, ProjectNames } from "@/lib/types"
import { sql } from "@vercel/postgres"
import Section from "@/components/layout/sections"
import { Button } from "@/components/ui/button"

type PageParams = {
  projectName: ProjectNames
}

type MetadataProps = {
  params: PageParams,
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params, searchParams }: MetadataProps, parent: ResolvingMetadata): Promise<Metadata> {
  // read route params
  const { projectName } = params

  // fetch data
  const { rows: projects } = await sql<Project>`SELECT * FROM projects WHERE name = ${projectName}`

  if (projectName[0] === undefined)
    return {
      title: "Project Not Found | My Work",
      description: "Please check the url and try again"
    }

  const cleansedName = capitalizeFirst(projects[0].name)

  return {
    title: `${cleansedName} | Fullstack Web Developer | Indianapolis, Indiana | My Work`,
    description: projects[0].description
  }
}

type PageProps = {
  params: PageParams
}

export default async function Page({ params }: PageProps) {
  const { projectName } = params

  // fetch data
  const { rows: projects } = await sql<Project>`SELECT * FROM projects WHERE name = ${projectName}`

  const {
    category,
    cover_image,
    created_on,
    description,
    github_url,
    live_url,
    problem_description,
    problem_title,
    slug,
    solution_description,
    solution_title,
    name,
    youtube_url,
    id,
    hero_image,
  } = projects[0]

  console.log(hero_image)
  return (
    <div>
      <div className="flex flex-col lg:flex-row py gap-x-6 pt-6 relative" id="home">
        <H1 classNames="hidden lg:block text-center lg:text-start lg:text-[75px]">{name.toUpperCase()}</H1>
        <H4 classNames="max-lg:translate-y-4 max-lg:text-center max-lg:pb-0 lg:absolute pl-6px lg:pl-1 xl:pl-[6px] font-bold text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[30px] 3xl:text-[35px]">{category.toUpperCase()}</H4>
        <H1 classNames="text-center lg:text-start lg:text-[75px] lg:hidden">{name.toUpperCase()}</H1>
        <div className={cn([
          "text-muted-foreground gap-3 flex-wrap",
          "flex flex-col md:flex-row ",
          "gap-x-1",
          "justify-center lg:justify-end",
          "items-center md:items-start lg:items-end",
          "pb-0 md:pb-5 lg:pb-6 2xl:pb-10"
        ])}>
          {live_url && (
            <div className="flex flex-row gap-x-1">
              <P className="!font-bold">Live Demo:</P>
              <a href={live_url} className="text-primary transition-colors">{live_url}</a>
            </div>
          )}
          {youtube_url && (
            <div className="flex flex-row gap-x-1">
              <P className="!font-bold">Video Demo:</P>
              <a href={youtube_url} className="text-primary transition-colors">{youtube_url}</a>
            </div>
          )}
          {github_url && (
            <div className="flex flex-row">
              <P className="!font-bold">Github:</P>
              <a href={github_url} className="text-primary transition-colors">{github_url}</a>
            </div>
          )}
        </div>
      </div>

      <Image
        src={`/${hero_image}`}
        alt={`${name}'s cover photo`}
        width={0}
        height={0}
        sizes="100vw 100%"
        quality={100}
        className="max-h-[900px] object-contain object-center w-full"
      />

      {/* Project Description */}
      {/* <div className="grid grid-col-12 py-6 w-full">
        <div className="col-span-6">
          <H3>About</H3>
        </div>
        <div className="col-span-6">
          <H4>{capitalizeFirst(description)}</H4>
        </div>
      </div> */}
      <Section title="About">
        <H4 classNames="lg:text-[22px]">{capitalizeFirst(description)}</H4>
      </Section>

      <Section title="The Problem">
        <H4 classNames="lg:text-[22px]">{capitalizeFirst(problem_title)}</H4>
        <P>{capitalizeFirst(problem_description)}</P>
      </Section>

      <Section title="The Solution">
        <H4 classNames="lg:text-[22px]">{capitalizeFirst(solution_title)}</H4>
        <P>{capitalizeFirst(solution_description)}</P>
        {live_url && <a href={live_url}>
          <Button className="mt-6">
            View Live
          </Button>
        </a>}
      </Section>



      {/* The Problem it Attempts to Solve */}
      {/* <div className="grid grid-col-12 py-6 w-full">
        <div className="col-span-6">
          <H3>The Problem</H3>
        </div>
        <div className="col-span-6">
          <H4>{capitalizeFirst(solution_title)}</H4>
          <P>{capitalizeFirst(solution_description)}</P>
        </div>
      </div> */}

      {/* The solution it chose */}
      {/* <div className="grid grid-col-12 py-6 w-full">
        <div className="col-span-6">
          <H3>The Solution</H3>
        </div>
        <div className="col-span-6">
          <H4>{capitalizeFirst(solution_title)}</H4>
          <P>{capitalizeFirst(solution_description)}</P>
        </div>
      </div> */}
    </div>
  )
}