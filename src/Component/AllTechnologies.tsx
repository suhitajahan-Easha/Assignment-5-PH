import { use } from "react"
import type { Tech } from "./type"
import DevStackCard from "./DevStackCard";

interface props{
    fetchedData:Promise<Tech[]>
}

const AllTechnologies = ({fetchedData}:props) => {
     const data=use(fetchedData);
     console.log(data)

  return (
    <div className="mx-auto max-w-350 mt-10">
        <h1 className="font-extrabold text-[36px]">Explore the <span className="text-pink-500">Technologies</span></h1>
        <p>Pick one technology per category to build your ideal stack.</p>
        <div className="">
            <div>{data.map((Technology:Tech)=>{ 
                return <DevStackCard Technology={Technology} ></DevStackCard>})}
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default AllTechnologies