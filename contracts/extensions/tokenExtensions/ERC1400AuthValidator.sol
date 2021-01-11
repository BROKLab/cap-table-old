/*
 * This code has not been reviewed.
 * Do not use or deploy this code before reviewing it personally first.
 */
pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/math/SafeMath.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/IERC20.sol";

import "../../ERC1820/ERC1820Client.sol";
import "../../interface/ERC1820Implementer.sol";

import "../../IERC1400.sol";

import "../../IAuthProvider.sol";

import "./IERC1400TokensValidator.sol";

/**
 * @notice Interface to the Minterrole contract
 */
interface IMinterRole {
    function isMinter(address account) external view returns (bool);
}

contract ERC1400AuthValidator is
    IERC1400TokensValidator,
    ERC1820Client,
    ERC1820Implementer
{
    using SafeMath for uint256;

    string internal constant ERC1400_TOKENS_VALIDATOR =
        "ERC1400TokensValidator";
    string internal constant ERC1400_AUTH_VALIDATOR = "ERC1400AuthValidator";
    IAuthProvider internal _authProvider;

    constructor(address authProviderAddress) public {
        ERC1820Implementer._setInterface(ERC1400_TOKENS_VALIDATOR);
        ERC1820Implementer._setInterface(ERC1400_AUTH_VALIDATOR);
        _authProvider = IAuthProvider(authProviderAddress);
    }

    /**
     * @dev Verify if a token transfer can be executed or not, on the validator's perspective.
     * @param token Token address.
     * @param payload Payload of the initial transaction.
     * @param partition Name of the partition (left empty for ERC20 transfer).
     * @param operator Address which triggered the balance decrease (through transfer or redemption).
     * @param from Token holder.
     * @param to Token recipient for a transfer and 0x for a redemption.
     * @param value Number of tokens the token holder balance is decreased by.
     * @param data Extra information.
     * @param operatorData Extra information, attached by the operator (if any).
     * @return 'true' if the token transfer can be validated, 'false' if not.
     */
    function canValidate(
        address token,
        bytes calldata payload,
        bytes32 partition,
        address operator,
        address from,
        address to,
        uint256 value,
        bytes calldata data,
        bytes calldata operatorData // Comments to avoid compilation warnings for unused variables.
    ) external view returns (bool) {
        return
            _canValidate(
                token,
                payload,
                partition,
                operator,
                from,
                to,
                value,
                data,
                operatorData
            );
    }

    /*
     * @dev Function called by the token contract before executing a transfer.
     * @param payload Payload of the initial transaction.
     * @param partition Name of the partition (left empty for ERC20 transfer).
     * @param operator Address which triggered the balance decrease (through transfer or redemption).
     * @param from Token holder.
     * @param to Token recipient for a transfer and 0x for a redemption.
     * @param value Number of tokens the token holder balance is decreased by.
     * @param data Extra information.
     * @param operatorData Extra information, attached by the operator (if any).
     * @return 'true' if the token transfer can be validated, 'false' if not.
     */
    function tokensToValidate(
        bytes calldata payload,
        bytes32 partition,
        address operator,
        address from,
        address to,
        uint256 value,
        bytes calldata data,
        bytes calldata operatorData // Comments to avoid compilation warnings for unused variables.
    ) external {
        require(
            _canValidate(
                msg.sender,
                payload,
                partition,
                operator,
                from,
                to,
                value,
                data,
                operatorData
            ),
            "A7"
        );
    }

    /**
     * @dev Verify if a token transfer can be executed or not, on the validator's perspective.
     * @param token Token address.
     * @param payload Payload of the initial transaction.
     * @param partition Name of the partition (left empty for ERC20 transfer).
     * @param operator Address which triggered the balance decrease (through transfer or redemption).
     * @param from Token holder.
     * @param to Token recipient for a transfer and 0x for a redemption.
     * @param value Number of tokens the token holder balance is decreased by.
     * @param data Extra information.
     * @param operatorData Extra information, attached by the operator (if any).
     * @return 'true' if the token transfer can be validated, 'false' if not.
     */
    function _canValidate(
        address token,
        bytes memory payload,
        bytes32 partition,
        address operator,
        address from,
        address to,
        uint256 value,
        bytes memory data,
        bytes memory operatorData // Comments to avoid compilation warnings for unused variables.
    ) internal view returns (bool) {
        // TODO Auth provider here
        bool hasAuthenticated =
            _authProvider.hasAuthenticated(to, now - 365 days);
        require(
            hasAuthenticated,
            "TO address NOT authenticated in last 365 days."
        );
        return hasAuthenticated;
    }
}
