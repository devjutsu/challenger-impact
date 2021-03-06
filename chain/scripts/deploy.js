const hre = require("hardhat");
const fs = require('fs');
const path = require("path");
const { ethers } = require("hardhat");
const { isCommunityResourcable } = require("@ethersproject/providers");
const { stripVTControlCharacters } = require("util");
require("@nomiclabs/hardhat-ethers");

async function main() {
  // await hre.run('compile');

  const testAddr = '0x6148a120673A16e3f7BeAaAa2Fe5fa24B0803fCE';
  const provider = await hre.ethers.getDefaultProvider();

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

  var sendTx = await signer.sendTransaction({ to: testAddr, value: ethers.utils.parseEther("100.0") });
  await sendTx.wait();
  console.log('100 ETH sent');
  console.log('new balance:', ethers.utils.formatEther(await signer.getBalance()));

  // console.log('provider:', provider);
  const network = await provider.getNetwork();
  console.log('# network:', network.chainId, network.name);

  const Challenge = await hre.ethers.getContractFactory("Challenge");
  const challenge = await Challenge.deploy("Hello World!");
  await challenge.deployed();
  console.log("Challenge deployed to:", challenge.address);

  var src1 = path.join(__dirname, '..', 'artifacts', 'contracts', 'Challenge.sol', 'Challenge.json');
  const dst1 = path.join(__dirname, '..', '..', 'app', 'src', 'utils', 'Challenge.json');

  fs.copyFile(src1, dst1, (err) => {
    if (err) throw err;
    else console.log('File was copied to utils');
  });

  const chalContract = await hre.ethers.getContractAt("Challenge", challenge.address);
  console.log("With name:", await chalContract.functions.getName());

  const daoContract = await hre.ethers.getContractAt("VowDAO", dao.address);
  console.log('# ch in dao:', await daoContract.functions.getName(challenge.address));


  const chalToSave = {address: challenge.address};
  const chalData = JSON.stringify(chalToSave, null, 4);
  const challengeDst = path.join(__dirname, '..', '..', 'app', 'src', 'utils', 'Challenge.address.json');
  fs.writeFileSync(challengeDst, chalData, (err) => {
    if (err) {
      throw err;
    }
  });

  const daoToSave = {address: dao.address};
  const daoData = JSON.stringify(daoToSave, null, 4);
  const daoDst = path.join(__dirname, '..', '..', 'app', 'src', 'utils', 'VowDAO.address.json');
  fs.writeFileSync(daoDst, daoData, (err) => {
    if (err) {
      throw err;
    }
  });

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
