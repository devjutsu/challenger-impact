const hre = require("hardhat");
const fs = require('fs');
const path = require("path")

async function main() {
  // await hre.run('compile');


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

  const Challenge = await hre.ethers.getContractFactory("Challenge");
  const challenge = await Challenge.deploy();
  await challenge.deployed();

  var src1 = path.join(__dirname, '..', 'artifacts', 'contracts', 'Challenge.sol', 'Challenge.json');
  const dst1 = path.join(__dirname, '..', '..', 'app', 'src', 'utils', 'Challenge.json');

  fs.copyFile(src1, dst1, (err) => {
    if (err) throw err;
    else console.log('File was copied to utils');
  });

  console.log("Challenge deployed to:", challenge.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
