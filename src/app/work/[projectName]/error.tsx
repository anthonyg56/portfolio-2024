"use client"

import { H1 } from "@/components/ui/typography"

type Props = {
  error: Error & { digest?: string },
  reset: () => void,
}

export default function error({ error, reset }: Props) {
  return (
    <div>
      <H1>Project Not Found</H1>
    </div>
  )
}