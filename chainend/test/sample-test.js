const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Transaction", function () {
  it("", async function () {
    const Transactions = await ethers.getContractFactory("Transactions");
    const transactions = await Transactions.deploy();
    await transactions.deployed();
  });
});
