//SPDX-License-Identifier: Unlicense
pragma solidity ^0.5.0;

contract IAuthProvider {
    function hasAuthenticated(address addr, uint256 latestAcceptedTimestamp)
        public
        view
        returns (bool);
}
