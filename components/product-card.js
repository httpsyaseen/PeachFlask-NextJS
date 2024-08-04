import ScrollAnimation from "./scroll-animation";
import Image from "next/image";
import productImage from "@/public/images/produc.jpg";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <ScrollAnimation animationClass="animate-zoomIn">
      <div className=" text-center text-primary md:shadow-xl max-w-[240px] md:rounded-md  ">
        {/* <Link href={"/products/slug"}> */}
        <Image
          src={productImage}
          alt="hehe"
          height="192"
          width="202"
          className="object-cover w-full h-48 md:rounded-t-md"
        />
        <div className="pb-4 pt-3 ">
          <h2 className="text-center text-md md:text-xl font-bold mb-0 md:mb-2 ">
            {product.name}
          </h2>
          <p className="text-center text-sm md:text-lg font-semibold mb-4">
            ${product.price}
          </p>
          <div className="hidden md:flex flex-col md:flex-row justify-center gap-3">
            <Link
              href="#"
              className="bg-primary text-light py-2 text-center rounded flex justify-center px-2"
            >
              Add to Cart
            </Link>
            <Link
              href="#"
              className="bg-primary text-light py-2 text-center rounded flex justify-center px-2"
            >
              Buy Now
            </Link>
          </div>
          <Link
            href={"/"}
            className="bg-primary text-light flex rounded-md items-center justify-center mx-1 py-[2px] md:hidden self-end"
          >
            Add to cart
          </Link>
        </div>
        {/* </Link> */}
      </div>
    </ScrollAnimation>
  );
}
