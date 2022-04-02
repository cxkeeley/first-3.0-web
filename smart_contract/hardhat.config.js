// https://eth-ropsten.alchemyapi.io/v2/uijscAGFth78GdlOmw_9-zua1E6efmuB

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/uijscAGFth78GdlOmw_9-zua1E6efmuB',
      accounts: [ '38e369a05611798e3c9f872a22712098c910921dfd34e7885bf75b2887c64e68' ]
    }
  }
}