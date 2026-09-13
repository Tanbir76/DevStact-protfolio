import { use, useState } from "react";
import type { CatagoryType } from "../type/CatagoryType";
import { ExploreTecCard } from "./ExploreTecCard";
import SelectedCard from "./SelectedCard";
type ExploreData = {
    exploreData: Promise<CatagoryType[]>;
}
function ExploreTec({ exploreData }: ExploreData) {
    const exploreDataTec = use(exploreData);
    const [useTecData, setUseTecData] = useState<CatagoryType[]>([]);
    const [count, setCount] = useState<number>(0);


    return (
        <div className="container mx-auto space-y-1.5">
            <h1 className="font-black text-3xl bg-linear-to-r from-[#ff5622dc] via-[#db177cd8] to-[#5b06ee] bg-clip-text text-transparent  ">Explore the Technologies</h1>
            <p className="text-[18px] text-[#0f172a9d]  ">Pick one technology per category to build your ideal stack.</p>
            <div className="md:grid md:grid-cols-4 gap-4 mt-10">
                <div className="col-span-3">
                    <div className="grid md:grid-cols-3 gap-10 ">
                        {
                            exploreDataTec.map((tecData: CatagoryType) => {
                                return (

                                    <ExploreTecCard key={tecData.id} tecData={tecData} useTecData={useTecData} setUseTecData={setUseTecData} count={count} setCount={setCount}
                                    />

                                )

                            }

                            )
                        }
                    </div>
                </div>

                {/* Slected-Stack-Card */}
                <div className="mt-10">
                    <div className=" rounded-2xl p-3 space-y-1.5 shadow">
                        <h1 className="font-bold text-[18px]">Youre Stack</h1>
                        <h4 className="text-[16px] text-[#94A3B8]"> {count > 0 ? `${count} Technology Selected` : "No Technology Selected"} </h4>
                        {/* Conditional rendering */}
                        {count === 0 ? (<div className="text-center px-6 py-10 border-dashed border rounded-2xl border-[#94a3b8ab] text-[#94a3b8ea]"> <h3>Your stack is empty.</h3> </div>)
                            : (<div className="w-full grid gap-2"> <SelectedCard useTecData={useTecData} setUseTecData={setUseTecData} count={count} setCount={setCount} /> </div>)}

                        {count === 0 ? ('') : (<button onClick={() => { setUseTecData([]); setCount(0); }}
                            className="btn w-full mt-2 py-6 text-red-400 border border-red-400 text-[18px]">
                            Remove All
                        </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ExploreTec;