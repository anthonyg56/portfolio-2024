import { Project } from "@/lib/types";
import { useRouter } from "next/router";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "../ui/card";
import TechnologiesIcons from "../ui/tech-icons";
import { P } from "../ui/typography";
import Image from "next/image";
import { CarouselItem } from "../ui/carousel";

export default function ProjectsCarouselItem({ project }: { project: Project }) {
  const router = useRouter();

  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 3xl:basis-1/5">
      <Card
        onClick={e => router.push(`/work/${project.slug}`)}
        className="border-[#090909]/10 rounded-md overflow-hidden hover:cursor-pointer"
      >
        <Image
          src={require(`../../../../public/cover/${project.coverPhoto}`)}
          alt={`${project.name} Cover`}
          className="md:h-[500px] object-cover object-center"
        />
        <CardHeader>
          <div className="flex flex-row justify-between">
            <CardTitle>{project.name}</CardTitle>
            {project.launched === true && project.liveUrl && (
              <a href={project.liveUrl} className="text-sm translate-y-1 font-medium hover:text-primary">
                View Live
              </a>
            )}
          </div>

          <CardDescription>{project.tags.join(", ")}</CardDescription>
        </CardHeader>
        {/* <CardContent>
        <P>{project.about.text.slice(0, 94) + ".."}</P>
      </CardContent> */}
        <CardFooter className="flex-col items-start">
          <P className="font-semibold text-sm">Tech Stack</P>
          <TechnologiesIcons technologies={project.tech} size="small" />
        </CardFooter>
      </Card>
    </CarouselItem>
  )
}