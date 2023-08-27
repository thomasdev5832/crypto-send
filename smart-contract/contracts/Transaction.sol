// // SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

contract Transaction {
    
    // structs
    struct TransactionStructure {
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
    }

    TransactionStructure[] transactions;

    event TransferEth(
        address from,
        address receiver,
        uint256 amount,
        string message,
        uint256 timestamp
    );

    // public functions
    function sendEth(address payable _receiver, uint amount, string memory _message) public {
        transactions.push(
            TransactionStructure(
                msg.sender,
                _receiver,
                amount,
                _message,
                block.timestamp
            )
        );
        emit TransferEth(
            msg.sender,
            _receiver,
            amount,
            _message,
            block.timestamp
        );
    }

    function getTransactions() public view returns(TransactionStructure[] memory ){
        return transactions;
    }

}
