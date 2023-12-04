"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
// import { BUILDER_LIST } from "../types";
// import { formationPoints, listPoints } from "../builder/utils";
// import { formationHTML, listCards } from "./util";
// import { getList } from "../firebase/firestore/getList";
// import { unitData } from "../data/unit_data";
// import UnitDataslate from "@components/UnitDataslate";

// import { MdListAlt } from "react-icons/md";
// import { PiCardsLight } from "react-icons/pi";

const page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const listId = searchParams.get("listId");
  router.replace(`/lists/view${listId ? `?listId=${listId}` : ""}`);

  // const [armyList, setArmyList] = useState<BUILDER_LIST | null>(null);
  // const [failureMessage, setFailureMessage] = useState<string | null>(null);
  // const [showCards, setShowCards] = useState(false);

  // useEffect(() => {
  //   const listParams = searchParams.get("listId");
  //   const getDblist = async (id: string) => {
  //     const data: any = await getList(id);
  //     if (data) {
  //       setArmyList(data);
  //     } else {
  //       setFailureMessage("Could not find list");
  //     }
  //   };

  //   if (listParams) {
  //     getDblist(listParams);
  //   } else {
  //     const list =
  //       typeof window !== undefined
  //         ? JSON.parse(localStorage.getItem("legionbuilder")!)
  //         : null;
  //     setArmyList(list as BUILDER_LIST);
  //   }
  // }, []);

  return (
    <p>Redirecting to view</p>
    // <main className="w-full min-h-screen bg-slate-50 text-green-950 p-4 flex justify-center">
    //   {armyList ? (
    //     <div className="w-full max-w-screen-sm">
    //       {/* <button
    //         type="button"
    //         onClick={() => setShowCards((prev) => !prev)}
    //         className="text-xl"
    //       >
    //         {showCards ? <PiCardsLight /> : <MdListAlt />}
    //       </button> */}
    //       <div className="mb-2">
    //         <h1 className="font-bold font-subrayada text-xl">
    //           {armyList.list_name}
    //         </h1>
    //         <h2 className="font-bold font-graduate">
    //           List total:{" "}
    //           {listPoints(armyList).allyFactionPoints +
    //             listPoints(armyList).mainFactionPoints}{" "}
    //           points
    //         </h2>
    //         <h2 className="font-bold font-graduate">
    //           Main faction: {armyList.main_faction}
    //         </h2>
    //       </div>
    //       {armyList.formations.map((formation, index) => (
    //         <div key={"formaton" + index} className="text-sm mb-2">
    //           <h3 className="text-base">
    //             <strong>Formation {index + 1}</strong>: {formation.name}
    //             {", "}
    //             {formationPoints(formation)}points
    //           </h3>
    //           {formationHTML(formation)}
    //         </div>
    //       ))}
    //       {showCards ? (
    //         <div className="break-inside-avoid-page">
    //           {listCards(armyList).map((id) => {
    //             const data = unitData.find((unit) => unit.id == id)!;
    //             return <UnitDataslate key={"card" + id} {...data} />;
    //           })}
    //         </div>
    //       ) : null}
    //     </div>
    //   ) : (
    //     <div className="w-full min-h-screen bg-slate-50 justify-center items-center text-center">
    //       {failureMessage ? <p>{failureMessage}</p> : <h2>No list found</h2>}
    //     </div>
    //   )}
    // </main>
  );
};

export default page;
