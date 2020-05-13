import {useMutation} from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import { useState } from "react";

const mutationCheckIn = loader('./gql/mutationCheckIn.graphql');

export const useCheckIn = () => {
    const [ onCheckIn, checkIn ] = useMutation(mutationCheckIn);
    const checkInData = checkIn.data;
    const checkInLoading = checkIn.loading;
    const [ checkInError, setCheckInError ] = useState('')

    const changeDropDownValue = async (e) => {
        try {
            await onCheckIn({
                variables: {
                    id: e.target.value
                }
            });
        } catch (e) {
            console.log(e)
            setCheckInError(e)
        }
    }

    return { changeDropDownValue, checkinPet: checkInData?.checkIn.pet.name, checkInLoading: checkInLoading, checkInError }
}