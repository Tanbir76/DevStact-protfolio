import { type Dispatch, type SetStateAction } from 'react';
import type { CatagoryType } from '../type/CatagoryType';
import StackCard from './StackCard';
// import TecCrad from './TecCrad';
interface IselectedType {
    useTecData: CatagoryType[];
    setUseTecData: Dispatch<SetStateAction<CatagoryType[]>>
}
function SelectedCard({ useTecData, setUseTecData }: IselectedType) {
    return (
        <div className=' grid gap-2 mt-4'>
            {
                useTecData.map((tecData: CatagoryType) => {
                    return (
                        <StackCard key={tecData.id} tecData={tecData} />

                    )
                })
            }
        </div>
    );
}

export default SelectedCard;