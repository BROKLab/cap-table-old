pragma solidity >=0.5.5;


interface ICapTableRegistry {
    event capTableAdded(address indexed capTableAddress);
    event capTableRemoved(address indexed capTableRemoved);

    function add(address adr) external;

    function remove(address adr) external;

    function list() external view returns (address[] memory capTableList);

    function listActive() external view returns (address[] memory capTableList);

    event controllerAdded(address indexed account);
    event controllerRemoved(address indexed account);

    function addController(address newController) external;

    function removeController(address controllerToRemove) external;

    function isController() external view returns (bool);
}
