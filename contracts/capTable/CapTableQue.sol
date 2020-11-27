// SPDX-License-Identifier: MIT

pragma solidity >=0.5.5;

import "./Controllable.sol";
import "./CapTableRegistry.sol";

contract CapTableQue is Controllable {
    uint256 internal _quedCount;
    uint256 internal _approvedCount;
    uint256 internal _declinedCount;
    address[] internal _capTablesQue;
    mapping(address => uint256) internal _capTableStatus; // 0:not used 1:qued 2:approved 3:declined
    CapTableRegistry internal _CAP_TABLE_REGISTRY;
    mapping(address => bytes32) internal _capTableUuid;

    event qued(address indexed capTable);
    event statusUpdate(
        address indexed capTable,
        uint256 status,
        bytes32 reason
    );

    constructor(address[] memory controllers)
        Controllable(controllers)
    {}

    function setRegistry(address adr) external {
        require(isController(msg.sender), "msg.sender not controller");
        _CAP_TABLE_REGISTRY = CapTableRegistry(adr);
    }

    function getRegistry() external view returns (address capTableRegistry) {
        return address(_CAP_TABLE_REGISTRY);
    }

    function add(address adr, bytes32 uuid) external {
        require(adr != address(0), "No empty address");
        require(
            _capTableStatus[adr] == uint256(0),
            "Can only que address one-time"
        );
        _capTablesQue.push(adr);
        _quedCount++;
        _capTableStatus[adr] = 1;
        _capTableUuid[adr] = uuid;
        emit qued(adr);
    }

    function process(
        address adr,
        bool approved,
        bytes32 reason
    ) external {
        // require(adr != address(0), "No empty address");
        // require(isController(msg.sender), "msg.sender not controller");
        // require(_capTableStatus[adr] == 1, "Must be in que to process");
        _quedCount--;

        if (approved) {
            _CAP_TABLE_REGISTRY.add(adr, _capTableUuid[adr]);
            _approvedCount++;
            _capTableStatus[adr] = 2;
        } else {
            _declinedCount++;
            _capTableStatus[adr] = 3;
        }
        uint256 status = approved ? 2 : 3;
        emit statusUpdate(adr, status, reason);
    }

    function getStatus(address adr) external view returns (uint256) {
        return _capTableStatus[adr];
    }

    function info(address adr) external view returns (uint256 status, bytes32 uuid) {
        return (_capTableStatus[adr],_capTableUuid[adr] );
    }

    function list() external view returns (address[] memory capTableList) {
        return _capTablesQue;
    }

    function listQued() external view returns (address[] memory capTableList) {
        address[] memory capTableAddressArray = new address[](_quedCount);
        uint256 indexForCapTableAddressArray;
        for (uint256 i = 0; i < _capTablesQue.length; i++) {
            if (_capTableStatus[_capTablesQue[i]] == 1) {
                capTableAddressArray[indexForCapTableAddressArray] = _capTablesQue[i];
                indexForCapTableAddressArray++;
            }
        }
        return capTableAddressArray;
    }

    function listApproved()
        external
        view
        returns (address[] memory capTableList)
    {
        address[] memory capTableAddressArray = new address[](_approvedCount);
        uint256 indexForCapTableAddressArray;
        for (uint256 i = 0; i < _capTablesQue.length; i++) {
            if (_capTableStatus[_capTablesQue[i]] == 2) {
                capTableAddressArray[indexForCapTableAddressArray] = _capTablesQue[i];
                indexForCapTableAddressArray++;
            }
        }
        return capTableAddressArray;
    }

    function listDeclined()
        external
        view
        returns (address[] memory capTableList)
    {
        address[] memory capTableAddressArray = new address[](_declinedCount);
        uint256 indexForCapTableAddressArray;
        for (uint256 i = 0; i < _capTablesQue.length; i++) {
            if (_capTableStatus[_capTablesQue[i]] == 3) {
                capTableAddressArray[indexForCapTableAddressArray] = _capTablesQue[i];
                indexForCapTableAddressArray++;
            }
        }
        return capTableAddressArray;
    }
}
