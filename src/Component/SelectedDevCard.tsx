import type { Dispatch, SetStateAction } from "react";
import type { Tech } from "./type";
import { ImCross } from "react-icons/im";
import { toast } from "react-toastify";

interface props{
    p:Tech,
    techSelected: Tech[];
    setTechSelected: Dispatch<SetStateAction<Tech[]>>;
}

const SelectedDevCard = ({p,techSelected, setTechSelected}:props) => {
     const handledeleteTech=()=>{
    const restTech = techSelected.filter(
      (filtertech) => filtertech.name != p.name,
    );
    toast.error(`${p.name} is Deleted `, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
   
    setTechSelected(restTech)
  }
  
    return (
    <div className="flex justify-between items-center w-60 h-15 rounded-1xl mb-2 border border-slate-200 bg-white p-5 shadow-sm ">
      <div className="flex gap-2.5 items-center">
        <img src={p.icon} className="w-5 h-5" alt={p.name} />
        <div>
          <h1 className="text-[12px]">{p.name}</h1>
          <h1 className="text-[8px]">{p.category}</h1>
        </div>
      </div>
      <span
        onClick={() => {
          handledeleteTech();
        }}
      >
        <ImCross className="text-gray-500"></ImCross>
      </span>
    </div>
  );
};

export default SelectedDevCard;
