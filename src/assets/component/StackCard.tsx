
import type { CatagoryType } from "../type/CatagoryType";
import { HiOutlineX } from "react-icons/hi";
// import ChoseCard from "./ChoseCard";
interface IstackCard {
    tecData: CatagoryType;
    handelRemoveTecData: (tecData: CatagoryType) => void;

}

function StackCard({ tecData, handelRemoveTecData }: IstackCard) {
    return (
        <div>

            <div className="flex justify-between items-center gap-5 border border-[#94A3B8] p-2 rounded-2xl">
                <div className="flex gap-2 items-center" >
                    <img src={tecData.icon} alt={tecData.id} className="w-8 h-8 " />
                    <div>
                        <h1 className="font-bold text-[16px]">{tecData.name}</h1>
                        <p className="text-[12px] text-[#94A3B8]">{tecData.category}</p>
                    </div>
                </div>
                <span className="text-red-500 text-2xl cursor-pointer ">
                    <HiOutlineX onClick={() => handelRemoveTecData(tecData)} />

                </span>
            </div>

        </div>
    );
}

export default StackCard;