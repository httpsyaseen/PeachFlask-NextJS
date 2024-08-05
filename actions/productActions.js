"use server";
// import { dbHandler } from "@/lib/utils";
// import Product from "@/model/Product";
// import { cache } from "react";
import { revalidatePath } from "next/cache";

// export const getAllProdcuts = cache(async () => {
//   return dbHandler(async () => {
//     console.log("Products Fetched Time", Date.now() / 1000);
//     const data = await Product.find();
//     return {
//       data,
//     };
//   });
// });

export async function revalidateProducts() {
  revalidatePath("/products");
}
