const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("VowDAO Tests", function () {

  let vow;
  before(async function () {
    const Vow = await ethers.getContractFactory("Vow");

    vow = await Vow.deploy();
    await vow.deployed();
  })

  it("Deploy DAO'", async function () {
    const testResult = await vow.test();
    console.log('testResult:', testResult);

    expect(testResult).to.equal("12345");

    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");
    // await setGreetingTx.wait();
    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });

  it("Deploy Challenge for DAO'", async function () {
    const testResult = await vow.test();
    console.log('testResult:', testResult);

    expect(testResult).to.equal("12345");

    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");
    // await setGreetingTx.wait();
    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
