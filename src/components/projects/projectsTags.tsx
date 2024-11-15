"use client"

import { tagsList } from "@/lib/data";
import { ProjectTag } from "@/lib/types";
import { CarouselApi } from "../ui/carousel";
import { H3, H4 } from "../ui/typography";
import { Button } from "../ui/button";

export default function ProjectTagsNavigation({ api, projectTags, handleTagsUpdate }: {
  api: CarouselApi,
  projectTags: ProjectTag[] | null,
  handleTagsUpdate(e: any, newTag: ProjectTag): void,
}) {
  return (
    <div className="flex flex-col justify-center items-center xl:items-start">
      <H3 classNames="">My Work</H3>

      {/* <div className="flex flex-row gap-x-3 py-3 items-center xl:items-start justify-center">
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
      </div> */}
    </div >
  );
};