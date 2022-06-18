const { expect } = require("chai");
const { ethers } = require("hardhat");

const { Contract, Wallet } = require('ethers')
const { solidity, MockProvider, deployContract } = require('ethereum-waffle')
const { ecsign } = require('ethereumjs-util')

describe("VowDAO Tests", function () {
  let vow;
  let challenge;

  before(async function () {
    const Vow = await ethers.getContractFactory("VowDAO");
    vow = await Vow.deploy();
    await vow.deployed();
  })

  it("Ping DAO'", async function () {
    const pingResult = await vow.ping();
    console.log('testResult:', pingResult);

    expect(pingResult).to.equal("dao");

    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");
    // await setGreetingTx.wait();
    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });

  it("Deploy Challenge for DAO'", async function () {
    const Challenge = await ethers.getContractFactory("Challenge");
    challenge = await Challenge.deploy();
    await challenge.deployed();

    const pingResult = await challenge.ping();
    console.log('testResult:', pingResult);

    expect(pingResult).to.equal("challenge");

    // @! add challenge to Dao
    console.log('addr: ', challenge.address);
    const addChallengeTx = await vow.addChallenge(challenge.address);
    await addChallengeTx.wait();
    console.log('addChallengeTx: ', addChallengeTx.hash);


    const gotCha = await vow.getChallenge(challenge.address);
    console.log('gotCha: ', gotCha);

  });
});
