"use client";

import Image from "next/image";
import ProductImage from "@/public/images/produc.jpg";
import Link from "next/link";
import { signupUser } from "@/actions/authActions";
import { useState } from "react";
import { notify } from "@/lib/notify";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const {
      status = null,
      error = null,
      validation = null,
    } = (await signupUser(formData)) || {};

    validation && setError(validation);

    if (status === "success") {
      setFormData({
        name: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
      });
      setError(null);
    }

    notify(
      status,
      "User created successfully",
      error || "Something went wrong"
    );
    setLoading(false);
  }

  return (
    <div className="flex min-h-[91dvh]">
      <div className="hidden lg:block w-7/12 relative">
        <Image
          src={ProductImage}
          alt="Login Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </div>
      <div className="w-full lg:w-5/12 flex items-center justify-center bg-background px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground">
              Create an account
            </h1>
            <p className="text-muted-foreground mt-2">
              Fill in the details below to create a new account.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-primary focus:border-primary focus:outline-primary sm:text-sm"
              />
              {error?.name && (
                <p className="text-red-500 ps-1 text-sm">{error.name}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-primary focus:border-primary focus:outline-primary sm:text-sm"
              />
              {error?.email && (
                <p className="text-red-500 ps-1 text-sm">{error.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-foreground"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-primary focus:border-primary focus:outline-primary sm:text-sm"
              />
              {error?.password && (
                <div>
                  <p className="text-red-500  ps-1 text-sm">Pasword must be:</p>
                  {error.password.map((err) => (
                    <>
                      <p className="text-red-500 ps-3 text-sm">{`- ${err}`}</p>
                    </>
                  ))}
                </div>
              )}
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-foreground"
              >
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="tel"
                placeholder="123-456-7890"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-primary focus:border-primary focus:outline-primary sm:text-sm"
              />
              {error?.phoneNumber && (
                <p className="text-red-500 ps-1 text-sm">{error.phoneNumber}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-foreground"
              >
                Address
              </label>
              <input
                id="address"
                type="text"
                placeholder="123 Main St"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-primary focus:border-primary focus:outline-primary sm:text-sm"
              />
              {error?.address && (
                <p className="text-red-500 ps-1 text-sm">{error.address}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-md font-medium hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Sign up
            </button>
          </form>
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-primary hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
