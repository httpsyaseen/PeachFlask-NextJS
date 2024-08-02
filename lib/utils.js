import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import connectToDatabase from "@/lib/connectToDB";

export async function dbHandler(fn, data) {
  try {
    await connectToDatabase();
    return await fn(data);
  } catch (error) {
    return {
      status: "error",
      error: error.message || "Something went wrong",
    };
  }
}

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
