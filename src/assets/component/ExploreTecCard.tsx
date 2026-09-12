import { useState } from "react";
import type { CatagoryType } from "../type/CatagoryType"
import TecCrad from "./TecCrad";
import SelectedCard from "./SelectedCard";

interface ItecDataCard{
    tecData:CatagoryType;
}


export function ExploreTecCard({tecData}:ItecDataCard) {
        const [useTecData, setUseTecData]=useState<CatagoryType[]>([])



    return(
        <div>
            <TecCrad tecData={tecData} useTecData={useTecData} setUseTecData={setUseTecData}  />
            <SelectedCard useTecData={useTecData} setUseTecData={setUseTecData} />
            
        
        </div>
    ) 
}