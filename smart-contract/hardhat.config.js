require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: "",
      accounts: [""],
      gas: 2100000,
      gasPrice: 80000000000,
    },
  },
};
