const Rankify = artifacts.require('Rankify');

module.exports = function (deployer) {
  deployer.deploy(Rankify);
};
