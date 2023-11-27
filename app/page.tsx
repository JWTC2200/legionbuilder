import Link from "next/link";
import { TfiEmail } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-8 gap-2 max-w-screen-md text-brown-50">
      <p className="sm:text-xl text-center">
        So at this point I think the builder part of this site is pretty much
        done. I can't really think of much else to do other than tweak how it
        looks.
      </p>
      <p className="sm:text-xl text-center mt-2">
        Moving on I'll add pages for special rules and weapon traits as well as
        tooltips to each on the unit and detachment dataslates. Which might have
        to wait until I can get my hands on the actual book.
      </p>
      <p className="sm:text-xl text-center mt-2">
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

      <div className="text-xl ">
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
      <div className="mt-8">
        <h2 className="text-xl text-center">UPDATES:</h2>
        <ul className="list-disc flex flex-col gap-2">
          <li>
            26/11/2023: Fixes here and there, huge thanks to everyone who helped
            and messaged me! Added some warnings/reminders when buildings lists
            and a minimise formation button for easier viewing/use.
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
    </div>
  );
}
