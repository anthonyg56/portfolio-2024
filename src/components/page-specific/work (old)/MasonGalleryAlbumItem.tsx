import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Album } from "@/lib/types";
import { capitalizeFirst } from "@/lib/utils";
import Image from "next/image";

type Props = {
  album: Album,
  photos: string[] | null,
  handleSelectAlbum(albumIndex: Album | null): void
};

export function MasonGalleryAlbumItem({ album, photos, handleSelectAlbum }: Props) {
  const albumTitleCapitalized = capitalizeFirst(album);

  return (
    <Card onClick={e => handleSelectAlbum}>
      <CardHeader>
        <CardTitle>
          {albumTitleCapitalized}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <Image
            src={photos ? photos[0] : ""}
            alt={`${albumTitleCapitalized} cover`}
            width={0}
            height={0}
          />
        </div>
      </CardContent>
    </Card>
  );
}