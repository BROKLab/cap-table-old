import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre) {};
export default func;

module.exports.tags = ["migration"];
module.exports.runAtTheEnd = true;
