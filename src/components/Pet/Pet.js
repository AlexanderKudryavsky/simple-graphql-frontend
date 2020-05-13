import React from 'react';
import {useQueryAvailablePets} from "../../hooks/useAvailablePets";

export const Pet = () => {
    const { loading, error, data} = useQueryAvailablePets();

    if(loading){
        return (<div>
            Loading...
        </div>)
    }
    if(error){
        return (
            <div>
                Something went wrong: {error.message}
            </div>
        )
    }

    return(
        <div>
            <h2>Available pets</h2>
            Available Pets:
            {data.availablePets}
        </div>
    )
}