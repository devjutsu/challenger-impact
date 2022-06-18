const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("tmp", function () {
  it("Hz'", async function () {
    const Vow = await ethers.getContractFactory("Vow");

    const vow = await Vow.deploy();
    await vow.deployed();

    const testResult = await vow.test();
    console.log('testResult:', testResult);

    expect(testResult).to.equal("12345");

    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");
    // await setGreetingTx.wait();
    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
