"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, ShoppingBag, UserRound, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 ">
      <nav className="bg-primary shadow-2xl text-md text-light flex w-100 justify-between font-semibold  items-center px-5 min-h-20 relative">
        <>
          <div className="flex-shrink-1 items-center py-2">
            <Image
              src={"/images/logo.png"}
              alt="Brand"
              width={"100"}
              height={24}
              className="rounded-md"
              priority
            />
          </div>

          <div className="hidden md:flex justify-center space-x-7">
            {[
              { name: "Home", link: "/" },
              { name: "Products", link: "/products" },
              { name: "Services", link: "/services" },
              { name: "About", link: "/about" },
            ].map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.link}
                  className="uppercase p-2 active:text-black "
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden  md:flex space-x-5">
            <div className="flex space-x-2">
              <span className="relative">
                <ShoppingBag />
                <span className="absolute -top-2 -right-2 rounded-full w-[19px]  h-5 text-center  bg-light text-primary">
                  2
                </span>
              </span>
              <Link href={"/cart"}>Cart</Link>
            </div>
            <div className="flex space-x-2">
              <UserRound />

              <Link href={"/login"}>Login</Link>
            </div>
          </div>

          <div className="md:hidden ">
            <Menu onClick={() => setIsOpen(!isOpen)} size={30} />
            <div
              className={`absolute min-h-screen w-screen ${
                isOpen ? "flex" : "hidden "
              }  flex-col inset-0 bg-primary justify-center items-center py-3 px-5  space-y-4 text-xl`}
              id="menu"
            >
              <span
                className="fixed top-5 right-0 p-6"
                onClick={() => setIsOpen(!isOpen)}
              >
                <X size={40} />
              </span>
              {[
                { name: "Home", link: "/" },
                { name: "Products", link: "/products" },
                { name: "Services", link: "/services" },
                { name: "About", link: "/about" },
                // { name: "Cart", link: "/cart", icon: <ShoppingBag /> },
                // { name: "Login", link: "/login", icon: <UserRound /> },
              ].map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.link}
                    className="hover:border-b-2 hover:border-b-primary"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {item.icon ? (
                      <span className="flex space-x-2">
                        <span className="relative">
                          {item.icon}
                          {item.name === "Cart" && (
                            <span className="absolute -top-2 -right-2 rounded-full px-[4px]  text-center  bg-light text-primary text-sm">
                              2
                            </span>
                          )}
                        </span>
                        <Link href={"/cart"}>{item.name}</Link>
                      </span>
                    ) : (
                      item.name
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      </nav>
    </header>
  );
}
