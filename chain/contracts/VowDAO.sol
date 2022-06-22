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

    function addChallenge(string calldata name) public {
        Challenge c = new Challenge(name);

        challenges[address(c)] = true;
        challengeCount++;
        // @! adds challenge located there to this DAO
    }

    function getChallenge(address challengeAddress) public view returns (bool) {
        return challenges[challengeAddress];
    }

    function acceptChallenge() public payable {
        // @! should compare with specific challenge rate
        require(msg.value >= 1 ether, "Deposit funds to play");
    }
}
