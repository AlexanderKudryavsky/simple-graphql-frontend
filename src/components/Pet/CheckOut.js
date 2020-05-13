import React from "react";
import {useNotLazyAllAvailablePets} from "../../hooks/useAllAvailablePets/notLazy";
import {useCheckOut} from "../../hooks/useCheckOut";

export const CheckOut = () => {
    const { availablePets, availablePetsLoading, availablePetsError } = useNotLazyAllAvailablePets();
    const { onChangeData, checkOutPet, checkOutLoading, checkOutError } = useCheckOut();
    return(
        <>
            { availablePetsLoading && <p>Загрузка питомцев...</p> }
            { availablePetsError && <p>Ошибка: {availablePetsError.message}</p> }
            { availablePets && <select onChange={onChangeData} name="checkout" id="checkout">
                {availablePets.map(pet => <option key={pet.id} value={pet.id}>{pet.name}</option>)}
            </select> }
            { checkOutLoading && <p>Загрузка питомцев...</p> }
            { checkOutError && <p>Ошибка: {checkOutError}</p> }
            { checkOutPet && <p>{checkOutPet}</p> }
        </>
    )
}