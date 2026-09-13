import { type Dispatch, type SetStateAction } from 'react';
import type { CatagoryType } from '../type/CatagoryType';
import StackCard from './StackCard';

interface IselectedType {
    useTecData: CatagoryType[];
    setUseTecData: Dispatch<SetStateAction<CatagoryType[]>>
    count: number;
    setCount: Dispatch<SetStateAction<number>>;
}
function SelectedCard({ useTecData, setUseTecData, count ,setCount }: IselectedType) {

    const handelRemoveTecData = (data:CatagoryType): void=>{
        const filterTecData = useTecData.filter( teq => teq.id !== data.id );
        setUseTecData(filterTecData);
        setCount(count -1);

    }
    return (


        <div className=' grid gap-2 mt-4'>
            {
                useTecData.map((tecData: CatagoryType) => {
                    return (
                        <StackCard key={tecData.name} tecData={tecData} setCount={setCount} setUseTecData={setUseTecData} handelRemoveTecData={handelRemoveTecData} />

                    )
                })
            }
        </div>
    );
}

export default SelectedCard;