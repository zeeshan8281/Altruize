const RoyalPets = artifacts.require("Royalpets");

module.exports = function (deployer) {
  deployer.deploy(RoyalPets);
};
