import { useWeb3 } from "@3rdweb/hooks"
import {useRouter} from "next/router";
import React, {useEffect} from "react";
import {useRecoilState} from "recoil";
import {authState} from "./authState";


const LoginComponent: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(authState);
    const { connectWallet, address } = useWeb3();
    const router = useRouter();

    useEffect(()=>{
        if(address || isLoggedIn) {
            setIsLoggedIn(true)
            router.push("/balance")
        }
    },[address, isLoggedIn])

    function isMobileDevice() {
        return 'ontouchstart' in window || 'onmsgesturechange' in window;
    }

    const handleLogin = async () => {
        const dappUrl = "shamshod.com";
        const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl;
        if(isMobileDevice()){
            window.location.href = metamaskAppDeepLink
        }
        await connectWallet("injected")
    };

    return <div className="h-screen flex grid justify-center content-center bg-gray-900">
        <button className="bg-yellow-600 max-h-10 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleLogin}
        >
            Connect Wallet
        </button>
        <div className="text-gray-400 text-sm text-center pt-5">Check Your Balance and TXs</div>
    </div>
}

export default LoginComponent