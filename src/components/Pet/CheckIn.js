import React from 'react';
import {useCheckIn} from "../../hooks/useCheckIn";
import {useAllCheckedOutPets} from "../../hooks/useAllCheckedOutPets";

export const CheckIn = () => {
    const { loading, error, queryAllCheckedOutPets } = useAllCheckedOutPets();
    const { changeDropDownValue, checkinPet, checkInLoading, checkInError } = useCheckIn();
    console.log('render')

    return(
        <div>
            { loading && <p>Загрузка питомцев...</p> }
            { error && <p>Ошибка: {error.message}</p>}
            {queryAllCheckedOutPets && <select onChange={changeDropDownValue} name="pets" id="pets">
                {queryAllCheckedOutPets.map(pet => <option key={pet.id} value={pet.id}>{pet.name}</option>)}
            </select>}
            { checkInLoading && <p>Идет проверка пользователя...</p> }
            { checkinPet && <p>{checkinPet}</p> }
            { checkInError && <p>Ошибка: {checkInError.message}</p> }

        </div>
    )
}