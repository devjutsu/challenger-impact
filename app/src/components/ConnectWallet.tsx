import { useAppSelector, useAppDispatch } from '../hooks';
import { loggedIn, login, logout } from "../slices/authSlice";

declare let window: any;

export const ConnectWallet = () => {

    const dispatch = useAppDispatch();
    const isLoggedIn = useAppSelector(loggedIn);

    const connectWallet = async () => {

        try {
            const { ethereum } = window;

            if (!ethereum) {
                alert("Please, get MetaMask -> https://metamask.io/");
                return;
            }

            const accounts = await ethereum.request({ method: "eth_requestAccounts" });

            console.log("Connected", accounts[0]);
            dispatch(login(accounts[0]));
        } catch (error) {
            console.log(error)
            dispatch(logout());
        }
    }

    return (
        <div className="flex justify-center mb-1">
            <button className="btn btn-insert-coin" onClick={connectWallet}>Connect Metamask</button>
        </div>
    );
}