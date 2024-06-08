
import { capitalizeEach, cn } from "@/lib/utils"
import { Separator } from "../separator"
import { P } from "../typography"
import Link from "next/link"
import Image from "next/image"
import { ProjectCard as ProjectCardProps } from "@/lib/types"

type Props = ProjectCardProps

export default function ProjectCard({ category, cover_image, name, slug }: Props) {

  return (
    <Link href={`/work/${slug}`} className="col-span-4">
      <div className="w-full h-full">
        <div className="relative max-h-[300px] h-[300px] lg:max-h-[500px] lg:h-[500px] w-full">
          <Image
            src={`/${cover_image}`}
            alt={`${cover_image} image`}
            fill
            className="absolute object-cover object-center h-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-sm"
          />
        </div>
        <Separator orientation="horizontal" />
        <div className="flex flex-row justify-between pt-2">
          <P size="md">{capitalizeEach(name)}</P>
          <P size="md" className="!mt-0">{category}</P>
        </div>
      </div>
    </Link>
  )
}