"use client"

import { ProjectTag } from "@/lib/types";
import React, { useState, useEffect } from "react";
import { CarouselApi, Carousel } from "../../../ui/carousel";
import ProjectsCarousel from "./projectCarousel";
import ProjectTagsNavigation from "./projectsTags";

// Acts as a controller and container by handling all state changes
export default function MyProjects() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [projectTags, setProjectTags] = useState<ProjectTag[]>([
    "Web App Development", "Feature Integration", "Personal", "UI/UX", "Upgrade/Migration"
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
    <div className="flex justify-center flex-col">
      <ProjectTagsNavigation
        api={carouselApi}
        projectTags={projectTags}
        handleTagsUpdate={handleTagsUpdate}
      />
      <Carousel setApi={setCarouselApi} id="work" className="mx-auto lg:mx-0 py-10 w-full items-center justify-center max-w-xs md:max-w-3xl lg:max-w-none">
        <ProjectsCarousel
          projectTags={projectTags}
        />
      </Carousel>
    </div>
  );
};