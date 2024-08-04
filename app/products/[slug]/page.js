import Image from "next/image";
import ProductImage from "@/public/images/produc.jpg";

export default function Page({ params }) {
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="grid gap-4 md:gap-8">
        <Image
          src={ProductImage}
          alt="Product Image"
          width={600}
          height={600}
          className="aspect-square object-cover border w-full rounded-lg overflow-hidden"
        />
        <div className="hidden md:flex gap-4 items-start">
          <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
            <Image
              src={ProductImage}
              alt="Preview thumbnail"
              width={100}
              height={100}
              className="aspect-square object-cover"
            />
            <span className="sr-only">View Image 1</span>
          </button>
          <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
            <Image
              src={ProductImage}
              alt="Preview thumbnail"
              width={100}
              height={100}
              className="aspect-square object-cover"
            />
            <span className="sr-only">View Image 2</span>
          </button>
          <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
            <Image
              src={ProductImage}
              alt="Preview thumbnail"
              width={100}
              height={100}
              className="aspect-square object-cover"
            />
            <span className="sr-only">View Image 3</span>
          </button>
          <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
            <Image
              src={ProductImage}
              alt="Preview thumbnail"
              width={100}
              height={100}
              className="aspect-square object-cover"
            />
            <span className="sr-only">View Image 4</span>
          </button>
        </div>
      </div>
      <div className="grid gap-6 pt-6">
        <div className="grid gap-4">
          <h1 className="font-bold text-3xl lg:text-4xl">Acme Prism T-Shirt</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-0.5">
              <StarIcon className="w-5 h-5 fill-[#ff812e]" />
              <StarIcon className="w-5 h-5 fill-[#ff812e]" />
              <StarIcon className="w-5 h-5 fill-[#ff812e]" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            </div>
            <span className="text-sm text-muted-foreground">(12 reviews)</span>
          </div>
          <p className="text-2xl font-bold">$49.99</p>
          <div className="grid gap-2">
            <label htmlFor="size" className="text-base font-semibold">
              Size
            </label>
            <div id="size" className="flex items-center gap-2">
              <label
                htmlFor="size-s"
                className="border cursor-pointer rounded-md  flex items-center justify-center gap-2 bg-white hover:bg-gray-100 focus:outline-primary"
              >
                <input
                  type="radio"
                  id="size-s"
                  name="size"
                  value="s"
                  className="hidden peer"
                />
                <span className="peer-checked:border-primary border-2 w-8 h-8 flex items-center justify-center rounded-md border-light">
                  <span className="text-sm">S</span>
                </span>
              </label>
              <label
                htmlFor="size-m"
                className="border cursor-pointer rounded-md  flex items-center justify-center gap-2 bg-white hover:bg-gray-100 focus:outline-primary"
              >
                <input
                  type="radio"
                  id="size-m"
                  name="size"
                  value="m"
                  className="hidden peer"
                />
                <span className="peer-checked:border-primary border-2 w-8 h-8 flex items-center justify-center rounded-md border-light">
                  <span className="text-sm">M</span>
                </span>
              </label>
              <label
                htmlFor="size-l"
                className="border cursor-pointer rounded-md flex items-center justify-center gap-2 bg-white hover:bg-gray-100 focus:outline-primary"
              >
                <input
                  type="radio"
                  id="size-l"
                  name="size"
                  value="l"
                  className="hidden peer"
                />
                <span className="peer-checked:border-primary border-2 w-8 h-8 flex items-center justify-center rounded-md border-light">
                  <span className="text-sm">L</span>
                </span>
              </label>
              <label
                htmlFor="size-xl"
                className="border cursor-pointer rounded-md  flex items-center justify-center gap-2 bg-white hover:bg-gray-100 focus:outline-primary"
              >
                <input
                  type="radio"
                  id="size-xl"
                  name="size"
                  value="xl"
                  className="hidden peer"
                />
                <span className="peer-checked:border-primary border-2 w-8 h-8 flex items-center justify-center rounded-md border-light">
                  <span className="text-sm">XL</span>
                </span>
              </label>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              Add to Cart
            </button>
            <button className="g-button">
              <HeartIcon className="w-4 h-4 mr-2" />
              Add to Wishlist
            </button>
          </div>
        </div>
        <hr />
        <div className="grid gap-6 ">
          <div>
            <h2 className="text-2xl font-bold">Product Description</h2>
            <p className="text-muted-foreground">
              The Acme Prism T-Shirt is a stylish and comfortable addition to
              your wardrobe. Crafted with a blend of 60% combed ringspun cotton
              and 40% polyester, this tee offers a soft and breathable feel. The
              unique prism-inspired design adds a modern touch, making it a
              versatile choice for casual or semi-formal occasions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ff812e"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
