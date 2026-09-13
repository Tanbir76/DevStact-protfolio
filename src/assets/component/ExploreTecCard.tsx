import { useState, type Dispatch, type SetStateAction } from "react";
import type { CatagoryType } from "../type/CatagoryType"
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";


interface ItecDataCard {
    tecData: CatagoryType;
    useTecData: CatagoryType[];
    setUseTecData: Dispatch<SetStateAction<CatagoryType[]>>;
    count: number;
    setCount: Dispatch<SetStateAction<number>>;

}
export function ExploreTecCard({ tecData, useTecData,setUseTecData, count, setCount}: ItecDataCard) {
    //   const [isSelected, setIsSelected] = useState<boolean>(false);
    const isSelected = useTecData.some(data => data.id === tecData.id);
    const handleTecData = (tecData: CatagoryType): void => {
            if (useTecData.includes(tecData)) {
                return;
            } else {
                setUseTecData([...useTecData, tecData]);
                setCount(count + 1);
                toast.success('Stack card selected', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                });
    
    
            }
        }

        
    return (
        <div key={tecData.id} className={`rounded-2xl p-6 space-y-2.5 shadow ${isSelected ? "border border-red-400":'border border-[#0f172a9d]'}`} >
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
                   
                    
            <button onClick={() => handleTecData(tecData)} className={`btn w-full mt-2 py-5 text-[18px] ${isSelected === true ? "border-red-400 text-red-400 " : " bg-black text-white"}`}>  {isSelected ? (<><FaCheck /> Add to Stack </>):('Add to Stack')}</button>
        </div>

    )
}