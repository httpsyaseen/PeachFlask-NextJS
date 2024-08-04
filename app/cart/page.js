"use client";

import { useState } from "react";
import Image from "next/image";
import ProductImage from "@/public/images/produc.jpg";
import Link from "next/link";

export default function Page() {
  const [cart, setCart] = useState([
    {
      id: 1,
      image: "/placeholder.svg",
      title: "Cozy Blanket",
      price: 29.99,
      quantity: 1,
    },
    {
      id: 2,
      image: "/placeholder.svg",
      title: "Autumn Mug",
      price: 12.99,
      quantity: 2,
    },
    {
      id: 3,
      image: "/placeholder.svg",
      title: "Fall Fragrance Candle",
      price: 16.99,
      quantity: 1,
    },
    {
      id: 3,
      image: "/placeholder.svg",
      title: "Fall Fragrance Candle",
      price: 16.99,
      quantity: 1,
    },
    {
      id: 3,
      image: "/placeholder.svg",
      title: "Fall Fragrance Candle",
      price: 16.99,
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (id, quantity) => {
    setCart(
      cart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.1;
  const total = subtotal - discount;

  return (
    <div className="container mx-auto px-4 md:px-16 py-12 ">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-6 md:gap-12">
        <div className="grid gap-8">
          <h1 className="text-2xl font-bold md:px-12">Your Cart</h1>
          <div className="grid gap-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-2 md:gap-6 md:justify-center md:px-12"
              >
                <Image
                  src={ProductImage}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="rounded-lg object-cover"
                />
                <div className="flex-1 flex flex-col gap-1">
                  <h3 className="font-semibold text-lg md:text-xl">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                    disabled={item.quantity === 1}
                    className="p-1 bg-gray-200 rounded-md hover:bg-gray-300"
                  >
                    <MinusIcon className="h-4 w-4" />
                  </button>
                  <span className="px-2 text-sm md:text-base">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                    className="p-1 bg-gray-200 rounded-md hover:bg-gray-300"
                  >
                    <PlusIcon className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="p-1 bg-gray-200 rounded-md hover:bg-gray-300"
                  >
                    <Trash2Icon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-light border-primary border rounded-lg p-6 max-h-80">
          <div className="grid gap-4">
            <h2 className="text-lg font-semibold">Order Summary</h2>
            <div className="flex items-center justify-between text-sm md:text-base">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-sm md:text-base">
              <span>Discount</span>
              <span className="text-green-500">-${discount.toFixed(2)}</span>
            </div>
            <hr className="my-2 border-gray-400" />
            <div className="flex items-center justify-between text-sm md:text-base">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>
          </div>
          <button className="w-full mt-4 py-2 bg-primary text-white hover:bg-primary rounded-lg text-sm md:text-base">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

function MinusIcon(props) {
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
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function Trash2Icon(props) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
    </svg>
  );
}
