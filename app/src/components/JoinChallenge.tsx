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
        const dao = new ethers.Contract(daoContractAddress, daoAbi, signer);
        const vow = new ethers.Contract(vowContractAddress, vowAbi, signer);


        // --- @ prepare challenge by deploy.js

        // @! join challenge (by id)
        // 

    }

    return (<div className='App-joinchallenge'>

        <Button variant="outlined" color="primary"
            onClick={JoinChallenge}>Join Challenge!</Button>
    </div>)
}