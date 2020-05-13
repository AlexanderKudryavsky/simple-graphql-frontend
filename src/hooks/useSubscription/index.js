import { useSubscription } from "@apollo/react-hooks";
import { loader } from "graphql.macro";

const subscriptionPetReturned = loader('./gql/subscriptionPetReturned.graphql');

export const useSubscriptionPetReturned = () => {
    const { data, loading, error } = useSubscription(subscriptionPetReturned)
    return { pet: data?.petReturned.pet.name, loading, error }
}