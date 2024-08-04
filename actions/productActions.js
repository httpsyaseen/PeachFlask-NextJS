import { dbHandler } from "@/lib/utils";
import Product from "@/model/Product";
import { cache } from "react";

export const getAllProdcuts = cache(async () => {
  return dbHandler(async () => {
    console.log("Products Fetched Time", Date.now() / 1000);
    const data = await Product.find();
    return {
      data,
    };
  });
});
