/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });


module.exports = {
  solidity: "0.8.20",
};
