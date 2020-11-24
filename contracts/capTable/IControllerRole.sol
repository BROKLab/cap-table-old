pragma solidity >=0.4.24;

contract ControllerRole {
    event controllerAdded(address indexed account);
    event controllerRemoved(address indexed account);
    function addController(address newController) external;
    function removeController(address controllerToRemove) external;
    function isController() external view returns (bool);
}
