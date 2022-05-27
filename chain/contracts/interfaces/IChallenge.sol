// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

// This is a restricted interface for the purpose of building the DAO

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IFocusPool is IERC20 {
    function MINIMUM_LIQUIDITY() external pure returns (uint);
    function token() external view returns (IERC20);
    function getReserves() external view returns (uint112 _actualReserve0, uint112 _actualReserve1, uint112 virtualReserve0, uint112 virtualReserve1, uint32 blockTimestampLast);

    function setGovernance(address) external;
}
