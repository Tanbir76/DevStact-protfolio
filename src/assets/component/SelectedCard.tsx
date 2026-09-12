import React, { type Dispatch, type SetStateAction } from 'react';
import type { CatagoryType } from '../type/CatagoryType';
interface IselectedType {
    useTecData: CatagoryType;
    setUseTecData: Dispatch<SetStateAction<CatagoryType[]>>
}
function SelectedCard({useTecData, setUseTecData}:IselectedType) {
    console.log({useTecData});
    return (
        <div>
            
        </div>
    );
}

export default SelectedCard;