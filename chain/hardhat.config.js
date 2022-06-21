require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task("mine", "Mines blocks")
  .addParam("blocks", "Number of vlocks to mine")
  .setAction(async (taskArgs, hre) => {
  console.log("Start block: ", await ethers.provider.send("eth_blockNumber"));
  console.log(taskArgs.blocks);
  const b = parseInt(taskArgs.blocks);
  for (let i=0; i<b; i++) await ethers.provider.send("evm_mine"); // mines 5 blocks
  console.log("End block: ", await ethers.provider.send("eth_blockNumber"));
});


task("faucet", "Sends ETH to an address")
  .addPositionalParam("receiver", "The address that will receive them")
  .setAction(async ({ receiver }, { ethers }) => {
    if (network.name === "hardhat") {
      console.warn(
        "You are running the faucet task with Hardhat network, which" +
          "gets automatically created and destroyed every time. Use the Hardhat" +
          " option '--network localhost'"
      );
    }

    // const token = await ethers.getContractAt("Token", address.Token);
    // const [sender] = await ethers.getSigners();

    // const tx = await token.transfer(receiver, 100);
    // await tx.wait();

    const [sender] = await ethers.getSigners();

    const tx2 = await sender.sendTransaction({
      to: receiver,
      value: ethers.constants.WeiPerEther,
    });
    await tx2.wait();

    console.log(`Transferred 1 ETH to ${receiver}`);
  });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    mumbai: {
      url: process.env.MUMBAI_URL || "",
      accounts:
        process.env.MUMBAI_KEY !== undefined ? [process.env.MUMBAI_KEY] : [],
    },
  },
};
