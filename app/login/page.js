"use client";

import Image from "next/image";
import ProductImage from "@/public/images/produc.jpg";
import Link from "next/link";
import { loginUser } from "@/actions/authActions";
import { useState } from "react";
import { notify } from "@/lib/notify";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { id, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  }

  async function handleLogin(e) {
    setLoading(true);
    e.preventDefault();
    const res = await loginUser(formData);

    if (res.status === "success") {
      setFormData({
        email: "",
        password: "",
      });
    } else {
      res?.validation && setError(res.validation);
    }
    notify(
      res.status,
      "Logged In Successfully",
      res.error || "Something Went Wrong "
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
              Sign in to your account
            </h1>
            <p className="text-muted-foreground mt-2">
              Enter your email and password below to access your account.
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleLogin}>
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
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                required
                minLength={6}
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-primary focus:border-primary sm:text-sm focus:outline-primary"
              />
              {error?.email && (
                <p className="text-red-500 ps-1 text-sm">{error.email}</p>
              )}
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-foreground"
                >
                  Password
                </label>
                <Link
                  href="#"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                required
                minLength={8}
                onChange={handleChange}
                value={formData.password}
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-primary focus:border-primary sm:text-sm focus:outline-primary"
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
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-md font-medium hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Sign in
            </button>
          </form>
          <p className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-primary hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
