import {useWeb3} from "@3rdweb/hooks";
import {useRouter} from "next/router";
import React, {useEffect} from "react";
import { authState } from './authState';
import {useRecoilState, useRecoilValue} from "recoil";

interface ParentCompProps {
    childComp?: React.ReactNode;
}

const AuthContainer: React.FC<ParentCompProps> =(prop) =>{
    const router = useRouter();
    const {address} = useWeb3();
    const isLoggedIn = useRecoilValue(authState);

    useEffect(()=>{
        if(!isLoggedIn){
            router.push("/login")
        }
    },[])

    if(!address && isLoggedIn) {
        return <div className="flex flex-col space-y-4 min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 outline-none focus:outline-none bg-gray-900">
            <div className="leading-none text-gray-100 pb-2">Loading...</div>
        </div>
    }

    return <>
        {prop.childComp}
    </>
}

export default AuthContainer