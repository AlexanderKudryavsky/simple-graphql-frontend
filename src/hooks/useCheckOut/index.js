import { useMutation } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import {useState} from "react";

const mutationCheckOut = loader('./gql/mutationCheckOut.graphql');

export const useCheckOut = () => {
    const [checkOut, { data, loading }] = useMutation(mutationCheckOut);
    const [ checkOutError, setCheckOutError ] = useState('');

    const onChangeData = async (e) => {
        try {
            await checkOut({
                variables: {
                    id: e.target.value
                }
            })
        } catch (e) {
            setCheckOutError(e)
        }
    }

    return { onChangeData, checkOutPet: data?.checkOut.pet.name, checkOutLoading: loading, checkOutError }

}