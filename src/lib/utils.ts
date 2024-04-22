import { type ClassValue, clsx } from "clsx"
import qs from "qs"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
