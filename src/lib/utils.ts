import { type ClassValue, clsx } from "clsx"
import { readdirSync } from "fs";
import { twMerge } from "tailwind-merge"

/**
 * Combines various tailwind utility classes and CLSX functionality
 * @param inputs - tailwind utility classes and CLSX functionality
 * @returns 
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Capitalizes the first letter of everyword in a string
 * @param str 
 * @returns 
 */
export function capitalizeEach(str: string | null): string | null {
  if (!str) return null;

  const words = str.split(" ");
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(" ");
}

/**
 * Capitalizes just the first letter of a string
 * @param str 
 * @returns 
 */
export function capitalizeFirst(str: string): string {
  return str && str.charAt(0).toUpperCase() + str.slice(1);
}

