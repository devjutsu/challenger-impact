const hre = require("hardhat");
const fs = require('fs');
const path = require("path")

async function main() {
  // await hre.run('compile');

  const Impact = await hre.ethers.getContractFactory("Impact");
  const impact = await Impact.deploy();

  await impact.deployed();

  var src = path.join(__dirname, '..', 'artifacts', 'contracts', 'Impact.sol', 'Impact.json');
  const dst = path.join(__dirname, '..', '..', 'app', 'src', 'utils', 'Impact.json');

  fs.copyFile(src, dst, (err) => {
    if (err) throw err;
    else console.log('File was copied to utils');
  });

  console.log("Impact deployed to:", impact.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
