import connectToDatabase from "@/lib/connectToDB";
import Product from "@/model/Product";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectToDatabase();
  const product = await Product.create(await req.json());

  return NextResponse.json({
    status: "success",
    data: product,
  });
}

export async function GET(req) {
  await connectToDatabase();
  const products = await Product.find();
  return NextResponse.json({
    products,
  });
}
