import { ethers } from 'ethers';
import { useEffect } from 'react';
import { login, logout, resetChainId, setChainId } from '../slices/authSlice';
import { useAppDispatch } from '../hooks';

declare let window: any;

export const Auth = () => {
    const dispatch = useAppDispatch();

    const setWallet = async () => {
        try {
          const { ethereum } = window;
          if (!ethereum) {
            console.log("Please, get MetaMask");
            return;
          } else {
            console.log("We have the ethereum object", ethereum);
          }
    
          const accounts = await ethereum.request({ method: "eth_accounts" });
    
          if (accounts.length !== 0) {
            dispatch(login(accounts[0]));
          } else {
            dispatch(logout());
          }
        } catch (error) {
          console.log(error);
          dispatch(logout());
        }
      }
    
      async function setChainName() {
        const { ethereum } = window;
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const network = await provider.getNetwork();
          dispatch(setChainId(network.chainId));
    
          const chainString = network.name + "(" + network.chainId + ")";
          console.log('playing on', chainString);
        }
        else {
          dispatch(resetChainId());
        }
      }
    
      useEffect(() => {
        setWallet();
    
        const { ethereum } = window;
        if (ethereum) {
          window.ethereum.on('accountsChanged', (accounts: any) => { setWallet(); });
          window.ethereum.on('chainChanged', async (chainId: any) => { setChainName(); });
          window.ethereum.on('connect', async (connectInfo: any) => { setChainName() });
          window.ethereum.on('disconnect', (error: any) => { console.log('disconnect wallet'); window.location.reload(); });
        }
      }, []);

    return (<></>);
}