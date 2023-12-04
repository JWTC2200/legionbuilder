import React from "react";
import Link from "next/link";

const NotSignedIn = () => {
  return (
    <>
      <Link href={"/account/login"} className="underline">
        Log in
      </Link>{" "}
      or create an{" "}
      <Link href={"/account/register"} className="underline">
        account
      </Link>{" "}
      to save lists!
    </>
  );
};

export default NotSignedIn;
