import { Button } from "@mui/material";
import { ethers } from "ethers";
import { REACT_APP_DAO_CONTRACT, REACT_APP_VOW_CONTRACT } from "../config";

import daoArtifact from "../utils/VowDAO.json";
import vowArtifact from "../utils/Challenge.json";

declare let window: any;
const daoContractAddress = REACT_APP_DAO_CONTRACT;
const vowContractAddress = REACT_APP_VOW_CONTRACT;
const daoAbi = daoArtifact.abi || "";
const vowAbi = vowArtifact.abi || "";

export const JoinChallenge = () => {

    const JoinChallenge = async () => {
        console.log('joining');

        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        const signer = provider.getSigner();
        console.log('contract address;', daoContractAddress);
        const dao = new ethers.Contract(daoContractAddress, daoAbi, signer);
        // signer.getAddress().then(o => console.log(o));
        console.log('addr:', await signer.getAddress());

        // Call join challenge (hardcoded id for now)

        const vow = new ethers.Contract(vowContractAddress, vowAbi, signer);
    }

    return (<div className='App-joinchallenge'>

        <Button variant="outlined" color="primary"
            onClick={JoinChallenge}>Join Challenge!</Button>
    </div>)
}