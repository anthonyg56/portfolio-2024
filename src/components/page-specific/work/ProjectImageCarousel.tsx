"use client"

import Image from 'next/image';
import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react'

type Props = {
  images: string[] | null | undefined,
  projectName: string,
};

export default function ProjectImageCarousel({ images, projectName }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  if (!images) {
    return null
  };

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        {images.map((image, index) => (
          <div className='embla__slide'>
            <Image
              src={`/cover/${image}`}
              alt={`${projectName}'s cover photo  #${index}`}
              width={0}
              height={0}
              sizes="100vw 100%"
              quality={100}
              className="object-contain object-center w-full"
            />
          </div>
        ))}
      </div>
    </div>
  )
}