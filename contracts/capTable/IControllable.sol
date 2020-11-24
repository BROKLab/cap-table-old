pragma solidity >=0.5.5;


contract Controllable {
    function controllers() external view returns (address[] memory);

    function setControllers(address[] calldata operators) external;

    function isController(address adr) public view returns (bool);
}
