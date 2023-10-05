// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


contract SwissProject {
    uint256 private magicNumber = 5;


    //function to change the magic Number
    function changeMagicNumber(uint256 _newNumber) public {
        magicNumber = _newNumber;
    }

    //function to return the magic Number
    function getMagicNumber() public view returns (uint256) {
        return magicNumber;
    }
    
    
}
