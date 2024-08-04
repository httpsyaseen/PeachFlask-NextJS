import MainImage from "@/public/images/b3.jpg";
import Feature from "@/public/images/b2.jpg";
import product from "@/public/images/produc.jpg";
import Link from "next/link";
import ScrollAnimation from "@/components/scroll-animation";
import Image from "next/image";
import {
  Facebook,
  Gift,
  Headset,
  Instagram,
  Linkedin,
  Truck,
  Twitter,
} from "lucide-react";

const data = [
  {
    icon: <Truck size={50} />,
    title: "Nation Wide Delivery",
    description: "Fast and reliable nationwide delivery for your convenience.",
  },
  {
    icon: <Headset size={50} />,
    title: "Quick Customer Support",
    description: "Responsive and friendly customer support at your fingertips.",
  },
  {
    icon: <Gift size={50} />,
    title: "Gift Shopping Delight",
    description:
      "Effortless gift shopping with a delightful selection and stress-free returns if needed.",
  },
];

export default async function Home() {
  return (
    <>
      <main className="scroll-smooth">
        {/* MAIN */}
        <section className="flex-1 relative ">
          <Image
            src={MainImage}
            alt="Hehe"
            className="opacity-90 md:max-h-[600px] lg:max-h-[700px] lg:object-cover animate-fadeIn"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center px-4 space-y-3">
            <h1 className="text-2xl  md:text-6xl font-bold text-primary/80 text-center ">
              Welcome to Peach Flask
            </h1>
            <p className="flex text-sm  md:text-xl text-center text-light">
              Experience hydration on the go with our sleek, eco-friendly bottle
              designed for everyday adventures
            </p>
          </div>
        </section>

        {/* PRODUCCTS */}
        <section className="container mx-auto mt-6">
          <div className="space-y-3  flex justify-center items-center flex-col text-center">
            <h2 className="heading ">Featured Products</h2>
            <p className="description">
              Discover our curated selection of high-quality products that will
              elevate your everyday life.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-6 gap-5 justify-center items-center mt-6">
            {[1, 2, 3, 4].map((_, i) => {
              return (
                <>
                  <ScrollAnimation key={i} animationClass="animate-zoomIn">
                    <div className=" text-primary pb-2 rounded-lg shadow-lg max-w-[280px] ">
                      <div className="relative w-full h-48 mb-4">
                        <Image
                          src={product}
                          alt="hehe"
                          layout="fill"
                          objectFit="cover"
                          className="rounded-t-lg"
                        />
                      </div>
                      <div className="p-4 ">
                        <h2 className="text-xl font-bold mb-2">Peach Bottle</h2>
                        <p className="text-lg font-semibold mb-4">$12</p>
                        <div className="flex flex-col md:flex-row justify-center gap-3 min-w-52">
                          <Link
                            href="#"
                            className="bg-primary text-light py-2 px-4 rounded text-center"
                          >
                            Add to Cart
                          </Link>
                          <Link
                            href="#"
                            className="bg-primary text-light py-2 px-4 rounded text-center"
                          >
                            Buy Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                </>
              );
            })}
          </div>
        </section>

        {/* PROMISES */}
        <div className="border-y border-primary  my-12">
          <section className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-6  mt-6 py-12 px-4 md:px-0">
              {data.map((item, i) => {
                return (
                  <>
                    <div className="flex flex-col gap-3 items-center" key={i}>
                      {item.icon}
                      <h2 className="text-3xl text-center">{item.title}</h2>
                      <p className="text-xl text-center">{item.description}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </section>
        </div>

        {/* FEATURE  */}
        <section className="w-full py-6 md:py-12 lg:py-16">
          <div className="container mx-auto grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10 animate-zoomIn">
            <Image
              src={Feature}
              width="550"
              height="550"
              alt="Acme Wireless Headphones"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <div className="flex flex-col items-start justify-center space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm bg-primary text-black">
                Featured Product
              </div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Acme Wireless Headphones
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Experience unparalleled audio quality and comfort with our
                state-of-the-art wireless headphones. Designed for the modern
                lifestyle, these headphones deliver exceptional performance and
                style.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Buy Now
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="container mx-auto border-t my-6 py-12 border-primary">
          <div className="space-y-3   flex justify-center items-center flex-col text-center">
            <h2 className="heading mx-2">What Our Customers Say</h2>
            <p className="description">
              Hear from our satisfied customers about their experience with
              Peach Flask.
            </p>
          </div>
          <div className=" grid md:grid-cols-3 gap-6  mt-6 py-12 px-12 md:px-0">
            {[1, 2, 3].map((_) => {
              return (
                <>
                  <div className="flex flex-col text-center gap-5 border-[1px] shadow-lg border-primary rounded-md p-8">
                    <blockquote className="space-y-2">
                      <p className="md:text-lg font-medium">
                        Incredible products and service!
                      </p>
                      <p className="text-muted-foreground">
                        {`I've been shopping with Acme Ecommerce for years and I'm always
              impressed by the quality of their products and the exceptional
              customer service. Highly recommended!`}
                      </p>
                    </blockquote>
                    <div className="flex items-center space-x-2 justify-center">
                      <div>
                        <p className="text-sm font-medium">John Doe</p>
                        <p className="text-xs text-muted-foreground">
                          Customer
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>

        {/* FOLLOW  */}
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 border-y border-primary "
        >
          <div className="container mx-auto  px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm bg-primary text-light">
                  Stay Connected
                </div>
                <h2 className="lg:leading-tighter heading ">
                  Join Our Newsletter
                </h2>
                <p className="description">
                  Be the first to hear about our latest products, exclusive
                  offers, and industry insights. Sign up for our newsletter
                  today.
                </p>
                <form className="flex gap-2 flex-col md:flex-row space-y-2 md:space-y-0  ">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="max-w-lg flex-1 py-2  ps-2 md:px-4 rounded-md focus:outline-primary "
                  />
                  <button
                    type="submit"
                    className="bg-primary text-light px-4 rounded-md py-2 "
                  >
                    Subscribe
                  </button>
                </form>
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm bg-primary text-light">
                  Connect with Us
                </div>
                <h2 className="heading">Follow Us on Social</h2>
                <p className="description">
                  Stay up-to-date with the latest news, product updates, and
                  special offers by following us on social media.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                    prefetch={false}
                  >
                    <Twitter className="h-6 w-6" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                    prefetch={false}
                  >
                    <Instagram className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                    prefetch={false}
                  >
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                    prefetch={false}
                  >
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
