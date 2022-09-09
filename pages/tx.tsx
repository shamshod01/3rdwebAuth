import React from "react";
import AuthContainer from "../components/AuthContainer";
import TxComponent from "../components/TX";

const Tx = () => {
    return <AuthContainer childComp={<TxComponent/>}/>
};

export default Tx;
