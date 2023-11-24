import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-wrap gap-12 p-4 max-w-screen-xl">
      <nav>
        <Link href="/units">Units</Link>
        <Link href="references/weapons">weapons</Link>
      </nav>
    </main>
  );
};

export default page;
