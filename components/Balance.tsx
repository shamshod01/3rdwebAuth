import {useWeb3} from "@3rdweb/hooks";
import React from "react";
import {useRouter} from "next/router";

const BalanceComponent: React.FC = () =>{
    const {balance} = useWeb3();
    const router = useRouter();


    return <div className="flex flex-col space-y-4 min-w-screen h-screen justify-center items-center bg-gray-900">
        <div className="flex flex-col p-8 bg-gray-800 shadow-md rounded-2xl">
            <div className="flex flex-col ml-3">
                <div className="font-medium leading-none text-gray-100 pb-2">Your current balance</div>
                <p className="text-md text-gray-500 leading-none mt-1">{balance?.formatted} <span className="text-yellow-500">ETH</span></p>
            </div>
        </div>
            <button
                onClick={()=>router.push("/tx")}
                className="bg-yellow-600 max-h-10 hover:bg-yellow-700 text-white font-bold py-2 px-10 rounded">
                check transactions
            </button>
    </div>
}

export default BalanceComponent