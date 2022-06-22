// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

// This is a restricted interface for the purpose of building the DAO


interface IChallenge {
    function getResult() external pure returns(uint);
    function ping() external pure returns (string memory);
    function getName() external view returns (string memory);

    // function init() external;
    // function lastCallBlock() external view returns(uint);
    // function attempt() external;
    // function finalize() external;
}
