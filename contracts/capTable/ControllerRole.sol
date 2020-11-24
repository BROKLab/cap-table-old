pragma solidity >=0.5.2;

import "openzeppelin-solidity/contracts/access/Roles.sol";

contract ControllerRole {
    using Roles for Roles.Role;
    Roles.Role internal CONTROLLER;

    event controllerAdded(address indexed account);
    event controllerRemoved(address indexed account);

    /* Contructor */
    constructor(address[] memory controllers) public {
        for (uint256 i = 0; i < controllers.length; i++) {
            CONTROLLER.add(controllers[i]);
        }
    }

    function addController(address newController) external onlyControllers {
        CONTROLLER.add(newController);
        emit controllerAdded(newController);
    }

    function removeController(address controllerToRemove)
        external
        onlyControllers
    {
        CONTROLLER.remove(controllerToRemove);
        emit controllerRemoved(controllerToRemove);
    }

    function isController() external view returns (bool) {
        return CONTROLLER.has(msg.sender);
    }

    /* Modifiers */

    modifier onlyControllers() {
        require(CONTROLLER.has(msg.sender), "msg.sender must be CONTROLLER");
        _;
    }
}
