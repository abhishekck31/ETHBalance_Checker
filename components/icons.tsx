"use client"

import type * as React from "react"
import Image from "next/image"
import { Sun, Moon, Loader2 } from "lucide-react"

/**
 * Central place for any icons (Lucide or custom) that you want to
 * reuse throughout the project.  Everything is exported as a single
 * `Icons` object so you can do:
 *
 *   import { Icons } from "@/components/icons"
 *   <Icons.sun className="w-5 h-5" />
 *
 * Feel free to add more as your UI grows.
 */
export const Icons = {
  /** Sun icon for light-mode */
  sun: (props: React.SVGProps<SVGSVGElement>) => <Sun {...props} />,
  /** Moon icon for dark-mode */
  moon: (props: React.SVGProps<SVGSVGElement>) => <Moon {...props} />,
  /** Spinning loader (uses Lucide's Loader2) */
  spinner: (props: React.SVGProps<SVGSVGElement>) => (
    <Loader2 {...props} className={`animate-spin ${props.className ?? ""}`} />
  ),
  /** Weltivation logo – adjust width/height with Tailwind classes */
  logo: ({ className, ...rest }: Omit<React.ComponentProps<typeof Image>, "src" | "alt">) => (
    <Image
      src="/images/weltivation-logo.png"
      alt="Weltivation"
      width={24}
      height={24}
      className={className}
      {...rest}
    />
  ),
}
