import Link from "next/link";
import { TfiEmail } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import FrontpageUpdates from "@components/FrontpageUpdates";

export default function Home() {
  return (
    <main className="flex flex-col items-start p-2 gap-2 max-w-screen-md text-brown-50 sm:text-lg">
      <h2 className="text-lg font-graduate text-cyan-700 mt-2">Sadness..</h2>
      <p className="sm:text-lg">
        My starter box isn't arriving until next week.
      </p>
      <h2 className="text-lg font-graduate text-cyan-700 mt-2">Accounts</h2>
      <p className="sm:text-lg">
        I'ved added accounts for people who might be interested. I stress it is
        NOT REQUIRED to use the builder. It only enables you to save (currently
        up to 5) lists which you can then link/share if you wanted to.
      </p>

      <h3 className="text-center">A couple examples:</h3>
      <ul className="list-disc pl-6">
        <Link
          href="/builder?listId=FiNHSyWqDlNN4DORsztEw"
          className="text-cyan-700 hover:text-cyan-400 "
        >
          <li>1000pt starter list</li>
        </Link>
        <Link
          href="/builder?listId=F64FkVkyPUlj8hxbST4KX"
          className="text-cyan-700 hover:text-cyan-400 "
        >
          <li>1500pt Legion with Reaver</li>
        </Link>
      </ul>
      <p>
        I'm glad everyone seems to like it. I really didn't expect that many
        people to actually sign up for it but it has been interesting looking at
        peoples lists.
      </p>
      {/* 
      <h2 className="text-lg font-graduate text-cyan-700 mt-2">Print cards</h2>
      <p className="sm:text-lg">
        It's been requested a few times and now when you go to the print page
        there is a icon on the top-left, as shown below, that will toggle unit
        cards for printing (it's off by default).
      </p>
      <p className="sm:text-lg mb-2">
        Trying to keep it minimal and unobtrusive.
      </p>
      <Image
        src="/images/print_cards.png"
        height={450}
        width={750}
        alt={"print list and cards icon"}
        className="rounded-lg"
      /> */}

      {/* CONTACT SECTION */}
      <h2 className="text-lg font-graduate text-cyan-700 mt-2">Suggestions?</h2>
      <Link
        href="/contact"
        className="hover:underline text-xl flex items-end gap-1 hover:text-cyan-700 active:text-cyan-700 focus:text-cyan-700"
      >
        Contact me <TfiEmail />
      </Link>
      <Link
        href="https://github.com/JWTC2200/legionbuilder"
        className="mb-2 text-xl flex items-center gap-1
        hover:text-cyan-700 hover:underline active:text-cyan-700 focus:text-cyan-700"
      >
        Github <FaGithub />
      </Link>

      <FrontpageUpdates />

      <hr className="border rounded-full bg-stone-900 w-11/12 my-4 " />
      <footer className="mb-auto  max-w-screen-md ">
        <p>
          This website is unofficial and in no way endorsed by Games Workshop.{" "}
        </p>
        <p>
          Any use of terms from Games Workshop are used without permission. No
          challenge to their status indended. All rights reserved to their
          respective owners.
        </p>
      </footer>
    </main>
  );
}
