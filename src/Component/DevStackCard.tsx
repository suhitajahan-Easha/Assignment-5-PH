import { useState, type Dispatch, type SetStateAction } from "react";
import type { Tech } from "./type";
interface prpos {
  Tech: Tech;
   techSelected:Tech[],
   setTechSelected:Dispatch<SetStateAction<Tech[]>>
}

const DevStackCard = ({ Tech,techSelected,setTechSelected }: prpos) => {
  console.log(Tech);
   const [isSelected, setisSelected] = useState(false);

  const handleButton = () => {
    setisSelected(true);
    setTechSelected([...techSelected,Tech])
  };

  return (
    <div className="group w-70 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ">
      <div className="relative flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
          <img
            src={Tech.icon}
            className="h-6 w-6 object-contain"
            alt={`${Tech.name} icon`}
          />
        </div>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
          {Tech.badge}
        </span>
      </div>
      <h1 className="mt-5 text-xl font-bold tracking-tight text-slate-900">
        {Tech.name}
      </h1>
      <p className="mt-2 min-h-18 text-sm leading-6 text-slate-500">
        {Tech.description}
      </p>
      <div className="mt-5 flex items-center justify-between pt-4">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
            Category
          </p>
          <p className="mt-1 text-xs font-semibold text-slate-700">
            {Tech.category}
          </p>
        </div>
        <div>
          <p className="text-[10px] font-medium uppercase text-slate-400">
            Level
          </p>
          <p className="mt-1 text-xs font-semibold text-slate-700">
            {Tech.difficulty}
          </p>
        </div>

        <div>
          <p className="text-[10px] font-medium uppercase text-slate-400">
            Rating
          </p>
          <p className="mt-1 text-xs font-bold text-amber-500">
            ★ {Tech.rating}
          </p>
        </div>
      </div>
      <button
        onClick={()=>handleButton()}
        disabled={isSelected }
        className={` mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white
        ${isSelected ? "cursor-not-allowed bg-gray-500 opacity-70" : ""}
        `}
      >
        {isSelected? "✓ Selected" : " + Add to Stack"}
      </button>
    </div>
  );
};

export default DevStackCard;
