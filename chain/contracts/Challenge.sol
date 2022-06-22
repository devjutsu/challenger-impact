// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import "./interfaces/IChallenge.sol";
import "hardhat/console.sol";

contract Challenge is IChallenge {
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

    function getResult() external pure returns(uint){
      uint a = 1; 
      uint b = 2;
      uint result = a + b;
      return result;
   }

    function ping() external pure returns (string memory) {
        return "challenge";
    }

    function getName() external view returns (string memory) {
        console.log('checking name:', name);
        return name;
    }
}