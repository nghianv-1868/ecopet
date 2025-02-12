var HDWalletProvider = require('truffle-hdwallet-provider');
require('dotenv').config();
console.log('mnemonic', process.env);
module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*'
    },
    ganache: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*'
    },
    coverage: {
      host: 'localhost',
      network_id: '*',
      port: 8555,
      gas: 0xfffffffffff,
      gasPrice: 0x01
    },
    tomotestnet: {
      provider: () =>
        new HDWalletProvider(process.env.MNENOMIC, 'https://testnet.tomochain.com', 0, 1, true),
      network_id: '89',
      gas: 3000000,
      gasPrice: 20000000000000,
      gasLimit: 1000000
    },
    tomomainnet: {
      provider: () =>
        new HDWalletProvider(
          process.env.MNENOMIC,
          'https://rpc.tomochain.com',
          0,
          1,
          true,
          "m/44'/889'/0'/0/"
        ),
      network_id: '88',
      gas: 2000000,
      gasPrice: 10000000000000
    }
  },

  mocha: {
    // timeout: 100000
  },

  compilers: {
    solc: {
      version: '0.5.0', // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {
        // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: false,
          runs: 200
        }
        //  evmVersion: "byzantium"
      }
    }
  }
};
