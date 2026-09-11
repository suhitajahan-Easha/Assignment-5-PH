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
    //  console.log(data)

  return (
    <div className="mx-auto max-w-300 mt-10 px-4 sm:px-6 lg:px-0">
        <h1 className="font-extrabold text-[36px]">Explore the <span className="text-gradient-middle">Technologies</span></h1>
        <p>Pick one technology per category to build your ideal stack.</p>
        <div className=" flex flex-col md:flex-row gap-6 md:gap-10 my-6 md:my-9">
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">{data.map((Tech:Tech)=>{ 
                return <DevStackCard Tech={Tech} key={Tech.id} techSelected={techSelected} setTechSelected={setTechSelected} ></DevStackCard>})}
            </div>
            <div>
                <AddedTech techSelected={techSelected} setTechSelected={setTechSelected} ></AddedTech>
            </div>
        </div>
    </div>
  )
}

export default AllTechnologies