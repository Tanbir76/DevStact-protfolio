import { MdOutlineStarPurple500 } from "react-icons/md";
import type { CatagoryType } from "../type/CatagoryType";
import { useState, type Dispatch, type SetStateAction } from "react";

// import React from 'react';
interface ItecCard {
    tecData: CatagoryType;
    useTecData: CatagoryType[];
    setUseTecData: Dispatch<SetStateAction<CatagoryType[]>>

}



function TecCrad({ tecData, useTecData, setUseTecData }: ItecCard) {
    const handleTecData = (tecData: CatagoryType) => {
        const newTecData = [...useTecData, tecData];
        console.log(useTecData)
        setUseTecData(newTecData);
    }

    return (
        <div>
            <div className=" rounded-2xl p-6 space-y-2.5 shadow">
                <div className="flex justify-between" >

                    <img src={tecData.icon} alt={tecData.id} className="w-12 h-12 " />
                    <button className="btn rounded-3xl px-6 py-4 text-[16px] ">{tecData.badge}</button>
                </div>
                <h1 className="font-bold mt-8 text-[22px]">{tecData.name}</h1>
                <p className="text-[16px]">{tecData.description}</p>
                <div className="flex justify-between items-center mt-4">
                    <button className="btn rounded-3xl p-3 text-[16px] ">{tecData.category}</button>
                    <p className="text-[18px]">{tecData.difficulty}</p>

                    <div className="flex items-center text-[16px]">
                        <MdOutlineStarPurple500 className="text-amber-400 " />
                        <p>{tecData.rating}</p>
                    </div>
                </div>
                <button onClick={() => handleTecData(tecData)} className="btn w-full mt-2 py-6 bg-black text-white text-[18px]">Add to Stack</button>
            </div>
        </div>
    );
}

export default TecCrad;