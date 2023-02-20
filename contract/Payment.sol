// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

 contract Payment is ERC721{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    address payable public owner;
    mapping(address => uint256) public balances;

    constructor(string memory name, string memory symbol) ERC721(name, symbol){
        owner = payable(msg.sender);
    }

    function pay() public payable {
        balances[msg.sender] += msg.value;
    }

    function purchaseNFT() public{
        require(balances[msg.sender] >0, "INSUFFICIENT BALANCE");
        _tokenIds.increment();
        uint newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        balances[msg.sender] = 0;
    }
}