import React from 'react';
import {Pet} from "./components/Pet/Pet";
import {List} from "./components/Pet/List";
import {AvailablePets} from "./components/Pet/AvailablePets";
import {PetById} from "./components/Pet/PetById";
import {CreateAccount} from "./components/Auth/CreateAccount";
import {Login} from "./components/Auth/Login";
import {CheckIn} from "./components/Pet/CheckIn";
import {CheckOut} from "./components/Pet/CheckOut";
import {Subscription} from "./components/Pet/Subscription";

function App() {
  return (
    <>
        {/*<Pet/>z*/}
        {/*<List/>*/}
        {/*<AvailablePets/>*/}
        {/*<PetById/>*/}
        {/*<CreateAccount />*/}
        {/*<Login/>*/}
        <CheckIn/>
        <CheckOut/>
        <Subscription/>
    </>
  );
}

export default App;
