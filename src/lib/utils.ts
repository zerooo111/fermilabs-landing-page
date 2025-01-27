import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names using clsx and tailwind-merge for optimal Tailwind class handling
 * @param inputs - Array of class values (strings, objects, arrays)
 * @returns Optimized merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
