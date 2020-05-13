import React from "react";
import {usePetById} from "../../hooks/usePetById";

export const PetById = () => {
    const { getPet, loading, error, pet } = usePetById();

    const handleGetPet = () => {
        getPet({
            variables: {
                id: 'C-3'
            }
        })
    }

    return (
        <>
            {(!pet && !loading) && <button onClick={handleGetPet}>Get Pet</button>}
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {pet && <p>{pet.name}</p>}
        </>

    )
}