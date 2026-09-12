// import React from 'react';

import { BiTrash } from "react-icons/bi";
import type { CatagoryType } from "../type/CatagoryType";
// import ChoseCard from "./ChoseCard";
interface IstackCard {
    tecData: CatagoryType;
}

function StackCard({ tecData }: IstackCard) {
    return (
        <div className="flex justify-between items-center gap-5 border border-[#94A3B8] p-2 rounded-2xl">
            <div className="flex gap-2 items-center" >
                <img src={tecData.icon} alt={tecData.id} className="w-8 h-8 " />
                <div>
                    <h1 className="font-bold text-[16px]">{tecData.name}</h1>
                    <p className="text-[12px] text-[#94A3B8]">{tecData.category}</p>
                </div>
            </div>
            <span className="text-red-500 text-2xl cursor-pointer ">
                <BiTrash></BiTrash>
            </span>
        </div>
    );
}

export default StackCard;