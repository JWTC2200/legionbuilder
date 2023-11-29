"use client";

import React, { useState } from "react";
import Link from "next/link";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

const page = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string>("");

  const auth = getAuth();
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
    const res = await signInWithEmailAndPassword(auth, email, password);
    if (res) {
      router.push("/");
    } else {
      setError("Login failed");
    }
  };

  return (
    <main className="flex flex-col items-center text-stone-50 p-4 max-w-sm">
      <h2 className="font-graduate text-xl font-bold mb-8">LOGIN:</h2>
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
          className="mb-4 text-stone-900"
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
          className="mb-4 text-stone-900"
        />
        <button
          type="submit"
          className="border-4 border-green-950 rounded-full px-4 py-1 dataslate_background text-green-950 font-semibold font-graduate hover:border-cyan-700 hover:text-cyan-700"
        >
          Login
        </button>
      </form>
      <p className="mt-4">
        If you don't have an account please register{" "}
        <Link href="/account/register" className="text-cyan-700">
          here!
        </Link>
      </p>
      <p className="mt-4">
        An account is NOT required to use the builder. Only if you want to save
        more than one list or create links for sharing.{" "}
      </p>
    </main>
  );
};

export default page;
