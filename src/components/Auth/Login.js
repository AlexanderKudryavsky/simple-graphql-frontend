import React from "react";
import {useLogin} from "../../hooks/useLogin";

export const Login = () => {
    const { changeData, handleSubmit, loading, error, name, account } = useLogin();
    const { username, password } = account;
    return (
        <>
            {
                !name &&
                    <>
                        <div>
                            <input onChange={changeData} value={username} type="text" name="username"/>
                        </div>
                        <div>
                            <input onChange={changeData} value={password} type="password" name="password"/>
                        </div>
                        <div>
                            <button disabled={loading} onClick={handleSubmit}>Login</button>
                        </div>
                    </>
            }
            {
                (name && !loading) &&
                    <>
                        <p>{`Добро пожаловать ${name}!`}</p>
                    </>
            }
            {
                loading &&
                    <p>Идет проверка пользователя...</p>
            }
            {
                error &&
                    <p>Ошибка: {error.message}</p>
            }
        </>
    )
}