import connectToDatabase from "@/lib/connectToDB";
import Product from "@/model/Product";
import { NextResponse } from "next/server";

export async function GET(req) {
  console.log("request working");
  await connectToDatabase();
  const products = await Product.find();

  NextResponse.json({
    products,
  });
}
