import type { Dispatch, SetStateAction } from "react";
import type { Tech } from "./type";
import SelectedDevCard from "./SelectedDevCard";
import { toast } from "react-toastify";

interface props {
  techSelected: Tech[];
  setTechSelected: Dispatch<SetStateAction<Tech[]>>;
}
export const AddedTech = ({ techSelected, setTechSelected }: props) => {
  const handleRemoveAll=()=>{
    setTechSelected([])
    toast.error(`All Item Removed `, {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
  }
  if(techSelected.length===0){
  return(
      <div className="w-full lg:w-70 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h1 className="text-[18px] font-bold text-black">Your Stack</h1>
        <p className="mb-5 text-6px text-gray-600">
          No Technologies Selected Yet
        </p>
        <div className="my-10 text-6px text-gray-500 text-center h-15 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ">Your Stack is Empty</div>
      </div>
  )
 }
  return (
    <div className="w-full lg:w-70 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h1 className="text-[18px] font-bold text-black">Your Stack</h1>
      <p className="mb-5 text-6px text-gray-600">
        {techSelected.length} Technology Selected
      </p>
      {techSelected.map((p: Tech) => {
        return (
          <SelectedDevCard p={p} key={p.id} techSelected={techSelected} setTechSelected={setTechSelected}></SelectedDevCard>
        );
      })}
      <div className=" w-60 rounded-xl mt-10 border border-red-300 text-red-600 font-semibold text-center py-1 shadow-sm ">
        <button onClick={()=>{handleRemoveAll()}}>Remove All</button>
      </div>
    </div>
  );
};

