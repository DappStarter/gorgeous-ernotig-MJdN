require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess knee oil skull warrior ridge remain purity hover knife bottom sort'; 
let testAccounts = [
"0x21e59803ec298fb2009c00a55804eff874434c15ed90af80b55bc0d49e5bb3c5",
"0x37953a9b5111a5a6fcb5487bfde5efeddca8cbc576f3aa658ee4ceb9c74667e3",
"0xc09fb08c5f5ba2d1bdeab00334fab56a15385d34583f7fdc3fd8c6a6b0d84a40",
"0xace2cac1d1c4c705a0fa3c127ccc60d0fbd2aba5f7d095dda2f4c35e69b48a5d",
"0x0e7c844f391b3b9082862402ad86fc22e1b263882b52fd232775d02cb2fa30be",
"0xa416f075cbf2e11105d77ab329f0ff47cf0f7776119d16bd0f8471a7d14697df",
"0x347fb9a12a443697d51f85e3f78dca0d2f0db3f88190741bf85004f64de91c21",
"0xb4cce0b30b538fbf2b48fef07811e956c5dceb86c68aead1e491dd375109272c",
"0x8d8943fef25ae6190e3faa5b4878d5f6ad8cb50c2f0acb4eb460d30a0f3ebaa3",
"0xf33c61749c1ef544b0a09493e93fc5a72bb17e5e997adb94db7d39ec6df3d42a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

