import { redirect } from "next/navigation"
import { Metadata, ResolvingMetadata } from "next"
import Image from "next/image"
import { H1, P, H2, H4, H3 } from "@/components/ui/typography"
import { capitalizeFirst, cn } from "@/lib/utils"
import { ProjectNames } from "@/lib/types"
import { Project } from "@/lib/db/entities"

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
  const projects = new Project("*", {
    eq: [
      {
        field: "name",
        value: projectName
      }
    ]
  })

  await projects.fetchData()

  // If there is no project data route back to the home page
  if (projects.rows.length === 0 || projects.rows[0] === undefined)
    redirect('/')

  const cleansedName = capitalizeFirst(projects.rows[0].name)

  return {
    title: `${cleansedName} | My Work`,
    description: projects.rows[0].description
  }
}

type PageProps = {
  params: PageParams
}

export default async function Page({ params }: PageProps) {
  const { projectName } = params

  const projects = new Project("*", {
    eq: [
      {
        field: "name",
        value: projectName
      }
    ]
  })

  await projects.fetchData()

  // If there is no project data route back to the home page
  if (projects.rows.length === 0 || projects.rows[0] === undefined)
    redirect('/')

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
    id
  } = projects.rows[0]

  const cleansedName = capitalizeFirst(projects.rows[0].name)
  return (
    <div>
      <div className="grid grid-cols-12" id="home">
        <H1 classNames="col-span-12 md:col-span-6 lg:col-span-8 text-center md:text-start">{cleansedName}</H1>
        <div className={cn([
          "text-muted-foreground gap-x-3",
          "flex flex-row",
          "col-span-12 md:col-span-6 lg:col-span-4",
          "justify-center md:justify-start",
          "items-end",
          "pb-0 md:pb-6 lg:pb-9 xl:pb-11"
        ])}>
          {github_url && (
            <div className="flex flex-col justify-between">
              <P>Guthub:</P>
              <a href={github_url}>{github_url}</a>
            </div>
          )}
          {live_url && (
            <div className="flex flex-col justify-between">
              <P>Live Demo:</P>
              <a href={live_url}>{live_url}</a>
            </div>
          )}
          {youtube_url && (
            <div className="flex flex-col justify-between">
              <P>Video Demo:</P>
              <a href={youtube_url}>{youtube_url}</a>
            </div>
          )}
        </div>
      </div>

      <Image
        src={cover_image}
        alt={`${name}'s cover photo`}
        width={0}
        height={0}
        sizes="100vw 100%"
        quality={100}
        className="max-h-[900px] object-cover object-center w-full"
      />

      {/* Project Description */}
      <div className="grid grid-col-12 py-6 w-full">
        <div className="col-span-6">
          <H3>About {cleansedName}</H3>
        </div>
        <div className="col-span-6">
          <H4>{capitalizeFirst(description)}</H4>
        </div>
      </div>

      {/* The Problem it Attempts to Solve */}
      <div className="grid grid-col-12 py-6 w-full">
        <div className="col-span-6">
          <H3>The Problem</H3>
        </div>
        <div className="col-span-6">
          <H4>{capitalizeFirst(problem_title)}</H4>
          <P>{capitalizeFirst(problem_description)}</P>
        </div>
      </div>

      {/* The solution it chose */}
      <div className="grid grid-col-12 py-6 w-full">
        <div className="col-span-6">
          <H3>The Solution</H3>
        </div>
        <div className="col-span-6">
          <H4>{capitalizeFirst(solution_title)}</H4>
          <P>{capitalizeFirst(solution_description)}</P>
        </div>
      </div>
    </div>
  )
}