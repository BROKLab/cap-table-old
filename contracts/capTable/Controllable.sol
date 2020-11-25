// SPDX-License-Identifier: MIT
pragma solidity >=0.5.5;


contract Controllable {
    address[] internal _controllers;
    mapping(address => bool) internal _isController;

    constructor(address[] memory controllers) {
        _setControllers(controllers);
    }

    function controllers() external view returns (address[] memory) {
        return _controllers;
    }

    function setControllers(address[] calldata operators) external {
        require(isController(msg.sender), "msg.sender not controller");
        _setControllers(operators);
    }

    function isController(address adr) public view returns (bool) {
        return _isController[adr];
    }

    function _setControllers(address[] memory adresses) internal {
        for (uint256 i = 0; i < _controllers.length; i++) {
            _isController[_controllers[i]] = false;
        }
        for (uint256 j = 0; j < adresses.length; j++) {
            _isController[adresses[j]] = true;
        }
        _controllers = adresses;
    }
}
