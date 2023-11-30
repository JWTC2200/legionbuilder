import Link from "next/link";
import { TfiEmail } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-start p-2 gap-2 max-w-screen-md text-brown-50 sm:text-lg">
      <h2 className="text-lg font-graduate text-cyan-700">Accounts</h2>
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

      <h2 className="text-lg font-graduate text-cyan-700 mt-2">Print cards</h2>
      <p className="sm:text-lg">
        It's been requested a few times and when now when you go to the print
        page there is a icon on the top-left, as shown below, that will toggle
        unit cards for printing (it's off by default).
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
      />
      <p className="sm:text-lg my-2">
        Originally I thought this would be problematic as cards would get cut
        between page breaks in the print screen. Turns out theres a css property
        for it.
      </p>
      <p className="sm:text-lg mt-2">
        If there's anything you'd like added please feel free to contact me
        below. Thank you!
      </p>
      <Link
        href="/contact"
        className="hover:underline text-xl flex items-end gap-1 hover:text-cyan-700 active:text-cyan-700 focus:text-cyan-700"
      >
        Contact me <TfiEmail />
      </Link>
      <Link
        href="https://github.com/JWTC2200/legionbuilder"
        className="hover:underline text-xl flex items-center gap-1
        hover:text-cyan-700 active:text-cyan-700 focus:text-cyan-700"
      >
        Github <FaGithub />
      </Link>

      <div className="text-lg ">
        <Link
          href="https://www.youtube.com/@blackbriargaming5483"
          className="text-cyan-700"
        >
          <p className="flex items-center gap-2 hover:text-cyan-500 active:text-cyan-500">
            Thanks to Black Briar Gaming for making a video about this site!
            <FaExternalLinkAlt />
          </p>
        </Link>
      </div>
      <div className="mt-4 text-base">
        <h2 className="text-xl text-center mb-2">UPDATES:</h2>
        <ul className="list-disc flex flex-col gap-2">
          <li>
            <ul>
              <li>30/11/2023: Bit of styling on the /build page</li>
              <li>
                For convenience I've added a direct link to the print page in
                the Lists tab if you don't want to go through the builder.
              </li>
              <li>Added print cards button on /print page</li>
            </ul>
          </li>
          <li>29/11/2023: Added accounts and a database for list storage</li>
          <li>
            28/11/2023: On request I've added the Quick Start Guide Legion
            Astranii Class Augumented Spearhead formation. It's currently listed
            under Legiones Astartes formations and is heavily limited in its
            options to what exists in the starter box as I didn't account for
            this sort of dual faction formation when I designed the builder.
            Something I might have to change in future if it crops up again!
          </li>
          <li>
            27/11/2023: Fixes here and there, huge thanks to everyone who helped
            and messaged me! Added some warnings/reminders when buildings lists
            and a minimize formation button for easier viewing/use.
          </li>
          <li>
            26/11/2023: For fun I've added in titan weapon options if they're a
            single unit titan (so not the warhounds). Doesn't add much unless
            you like to see your titan weapons on the print page :D
          </li>
          <li>
            25/11/2023: A few fixes. Also updated the builder to highlight
            detachments & upgrades if one has been selected. Hope this makes it
            easier to view and use.
          </li>
          <li>24/11/2023: Oops! Added in Cerastus Knights!</li>
          <li>
            23/11/2023: Added a couple widgets and navigation links to make
            using the builder easier for mobiles. Changed the style so hopefully
            it's easier for mobile users.
          </li>
          <li>
            23/11/2023: Hopefully fixed the issue with changing detachments &
            uprades without breaking anything else. Added a contact link above.{" "}
          </li>
          <li>22/11/2023: Added Solar Auxilia and Titans</li>
          <li>
            21/11/2023: Added Knights, Warhound Titan & Legiones Astartes.
          </li>
        </ul>
      </div>
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
