import { use } from "react";
import type { CatagoryType } from "../type/CatagoryType";
import { ExploreTecCard } from "./ExploreTecCard";
type ExploreData = {
    exploreData: Promise<CatagoryType[]>;
}
function ExploreTec({ exploreData }: ExploreData) {
    const exploreDataTec = use(exploreData);
    return (
        <div className="container mx-auto space-y-1.5">
            <h1 className="font-black text-3xl bg-linear-to-r from-[#ff5622dc] via-[#db177cd8] to-[#5b06ee] bg-clip-text text-transparent  ">Explore the Technologies</h1>
            <p className="text-[18px] text-[#0f172a9d]  ">Pick one technology per category to build your ideal stack.</p>
            <div className="grid md:grid-cols-4 gap-4 mt-10">
                <div className="col-span-3">
                    <div className="grid md:grid-cols-3 gap-10 ">
                        {
                            exploreDataTec.map((tecData: CatagoryType) => {
                                return (

                                    <ExploreTecCard key={tecData.id} tecData={tecData} />



                                )

                            }

                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ExploreTec;