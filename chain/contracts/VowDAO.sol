// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "./interfaces/IVowDAO.sol";
import "./interfaces/IChallenge.sol";
import "./Challenge.sol";
import "hardhat/console.sol";

contract VowDAO is IVowDAO {
    address payable public owner;
    mapping(address => bool) public challenges;
    int256 challengeCount = 0;

    constructor() {
        owner = payable(msg.sender);
    }

    function ping() public pure returns (string memory) {
        return "dao";
    }

    function getName(address _contract) external view returns (string memory) {
        return IChallenge(_contract).getName();
    }

    function addChallenge(address _challengeContract) public {
        console.log('Adding Challenge');
        challenges[_challengeContract] = true;
        challengeCount++;
        console.log(_challengeContract);
    }

    function getChallenge(address challengeAddress) public view returns (bool) {
        return challenges[challengeAddress];
    }

    function acceptChallenge() public payable {
        require(msg.value >= 1 ether, "Deposit funds to play");

        // @! should compare with specific challenge rate
    }
}
