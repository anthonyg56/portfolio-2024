"use client"

import { ProjectTag } from "@/lib/types";
import { useState, useEffect } from "react";
import { CarouselApi, Carousel } from "../ui/carousel";
import ProjectsCarousel from "./projectCarousel";
import ProjectTagsNavigation from "./projectsTags";

// Acts as a controller and container by handling all state changes
export default function MyProjects() {
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
    // <div className="grid max-lg:container w-full gap-y-6 py-14 2xl:py-20" id="work">
    <div id="work">
      <Carousel setApi={setCarouselApi}>
        <ProjectTagsNavigation
          api={carouselApi}
          projectTags={projectTags}
          handleTagsUpdate={handleTagsUpdate}
        />
        <ProjectsCarousel
          projectTags={projectTags}
        />
      </Carousel>
    </div>
    // </div>
  );
};