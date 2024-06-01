
import { cn } from "@/lib/utils"
import { ClassValue } from "clsx"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  classNames?: ClassValue,
}

export default function Button({ classNames, children, ...props }: Props) {
  return (
    <button
      className={cn(["bg-transparent h-9 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm text-primary disabled:pointer-events-none disabled:opacity-50", classNames])}
      {...props}
    >
      {children}
    </button>
  )
}