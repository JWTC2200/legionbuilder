"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../firebase/auth/AuthContext";
import { deleteUserAccount } from "../firebase/firestore/deleteUser";

const page = () => {
  const { user } = useAuthContext();
  const router = useRouter();

  const handleDelete = () => {
    deleteUserAccount();
  };

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  return (
    <div>
      <h2>{user?.email}</h2>
      <button
        onClick={handleDelete}
        className="mt-4 px-4 py-2 text-2xl hover:text-tertiary-700 hover:border-tertiary-700 active:text-tertiary-600 text-bold border-4 rounded-full"
      >
        Delete account
      </button>
    </div>
  );
};

export default page;
