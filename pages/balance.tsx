import BalanceComponent from "../components/Balance";
import AuthContainer from "../components/AuthContainer";

const Balance = () =>{
    return <AuthContainer childComp={<BalanceComponent/>}/>
}

export default Balance