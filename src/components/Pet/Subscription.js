import React from 'react';
import {useSubscriptionPetReturned} from "../../hooks/useSubscription";

export const Subscription = () => {
    const { pet, loading, error } = useSubscriptionPetReturned()
    return(
        <>
            {pet && <p>{pet}</p>}
            {loading && <p>Loading...</p>}
        </>
    )
}