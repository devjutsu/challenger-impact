const hre = require("hardhat");
const fs = require('fs');
const path = require("path");
const { ethers } = require("hardhat");
const { isCommunityResourcable } = require("@ethersproject/providers");
require("@nomiclabs/hardhat-ethers");

async function main() {
  // await hre.run('compile');

  const testAddr = '0x6148a120673A16e3f7BeAaAa2Fe5fa24B0803fCE';

  const Dao = await hre.ethers.getContractFactory("VowDAO");
  const dao = await Dao.deploy();
  await dao.deployed();

  var src = path.join(__dirname, '..', 'artifacts', 'contracts', 'VowDAO.sol', 'VowDAO.json');
  const dst = path.join(__dirname, '..', '..', 'app', 'src', 'utils', 'VowDAO.json');

  fs.copyFile(src, dst, (err) => {
    if (err) throw err;
    else console.log('File was copied to utils');
  });

  console.log("DAO deployed to:", dao.address);
  // ----------------------------

  const signer = await hre.ethers.getSigner();
  console.log('signer:', signer.address);
  console.log('old balance:', ethers.utils.formatEther(await signer.getBalance()));

  var sendTx = await signer.sendTransaction({to: testAddr, value: ethers.utils.parseEther("100.0")});
  await sendTx.wait();
  console.log('100 ETH sent');
  console.log('new balance:', ethers.utils.formatEther(await signer.getBalance()));

  const provider = await hre.ethers.getDefaultProvider();
  // console.log('provider:', provider);
  const network = await provider.getNetwork();
  console.log('network:', network);
  console.log('signer network:', await signer.getChainId());
  const bal = await provider.getBalance(testAddr);
  console.log('tst balance:', ethers.utils.formatEther(bal));

  // to?: string,
  // from?: string,
  // nonce?: BigNumberish,

  // gasLimit?: BigNumberish,
  // gasPrice?: BigNumberish,

  // data?: BytesLike,
  // value?: BigNumberish,
  // chainId?: number

  // type?: number;
  // accessList?: AccessListish;

  // maxPriorityFeePerGas?: BigNumberish;
  // maxFeePerGas?: BigNumberish;

  // customData?: Record<string, any>;
  // ccipReadEnabled?: boolean;


  // const Challenge = await hre.ethers.getContractFactory("Challenge");
  // const challenge = await Challenge.deploy();
  // await challenge.deployed();

  // var src1 = path.join(__dirname, '..', 'artifacts', 'contracts', 'Challenge.sol', 'Challenge.json');
  // const dst1 = path.join(__dirname, '..', '..', 'app', 'src', 'utils', 'Challenge.json');

  // fs.copyFile(src1, dst1, (err) => {
  //   if (err) throw err;
  //   else console.log('File was copied to utils');
  // });

  // console.log("Challenge deployed to:", challenge.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
