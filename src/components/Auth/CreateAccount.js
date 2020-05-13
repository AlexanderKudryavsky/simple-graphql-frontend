import React from "react";
import {useCreateAccount} from "../../hooks/useCreateAccount";

export const CreateAccount = () => {
    const { changeValues, onSave, loading, error, data, account } = useCreateAccount()
    return(
        <>
            <input type="text" name="name" value={account.name} onChange={changeValues}/>
            <input type="text" name="username" value={account.username} onChange={changeValues}/>
            <input type="password" name="password" value={account.password} onChange={changeValues}/>
            <button onClick={onSave}>Create</button>
        </>
    )
}