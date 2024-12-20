"use client"

import { projects } from "@/lib/data";
import { ProjectTag } from "@/lib/types";
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext } from "../../../ui/carousel";
import { H4 } from "../../../ui/typography";
import ProjectsCarouselItem from "./projectCarouseltems";
import React from "react";

export default function ProjectsCarousel({ projectTags }: { projectTags: ProjectTag[] }) {
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

  if (currentProjects.length === 0 && !currentProjects[0]) {
    return (
      <div>
        <H4>No Projects Found</H4>
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <CarouselContent className="">
          {currentProjects.map(project => (<ProjectsCarouselItem key={project.name} project={project} />))}
        </CarouselContent>
        <CarouselNavigator />
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </React.Fragment>
    );
  };
};

function CarouselNavigator() {
  return (
    <div className="relative">
      <div>
        { }
      </div>
      <CarouselPrevious />
      <CarouselNext />
    </div>
  )
}