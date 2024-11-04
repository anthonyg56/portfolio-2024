"use client"

import { projects } from "@/lib/data";
import { Album, Albums } from "@/lib/types";
import { useParams } from "next/navigation";
import { MasonGalleryAlbumItem } from "./MasonGalleryAlbumItem";
import { useState } from "react";

type ControllerViews = "Albums" | "Gallery" | "Photo"

type Props = {
  albums: Albums | null,
};

export function MasonGalleryController({ albums }: Props) {
  const [currentView, setCurrentView] = useState<ControllerViews>("Albums");
  const [currentAlbum, setCurrentAlbum] = useState<Album | null>(null);

  if (albums === null) {
    return null;
  };

  function handleSelectAlbum(albumIndex: Album | null) {
    setCurrentAlbum(albumIndex);
  };

  const MappedAlbums = () => (
    <div>
      {Object.keys(albums).map((key: string) => (
        <MasonGalleryAlbumItem
          album={key as Album}
          photos={albums[key as Album]}
          handleSelectAlbum={() => handleSelectAlbum(key as Album)}
        />
      ))}
    </div>
  );

  return (
    <div>
      <MappedAlbums />
      <ProjectDescriptions
        currentView={currentView}
      />
    </div>
  );
};

/**
 * This will alternate between different descriptive texts based on
 * what the `currentView` state is within `<MasonGalleryController />` 
 * @param param0 
 * @returns 
 */
function ProjectDescriptions({ currentView }: { currentView: ControllerViews }) {
  return (
    <div>
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>
    </div>
  )
}