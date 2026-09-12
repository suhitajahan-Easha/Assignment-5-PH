import { use, useState } from "react"
import type { Tech } from "./type"
import DevStackCard from "./DevStackCard";
import { AddedTech } from "./AddedTech";

interface props{
    fetchedData:Promise<Tech[]>
}

const AllTechnologies = ({fetchedData}:props) => {
     const data=use(fetchedData);
     const [techSelected,setTechSelected]=useState<Tech[]>([])
    

  return (
    <div className="mx-auto mt-10 max-w-300 px-4 sm:px-6 lg:px-0">
        <div className="text-center min-[1200px]:text-left">
            <h1 className="text-[30px] font-extrabold sm:text-[36px]">Explore the <span className="text-gradient-middle">Technologies</span></h1>
            <p className="text-sm text-gray-600 sm:text-base">Pick one technology per category to build your ideal stack.</p>
        </div>
        <div className=" my-6 flex flex-col items-center justify-center gap-8 sm:my-9 min-[1200px]:flex-row min-[1200px]:items-start min-[1200px]:justify-between min-[1200px]:gap-10">
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2  sm:gap-2 lg:gap-10 min-[1200px]:w-auto lg:grid-cols-3">{data.map((Tech:Tech)=>{ 
                return <DevStackCard Tech={Tech} key={Tech.id} techSelected={techSelected} setTechSelected={setTechSelected} ></DevStackCard>})}
            </div>
            <div className="flex w-full lg:w-70">
                <AddedTech techSelected={techSelected} setTechSelected={setTechSelected} ></AddedTech>
            </div>
        </div>
    </div>
  )
}

export default AllTechnologies