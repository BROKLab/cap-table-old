//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.0;

import "hardhat/console.sol";

contract AuthProvider {
    mapping(address => uint256) internal _auth;
    uint256 internal _ttl = 5 minutes;

    address[] internal _controllers;
    mapping(address => bool) internal _isController;

    constructor(address[] memory operators) {
        _setControllers(operators);
    }

    function lastAuth(address addr) external view returns (uint256) {
        return _auth[addr];
    }

    function authenticate(address addr) external {
        require(_isController[msg.sender], "msg.sender is not controller");
        _auth[addr] = block.timestamp;
    }

    function hasAuthenticated(address addr, uint256 latestAcceptedTimestamp)
        public
        view
        returns (bool)
    {
        uint256 authTimestamp = _auth[addr];
        if (
            authTimestamp != uint256(0) &&
            authTimestamp >= latestAcceptedTimestamp
        ) {
            return true;
        }
        return false;
    }

    function isAuthenticated(address addr) external view returns (bool) {
        return hasAuthenticated(addr, block.timestamp - _ttl);
    }

    function setTTL(uint256 time) external {
        require(_isController[msg.sender], "msg.sender is not controller");
        _ttl = time;
    }

    function controllers() external view returns (address[] memory) {
        return _controllers;
    }

    function setControllers(address[] calldata operators) external {
        require(_isController[msg.sender], "msg.sender is not controller");
        _setControllers(operators);
    }

    function _setControllers(address[] memory operators) internal {
        for (uint256 i = 0; i < _controllers.length; i++) {
            _isController[_controllers[i]] = false;
        }
        for (uint256 j = 0; j < operators.length; j++) {
            _isController[operators[j]] = true;
        }
        _controllers = operators;
    }
}
