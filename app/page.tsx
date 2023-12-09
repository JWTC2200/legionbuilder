import Main from "./components/Main";
import Link from "next/link";
import { FaGithub, FaDiscord } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import FrontpageUpdates from "@components/FrontpageUpdates";
import CreateListButtons from "./lists/components/CreateListButtons";

export default function Home() {
  return (
    // <main className="flex flex-col items-start p-2 gap-2 max-w-screen-md text-brown-50 sm:text-lg">
    <Main>
      <CreateListButtons className="m-4 self-center flex flex-wrap gap-4 justify-center" />
      <FrontpageUpdates />

      {/* CONTACT SECTION */}
      <h2 className="text-lg font-graduate text-tertiary-700 mt-2">
        Suggestions or feedback?
      </h2>
      <Link
        href="https://discord.gg/qJc2cZGt"
        target="_blank"
        className="hover:underline text-xl flex items-center gap-1 hover:text-tertiary-700 active:text-tertiary-700 focus:text-tertiary-700"
      >
        Join our Discord! <FaDiscord />
      </Link>
      <Link
        href="/contact"
        className="hover:underline text-xl flex items-end gap-1 hover:text-tertiary-700 active:text-tertiary-700 focus:text-tertiary-700"
      >
        Contact me <TfiEmail />
      </Link>
      <Link
        href="https://github.com/JWTC2200/legionbuilder"
        className="mb-2 text-xl flex items-center gap-1
        hover:text-tertiary-700 hover:underline active:text-tertiary-700 focus:text-tertiary-700"
      >
        Github <FaGithub />
      </Link>

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
    </Main>
    // </main>
  );
}
