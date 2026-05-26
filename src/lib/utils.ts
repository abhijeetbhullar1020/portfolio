import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

export const ACCENT = "#FF3400";
