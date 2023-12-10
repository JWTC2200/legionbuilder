import { ReactNode } from "react";

export default function ({
  faction,
  children,
}: {
  faction: string;
  children: ReactNode;
}) {
  return (
    <div className="w-full lg:w-auto lg:flex-auto">
      <h3 className="font-graduate text-xl bg-backgrounds-950 py-2 px-4">
        {faction}
      </h3>
      {children}
    </div>
  );
}
