import challengeAddress from './utils/Challenge.address.json';
import daoAddress from './utils/VowDAO.address.json';

export const ENVIRONMENT = process.env.APP_ENV || 'dev';
let challengeContract = '';
let daoContract = '';
if (ENVIRONMENT == 'dev' || ENVIRONMENT == 'local') {
    challengeContract = challengeAddress.address;
    daoContract = daoAddress.address;

} else {
    challengeContract = process.env.REACT_APP_DAO_CONTRACT || '0x5FbDB2315678afecb367f032d93F642f64180aa3';
    daoContract = process.env.REACT_APP_VOW_CONTRACT || '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';
}

export const REACT_APP_DAO_CONTRACT = challengeContract;
export const REACT_APP_VOW_CONTRACT = daoContract;