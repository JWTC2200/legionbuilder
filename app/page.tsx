import Link from "next/link";
import { FaGithub, FaDiscord } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import FrontpageUpdates from "@components/FrontpageUpdates";

export default function Home() {
  return (
    <main className="flex flex-col items-start p-2 gap-2 max-w-screen-md text-brown-50 sm:text-lg">
      <h2 className="text-lg font-graduate text-cyan-700 mt-2">Changes</h2>
      <p className="sm:text-lg">
        There has been a lot of work behind the scenes so apologies for any
        confusion or issues that make occur.
      </p>
      <p className="flex items-center gap-1">
        First of all we have a
        <Link
          href="https://discord.gg/qyFkhXz9"
          target="_blank"
          className="hover:underline flex items-center gap-1 hover:text-cyan-700 active:text-cyan-700 focus:text-cyan-700"
        >
          Discord <FaDiscord />
        </Link>
        !
      </p>
      <p>
        The list builder has changed so that it will take you to your saved
        lists first. The print button has been replaced with a view button.
        Previous links are incorrect but should still redirect you properly.
        Please let me know if they don't.
      </p>
      <p>
        I've been informed that there are quite a few differences between the
        digital and physical copy of the rules (classic GeeDubs). I'm still
        waiting on my rulebook but assuming the digital version is correct/up to
        date, we'll use that instead.
      </p>
      <p>Finally, our domain has been changed to legionbuilder.app!</p>
      <p>
        I really hope you enjoying using the site, I've been really enjoying all
        the feedback and suggestions.
      </p>

      {/* CONTACT SECTION */}
      <h2 className="text-lg font-graduate text-cyan-700 mt-2">
        Suggestions or feedback?
      </h2>
      <Link
        href="https://discord.gg/qJc2cZGt"
        target="_blank"
        className="hover:underline text-xl flex items-center gap-1 hover:text-cyan-700 active:text-cyan-700 focus:text-cyan-700"
      >
        Join our Discord! <FaDiscord />
      </Link>
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
