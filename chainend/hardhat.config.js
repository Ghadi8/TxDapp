require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/mrawHmqWilvGqqRmVGdBzSUyfn0NvN5b",
      accounts: [
        "09045b31bc34ca0b2a07284da04364671fab47be907039ca83448796200a2284",
      ],
    },
  },
};
