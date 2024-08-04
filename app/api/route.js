import connectToDatabase from "@/lib/connectToDB";
import Product from "@/model/Product";
import { NextResponse } from "next/server";

export async function GET(req) {
  console.log("request called", Date.now());
  await connectToDatabase();
  const products = await Product.find();

  return NextResponse.json({
    products,
  });
}
