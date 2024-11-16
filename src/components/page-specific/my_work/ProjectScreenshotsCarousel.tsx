import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { H4 } from "@/components/ui/typography"
import { CloudinaryResource, CloudinaryResourcesRes } from "@/lib/types"
import Image from "next/image"

type Props = {
  images: CloudinaryResourcesRes | null
}

export default function ProjectScreenshotsCarousel({ images }: Props) {
  return (
    <Carousel className="w-full max-w-lg md:max-w-3xl lg:max-w-4xl 2xl:max-w-5xl 3xl:max-w-none mx-auto pb-10 md:pb-12 lg:pb-16 2xl:pb-20 pt-6 lg:pt-0">
      <CarouselContent className="w-full h-full">
        {!images ? (
          <div>
            <H4>There was an error fetching the images</H4>
          </div>
        ) : images.resources.map((fileName, index) => (
          <CarouselItem key={index} className="w-full h-full">
            <Image
              src={fileName.secure_url}
              alt={`${fileName.display_name}'s cover photo ${index + 1}`}
              width={0}
              height={0}
              sizes="100vw 100%"
              quality={100}
              className="object-contain object-center w-full h-full z-10 max-h-[900px]"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}