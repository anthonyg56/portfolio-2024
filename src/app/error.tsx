"use client"

import Link from "next/link"
import Button from "@/components/ui/button"

type Props = {
  error: Error & { digest?: string },
  reset: () => void,
}

export default function error({ error, reset }: Props) {
  console.log(error)
  return (
    <div>
      Uh oh, its seems like there was an error
      <Link href="/">
        <Button>
          Go Back Home
        </Button>
      </Link>
    </div>
  )
}