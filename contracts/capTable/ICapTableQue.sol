pragma solidity >=0.5.5;


interface ICapTableQue {
    event qued(address indexed capTable);
    event statusUpdate(
        address indexed capTable,
        uint256 status,
        bytes32 reason
    );

    function setRegistry(address adr) external;

    function getRegistry() external view returns (address capTableRegistry);

    function add(address adr) external;

    function process(
        address adr,
        bool _approved,
        bytes32 _reason
    ) external;

    function getStatus(address adr) external view returns (uint256);

    function list() external view returns (address[] memory capTableList);

    function listQued() external view returns (address[] memory capTableList);

    function listApproved()
        external
        view
        returns (address[] memory capTableList);

    function listDeclined()
        external
        view
        returns (address[] memory capTableList);

    event controllerAdded(address indexed account);
    event controllerRemoved(address indexed account);

    function addController(address newController) external;

    function removeController(address controllerToRemove) external;

    function isController() external view returns (bool);
}
