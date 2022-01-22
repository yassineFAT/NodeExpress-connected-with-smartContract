require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/px4RbbpYK7a9gWXsgsCDCQjSpxB5qqUA',
      accounts: ['0xa46cce56e8b64c86a06260de32f3f4cf860246e8eafd89415e4adf99f3f89579'],
    },
  },
};