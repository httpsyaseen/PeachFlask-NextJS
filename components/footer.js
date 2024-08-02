import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" p-6 md:py-12 w-full border-t border-primary sticky ">
      <div className="container mx-auto max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        <div className="grid gap-1">
          <h3 className="font-semibold">Shop</h3>
          <Link href="#" prefetch={false}>
            New Arrivals
          </Link>
          <Link href="#" prefetch={false}>
            Featured
          </Link>
          <Link href="#" prefetch={false}>
            Sale
          </Link>
          <Link href="#" prefetch={false}>
            Collections
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">About</h3>
          <Link href="#" prefetch={false}>
            Our Story
          </Link>
          <Link href="#" prefetch={false}>
            Sustainability
          </Link>
          <Link href="#" prefetch={false}>
            Careers
          </Link>
          <Link href="#" prefetch={false}>
            Press
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Customer Service</h3>
          <Link href="#" prefetch={false}>
            Shipping
          </Link>
          <Link href="#" prefetch={false}>
            Returns
          </Link>
          <Link href="#" prefetch={false}>
            FAQs
          </Link>
          <Link href="#" prefetch={false}>
            Contact Us
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Legal</h3>
          <Link href="#" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" prefetch={false}>
            Cookie Policy
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Follow Us</h3>
          <Link href="#" prefetch={false}>
            Facebook
          </Link>
          <Link href="#" prefetch={false}>
            Twitter
          </Link>
          <Link href="#" prefetch={false}>
            Instagram
          </Link>
          <Link href="#" prefetch={false}>
            Pinterest
          </Link>
        </div>
      </div>
      <div className="container mx-auto max-w-7xl mt-8 text-center text-xs text-muted-foreground">
        &copy; 2024 Peach Flask. All rights reserved.
      </div>
    </footer>
  );
}
