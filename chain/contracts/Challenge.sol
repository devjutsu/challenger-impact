// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "./interfaces/IChallenge.sol";
import "hardhat/console.sol";

contract Challenge {
    address payable creator;
    string name;

    mapping(bytes32 => Engagement) public challenges;

    struct Engagement {
        address payable person;
        Status status;
        uint256 funds;
    }

    struct Session {
        uint256 participantKey;
        address participant;
    }

    enum Status {
        None,
        InProgress,
        Completed
    }

    constructor(string memory _name) {
        console.log('constructed with name:', _name);
        creator = payable(msg.sender);
        name = _name;
    }

    function ping() public pure returns (string memory) {
        return "challenge";
    }

    function getName() public view returns (string memory) {
        console.log('checking name:', name);
        return name;
    }
}