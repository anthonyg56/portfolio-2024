"use client"

import { useEffect, useState } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../carousel";
import { projects, tagsList } from "@/lib/data";
import { H3, H4 } from "../typography";
import Image from "next/image";
import { Project, ProjectTag } from "@/lib/types";
import { Button } from "../button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../card";
import { useRouter } from "next/navigation";

// Acts as a controller and container by handling all state changes
export function ProjectsV2() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [projectTags, setProjectTags] = useState<ProjectTag[]>([
    "App Development", "Feature Integration", "Personal", "UI/UX", "Upgrade/Migration"
  ]);

  useEffect(() => {
    if (!carouselApi) {
      return
    };

    carouselApi.on("select", () => {
      // Do something on select.
    });

  }, [carouselApi]);

  // handles the click event for what tags are shown
  function handleTagsUpdate(e: any, newTag: ProjectTag) {
    console.log(`Current tags: ${projectTags} \n\nSelected Tag: ${newTag}\n\nIs Included: ${projectTags && projectTags.includes(newTag)}`);

    if (projectTags && projectTags.includes(newTag)) {
      setProjectTags(projectTags.filter(value => value !== newTag));
    } else if (projectTags && !projectTags.includes(newTag)) {
      setProjectTags([...projectTags, newTag]);
    } else if (projectTags === null) {
      setProjectTags([newTag]);
    };
  };

  return (
    <Carousel setApi={setCarouselApi}>
      <ProjectsV2Navigation
        api={carouselApi}
        projectTags={projectTags}
        handleTagsUpdate={handleTagsUpdate}
      />
      <ProjectsV2Carousel
        projectTags={projectTags}
      />
    </Carousel>
  );
};

export function ProjectsV2Navigation({ api, projectTags, handleTagsUpdate }: {
  api: CarouselApi,
  projectTags: ProjectTag[] | null,
  handleTagsUpdate(e: any, newTag: ProjectTag): void,
}) {
  return (
    <div className="flex flex-col justify-center items-center xl:items-start">
      <H3 classNames="">My Work</H3>

      <div className="flex flex-row gap-x-3 py-3 items-center xl:items-start justify-center">
        <H4>Tags:</H4>
        {tagsList.map((value: ProjectTag, index) => (
          <Button
            key={value}
            className="rounded-full first:pl-0 last:pr-0 text-lg"
            variant={projectTags && projectTags.includes(value) ? "rgb" : "ghost"}
            onClick={(e: any) => handleTagsUpdate(e, value)}
          >
            {value}
          </Button>
        ))}
      </div>
    </div >
  );
};

export function ProjectsV2Carousel({ projectTags }: { projectTags: ProjectTag[] }) {
  const currentProjects = projects.filter(item => {
    if (typeof item.tags === "string" && projectTags.includes(item.tags)) {
      return item;
    } else if (typeof item.tags === "string" && !projectTags.includes(item.tags)) {
      return;
    } else if (
      item.tags.length === 0 && item.tags[0] === undefined ||
      item.tags.length === 0 && item.tags[0] === null
    ) {
      return;
    };

    // Code should only run if the array isnt empty and item.tags isnt a string.
    let index = 0;
    let isIncluded = false;

    while (index < item.tags.length) {
      if (projectTags.includes((item.tags as ProjectTag[])[index])) {
        isIncluded = true;
      };

      index = index + 1;
    };

    if (isIncluded === true) {
      return CarouselItem;
    };
  });

  console.log()
  if (
    currentProjects.length === 0 && currentProjects[0] === null ||
    currentProjects.length === 0 && currentProjects[0] === undefined
  ) {
    return (
      <div>
        <H4>No Projects Found</H4>
      </div>
    );
  } else {
    return (
      <div className="flex flex-row relative">
        <CarouselContent>
          {currentProjects.map(project => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 3xl:basis-1/5">
              <ProjectsV2CarouselItem project={project} />
            </CarouselItem>
          )
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </div>

    );
  };
};

export function ProjectsV2CarouselItem({ project }: { project: Project }) {
  const router = useRouter();

  return (
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
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>{project.about.text.slice(0, 94) + ".."}</CardDescription>
      </CardHeader>
      <CardFooter>
        {project.tags.join(", ")}
      </CardFooter>
    </Card>
  )
}