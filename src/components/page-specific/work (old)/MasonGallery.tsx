import { MasonGalleryImage } from "@/lib/types";
import { Masonry } from "react-plock";
import MasonGalleyImage from "./MasonGallery/MasonGalleryImage";
import Image from "next/image";

type MasonryGalleryProps = {
  imageUris: MasonGalleryImage[],
  loadImage(index: number): void,
}

export default function MasonryGallery({ imageUris, loadImage }: MasonryGalleryProps) {
  return (
    <Masonry
      items={imageUris}
      config={{
        gap: [2, 4, 6, 8],
        columns: [1, 2, 3, 4],
        media: [576, 768, 992, 1200, 1500],
      }}
      render={(item, index) => (
        <Image
          width={0}
          height={0}
          key={item.uri}
          src={item.uri}
          alt={item.alt}
          onClick={e => loadImage(index)}
          className="w-full h-full object-cover object-center rounded-md"
        />
      )}
    />
  );
};

