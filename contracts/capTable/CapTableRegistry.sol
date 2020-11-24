pragma solidity >=0.5.5;

import "./Controllable.sol";


contract CapTableRegistry is Controllable {
    address[] internal _capTables;
    mapping(address => bool) internal _active;
    uint256 internal _activeCapTables;

    event capTableAdded(address indexed capTableAddress);
    event capTableRemoved(address indexed capTableRemoved);

    constructor(address[] memory controllers)
        public
        Controllable(controllers)
    {}

    function add(address adr) external {
        _addCapTable(adr);
    }

    function remove(address adr) external {
        _removeCapTable(adr);
    }

    function list() external view returns (address[] memory capTableList) {
        return _capTables;
    }

    function listActive()
        external
        view
        returns (address[] memory capTableList)
    {
        require(_activeCapTables > 0, "CapTable list is empty");
        address[] memory capTableAddressArray = new address[](_activeCapTables);
        uint256 indexForCapTableAddressArray;
        for (uint256 i = 0; i < _capTables.length; i++) {
            if (_active[_capTables[i]]) {
                capTableAddressArray[indexForCapTableAddressArray] = _capTables[i];
                indexForCapTableAddressArray++;
            }
        }
        return capTableAddressArray;
    }

    function _addCapTable(address adr) internal {
        require(isController(msg.sender), "msg.sender not controller");
        _capTables.push(adr);
        _active[adr] = true;
        _activeCapTables++;
        emit capTableAdded(adr);
    }

    function _removeCapTable(address adr) internal {
        require(isController(msg.sender), "msg.sender not controller");
        _active[adr] = false;
        _activeCapTables--;
        emit capTableRemoved(adr);
    }
}
