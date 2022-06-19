import { useAppDispatch } from '../hooks';
import { login, logout } from "../slices/authSlice";
import { Button } from '@mui/material';

declare let window: any;

export const ConnectWallet = () => {

    const dispatch = useAppDispatch();

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
        <Button className="btn btn-insert-coin" onClick={connectWallet}>Connect Metamask</Button>
    );
}