import { ProjectCard as TProjectCard } from "@/lib/types"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../carousel"
import ProjectCard from "../cards/project"
import { H4 } from "../typography"
import { sql } from "@vercel/postgres"

// For suspense when the data is loading
export function ProjectCarouselSkeleton() {
  return (
    <div className="col-span-6 grid md:grid-cols-12 gap-6">
      <div className="pulse col-span-4 w-full h-full"></div>
      <div className="pulse col-span-4 w-full h-full"></div>
      <div className="pulse col-span-4 w-full h-full"></div>
    </div>
  )
}

// Core component
export default async function ProjectsCarousel() {
  try {
    const { rows: projects } = await sql<TProjectCard>`SELECT category, slug, cover_image, name FROM projects ORDER BY created_on DESC LIMIT 3`

    if (projects.length === 0)
      return <NoProjects text="No projects were found" />
    else
      return (
        <Carousel className="col-span-6">
          <CarouselContent>
            {projects?.map(item => (
              <CarouselItem key={item.slug} className="md:basis-1/2">
                <ProjectCard  {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="xl:hidden" />
          <CarouselNext className="xl:hidden" />
        </Carousel>
      )
  } catch (error: any) {
    console.error(error.message)
    return <NoProjects text="There was an error fetching the projects" />
  }
}

// Dynamic no projects found
function NoProjects({ text }: { text: string }) {
  return (
    <div className="col-span-6 grid justify-center items-center">
      <H4>{text}</H4>
    </div>
  )
}