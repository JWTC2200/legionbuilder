"use client";

import React, { useState } from "react";
import signUp from "@/app/firebase/auth/signup";
import { useRouter } from "next/navigation";

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
    <main className="flex flex-col items-center text-secondary-50 p-4 max-w-md">
      <h2 className="font-graduate text-xl font-bold mb-8">REGISTER:</h2>
      {error ? <div className="text-red-500 mb-4">{error}</div> : null}
      <form onSubmit={handleSignIn} className="flex flex-col items-start">
        <label htmlFor="email" className="font-graduate">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 text-secondary-900"
        />
        <label htmlFor="password" className="font-graduate">
          Password:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 text-secondary-900"
        />
        <button
          type="submit"
          className="border-4 border-primary-950 rounded-full px-4 py-1 dataslate_background text-primary-950 font-semibold font-graduate hover:border-tertiary-700 hover:text-tertiary-700"
        >
          Register
        </button>
      </form>
      <p className="text-red-700 mt-4">
        Your email will be kept private and will not be shared or used for any
        purpose other than to log into your account.
      </p>
      <p className="text-red-700 mt-4">
        Another reminder that if you only need to make a single list then there
        really is no need to sign up. Your list will still be stored on your
        devices localstorage for later use.
      </p>
    </main>
  );
};

export default page;
