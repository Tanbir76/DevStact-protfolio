import {type Dispatch, type SetStateAction } from "react";
import type { CatagoryType } from "../type/CatagoryType"
import TecCrad from "./TecCrad";
// import SelectedCard from "./SelectedCard";

interface ItecDataCard {
    tecData: CatagoryType;
    useTecData: CatagoryType[];
    setUseTecData: Dispatch<SetStateAction<CatagoryType[]>>;
    count: number;
    setCount :Dispatch<SetStateAction<number>>;
    chosen:boolean;
    setChosen:Dispatch<SetStateAction<boolean>>;
   
}


export function ExploreTecCard({ tecData , useTecData, setUseTecData, count, setCount , chosen, setChosen }: ItecDataCard) {



    return (
        <div>
            <TecCrad tecData={tecData} useTecData={useTecData} setUseTecData={setUseTecData} count={count} setCount={setCount}  chosen={chosen} setChosen={setChosen}  />
        </div>
    )
}