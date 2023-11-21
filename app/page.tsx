export default function Home() {
  return (
    <div className="flex flex-col items-center p-8 gap-2">
      <p className="text-xl">
        I not everything has been implemented and I'm sure theres some
        typos/bugs but please enjoy using it for now!
      </p>
      <div className="mt-8">
        <h2 className="text-xl">UPDATES:</h2>
        <ul className="list-disc">
          <li>
            21/11/2023: Added Knights, Warhound Titan & Legiones Astartes.
          </li>
        </ul>
      </div>
    </div>
  );
}
