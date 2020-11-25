// SPDX-License-Identifier: MIT
pragma solidity >=0.5.5;

import "./Controllable.sol";

contract CapTableRegistry is Controllable {
    address[] internal _capTables;
    mapping(address => bool) internal _active;
    mapping(address => bytes32) internal _addressToOrgNr;
    mapping(bytes32 => address) internal _orgNrToAddress;
    uint256 internal _activeCapTables;

    event capTableAdded(address indexed capTableAddress);
    event capTableRemoved(address indexed capTableRemoved);

    constructor(address[] memory controllers)
        Controllable(controllers)
    {}

    function add(address adr, bytes32 orgNr) external {
        _addCapTable(adr, orgNr);
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

    function _addCapTable(address adr, bytes32 orgNr) internal {
        require(isController(msg.sender), "msg.sender not controller");
        _capTables.push(adr);
        _active[adr] = true;
        _addressToOrgNr[adr] = orgNr;
        _orgNrToAddress[orgNr] = adr;
        _activeCapTables++;
        emit capTableAdded(adr);
    }

    function _removeCapTable(address adr) internal {
        require(isController(msg.sender), "msg.sender not controller");
        bytes32 orgNr = _addressToOrgNr[adr];
        _active[adr] = false;
        _addressToOrgNr[adr] = bytes32(0);
        _orgNrToAddress[orgNr] = address(0);
        _activeCapTables--;
        emit capTableRemoved(adr);
    }
}
