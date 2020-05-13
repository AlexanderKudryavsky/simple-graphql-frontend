import React from "react";
import {useQueryAllPets} from "../../hooks/useAllPets";

export const List = () => {
    const { loading, error, pets } = useQueryAllPets();

    if(loading) {
        return <p>Loading...</p>
    }
    if(error) {
        return <p>Something went wrong: {error.message}</p>
    }

    return(
        <div>
            <h2>List</h2>
            {pets.map(({name, id, weight}) => <p key={id}>
                Name: {name} Weight: {weight}
            </p>)}
        </div>
    )
}