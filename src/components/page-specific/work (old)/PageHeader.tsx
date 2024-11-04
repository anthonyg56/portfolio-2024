import { Button } from "@/components/ui/button"
import TextGradient from "@/components/ui/misc/GradientText"
import { H1, H4 } from "@/components/ui/typography"
import { OptionalURL, ProjectTag } from "@/lib/types"
import { capitalizeFirst } from "@/lib/utils"
import { Link as LinkIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type Props = {
  name: string,
  launched: boolean,
  liveUrl: OptionalURL,
  githubUrl: OptionalURL,
  tags: ProjectTag | ProjectTag[],
  headerImage: {
    uri: string,
    alt: string,
  },
};

export default function PageHeader({ githubUrl, launched, liveUrl, name, tags, headerImage }: Props) {
  const capitalizeName = capitalizeFirst(name);

  return (
    <div className="flex flex-row items-center overflow-hidden max-h-[300px] h-[300px]">
      <Image
        src={`/cover/${headerImage.uri}`}
        alt={headerImage.alt}
        width={0}
        height={0}
        unoptimized
        className="absolute w-full h-full object-cover"
      />
      {/* Title & Category */}
      <div className="flex flex-col lg:flex-row py gap-x-6 pt-6 relative pl-5" id="home">
        <H1 classNames="hidden lg:block text-center lg:text-start lg:text-[75px]">
          <TextGradient>
            {capitalizeName}
          </TextGradient>
        </H1>
        <H4 classNames="text-white max-lg:translate-y-4 max-lg:text-center max-lg:pb-0 lg:absolute pl-6px lg:pl-1 xl:pl-[6px] font-bold text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[30px] 3xl:text-[35px]">
          {typeof tags === "string" ? tags : tags[0]}
        </H4>
        <H1 classNames="text-center lg:text-start lg:text-[75px] lg:hidden">
          <TextGradient>
            {capitalizeName}
          </TextGradient>
        </H1>
      </div>

      {/* Links */}
      <div className="flex flex-row translate-y-4 ml-auto gap-x-3 pr-5">
        {githubUrl && (
          <Link href={githubUrl}>
            <Button className="text-xl flex flex-row items-center justify-center gap-x-1" variant="outline">
              Github Repo <LinkIcon />
            </Button>
          </Link>
        )}
        {launched && liveUrl ? (
          <Link href={liveUrl}>
            <Button className="text-xl flex flex-row items-center justify-center gap-x-1" variant="outline">
              Live Website <LinkIcon />
            </Button>
          </Link>
        ) : (
          <Button>
            Live Preview Unavailable
          </Button>
        )}
      </div>
    </div>
  );
};