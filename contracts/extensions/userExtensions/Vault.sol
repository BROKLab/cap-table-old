// pragma solidity >=0.5.5;

// import "@openzeppelin/contracts/ownership/Ownable.sol";
// import "./token/ERC1400Raw/IERC1400TokensRecipient.sol";
// import "./token/ERC1400Partition/IERC1400Partition.sol";
// import "./token/ERC1820/ERC1820Implementer.sol";
// import "./token/ERC1820/ERC1820Client.sol";
// import "./token/ERC20/ERC20MintableBurnable.sol";


// contract Vault is
//     Ownable,
//     IERC1400TokensRecipient,
//     ERC1820Implementer,
//     ERC1820Client
// {
//     string internal constant ERC1400_TOKENS_RECIPIENT = "ERC1400TokensRecipient";
//     string internal constant ERC1400_CDP = "ERC1400CDP";
//     ERC20MintableBurnable internal _cToken;
//     ERC20MintableBurnable internal _pToken;
//     uint256 internal _status; // 0 open, 1 - locked , 2 - closed
//     uint256 internal _value;
//     bytes32 internal _partition;
//     address internal _erc1400ContractAddress;

//     bytes32 internal constant CAP_TABLE_CDP_FLAG = 0x4341505f5441424c455f4344505f464c41470000000000000000000000000000;

//     constructor(address erc1820) public ERC1820Client(erc1820) {
//         ERC1820Implementer._setInterface(ERC1400_TOKENS_RECIPIENT);
//         ERC1820Implementer._setInterface(ERC1400_CDP);
//         ERC1820Client.setInterfaceImplementation(
//             ERC1400_TOKENS_RECIPIENT,
//             address(this)
//         );
//         _cToken = new ERC20MintableBurnable();
//         _pToken = new ERC20MintableBurnable();
//     }

//     function getErc1400ContractAddress() external view returns (address) {
//         return _erc1400ContractAddress;
//     }

//     function getCToken() external view returns (address) {
//         return address(_cToken);
//     }

//     function getPToken() external view returns (address) {
//         return address(_pToken);
//     }

//     function closed() external view returns (bool) {
//         return _status == 2;
//     }

//     function closeCDP(address tokenReceiver) external returns (bool) {
//         _closeCDP(tokenReceiver);
//         return true;
//     }

//     function closeCDPWithBurn(address tokenReceiver) external returns (bool) {
//         _cToken.burnFrom(msg.sender, _cToken.totalSupply());
//         _pToken.burnFrom(msg.sender, _pToken.totalSupply());
//         _closeCDP(tokenReceiver);
//         return true;
//     }

//     function _closeCDP(address tokenReceiver) internal {
//         require(_cToken.totalSupply() == 0, "cToken must be 0 when closing");
//         require(_pToken.totalSupply() == 0, "pToken must be 0 when closing");
//         IERC1400Partition(_erc1400ContractAddress).transferByPartition(
//             _partition,
//             tokenReceiver,
//             _value,
//             "0x11"
//         );
//         _status = 2;
//     }

//     function canReceive(
//         bytes4, /*functionSig*/
//         bytes32, /*partition*/
//         address, /*operator*/
//         address from,
//         address to,
//         uint256 value,
//         bytes calldata data,
//         bytes calldata // Comments to avoid compilation warnings for unused variables. /*operatorData*/
//     ) external view returns (bool) {
//         return (_canReceive(from, to, value, data));
//     }

//     function tokensReceived(
//         bytes4, /*functionSig*/
//         bytes32 partition,
//         address, /*operator*/
//         address from,
//         address to,
//         uint256 value,
//         bytes calldata data,
//         bytes calldata // Comments to avoid compilation warnings for unused variables. /*operatorData*/
//     ) external {
//         require(_canReceive(from, to, value, data), "A6"); // Transfer Blocked - Receiver not eligible
//         _status = 1;
//         _erc1400ContractAddress = msg.sender;
//         _partition = partition;
//         _value = value;

//         bytes32 flag = _getCDPflag(data);
//         if (flag == CAP_TABLE_CDP_FLAG) {
//             _cToken.mint(from, value);
//             _pToken.mint(from, _getCDPPToken(data));
//         } else {
//             _cToken.mint(from, value);
//             _pToken.mint(from, value);
//         }
//     }

//     function _canReceive(
//         address, /*from*/
//         address, /*to*/
//         uint256, /*value*/
//         bytes memory // Comments to avoid compilation warnings for unused variables. /* data */
//     ) internal view returns (bool) {
//         if (_status != uint256(0)) {
//             //  "CDP status must be OPEN to receive tokens"
//             return false;
//         }
//         return true;
//     }

//     /*     function _getCDPCToken(bytes memory data)
//         internal
//         pure
//         returns (uint256 cTokenValue)
//     {
//         assembly {
//             cTokenValue := mload(add(data, 96))
//         }
//     } */

//     function _getCDPPToken(bytes memory data)
//         internal
//         pure
//         returns (uint256 pTokenValue)
//     {
//         assembly {
//             pTokenValue := mload(add(data, 64))
//         }
//     }

//     function _getCDPflag(bytes memory data)
//         internal
//         pure
//         returns (bytes32 flag)
//     {
//         assembly {
//             flag := mload(add(data, 32))
//         }
//     }
// }
