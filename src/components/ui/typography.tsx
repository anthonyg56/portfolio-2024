
import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import { ClassValue } from "clsx"

export function H1({ children, classNames }: { children: React.ReactNode, classNames?: ClassValue }) {
  return (
    <h1 className={cn(["scroll-m-20 text-[60px] md:text-[70px] xl:text-[90px] 2xl:text-[118px] 3xl:text-[138px] font-extrabold tracking-tight leading-[1.4] text-primary-text", classNames])}>
      {children}
    </h1>
  )
}

export function H2({ children, classNames }: { children: React.ReactNode, classNames?: ClassValue }) {
  return (
    <h2 className={cn(["scroll-m-20 pb-2 text-[25px] md:text-[38px] lg:text-[50px] font-bold tracking-tight first:mt-0 border-b-0 leading-[1.4] text-primary-text", classNames])}>
      {children}
    </h2>
  )
}

export function H3({ children, classNames }: { children: React.ReactNode, classNames?: ClassValue }) {
  return (
    <h3 className={cn(["scroll-m-20 text-[20px] md:text-[22px] lg:text-[26px] font-bold tracking-tight leading-[1.4] text-primary-text", classNames])}>
      {children}
    </h3>
  )
}

export function H4({ children, classNames }: { children: React.ReactNode, classNames?: ClassValue }) {
  return (
    <h4 className={cn(["scroll-m-20 text-[16px] md:text-[20px] lg:text-[22px] font-medium tracking-tight leading-[1.4] text-primary-text", classNames])}>
      {children}
    </h4>
  )
}

const paragraphVariants = cva(
  "[&:not(:first-child)]:mt-3 leading-[1.4] text-primary-text",
  {
    variants: {
      size: {
        lg:
          "font-semibold text-[20px]",
        md:
          "font-medium text-[16px]",
        rg:
          "font-normal text-[16px]",
        sm:
          "font-normal text-[14px]",
        xs:
          "font-normal text-[12px]"
      },
    },
    defaultVariants: {
      size: "rg"
    }
  }
)

export function P({ children, className, size }: { children: React.ReactNode, className?: string } & VariantProps<typeof paragraphVariants>) {
  return (
    <p className={cn(paragraphVariants({ size, className }))}>
      {children}
    </p>
  )
}
