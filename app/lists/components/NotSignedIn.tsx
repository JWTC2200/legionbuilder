import React from "react";
import Link from "next/link";

const NotSignedIn = () => {
  return (
    <div className="text-center mt-4">
      <Link
        href={"/account/login"}
        className="underline text-lime-400 hover:text-lime-100"
      >
        Log in
      </Link>{" "}
      or create an{" "}
      <Link
        href={"/account/register"}
        className="underline text-lime-400 hover:text-lime-100"
      >
        account
      </Link>{" "}
      to save lists!
    </div>
  );
};

export default NotSignedIn;
