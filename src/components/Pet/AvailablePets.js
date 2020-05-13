import React from 'react';
import {useAllAvailablePets} from "../../hooks/useAllAvailablePets";

export const AvailablePets = () => {
    const { getAllAvailablePets, loading, error, pets } = useAllAvailablePets()

    return (
        <>
            <button disabled={loading} onClick={getAllAvailablePets}>Get Pets!</button>
            { loading && <p>Loading...</p> }
            { error && <p>Something went wrong: {error.message}</p> }
            { pets?.map(pet => <p key={pet.id}>Name: {pet.name} Weight: {pet.weight}</p>) }
        </>
    )
}