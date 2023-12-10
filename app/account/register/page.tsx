"use client";

import React, { useState } from "react";
import Main from "@/app/components/Main";
import signUp from "@/app/firebase/auth/signup";
import { useRouter } from "next/navigation";
import { BreadCrumbs, Crumb } from "@/app/components/BreadCrumbs";

const page = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string>("");

  const router = useRouter();

  const handleSignIn = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Email required!");
    }
    if (!password) {
      setError("Password required!");
      return;
    }

    setError("");
    const { result, error } = await signUp(email, password);
    if (error) {
      setError("error");
      return console.log(error);
    }
    console.log(result);
    return router.push("/");
  };

  return (
    <Main className="flex flex-col gap-6 items-center">
      <section className="flex flex-col gap-12 p-4 w-full lg:w-1/2">
        <BreadCrumbs>
          {/* <Crumb href="/account">Account</Crumb> */}
          <Crumb href="/account/register">Register</Crumb>
        </BreadCrumbs>

        {error ? <div className="text-red-500 mb-4">{error}</div> : null}

        <form
          onSubmit={handleSignIn}
          className="flex flex-col gap-6 items-start"
        >
          <div className="flex items-center w-full">
            <label htmlFor="email" className="font-graduate w-1/4">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-secondary-200 bg-secondary-700 w-3/4 p-1 px-2"
            />
          </div>
          <div className="flex items-center w-full">
            <label htmlFor="password" className="font-graduate w-1/4">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-secondary-200 bg-secondary-700 w-3/4 p-1 px-2"
            />
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="bg-primary-500 clip-path-halfagon-sm py-1 px-4 text-primary-100 font-semibold font-graduate hover:bg-primary-500 hover:text-primary-500 ml-1/4"
            >
              Register
            </button>
          </div>
        </form>
        <p className="p-4 bg-secondary-800 text-secondary-300 clip-path-octagon-md italic">
          Your email will be kept private and will not be shared or used for any
          purpose other than to log into your account.
        </p>
      </section>
    </Main>
  );
};

export default page;
