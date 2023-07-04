const { network } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    log("__________________")
    const args = []
    const basicNft = await deploy("BasicNft", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })

    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        log("Verifying...")
        await verify(basicNft.address, args)
    }
    log("_________________")
}
module.exports.tags = ["all", "basicNft"]

// const { network } = require("hardhat")
// const { developmentChains } = require("../helper-hardhat-config")
// const { verify } = require("../utils/verify")

// module.exports = async ({ getNamedAccounts, deployments }) => {
//     const { deploy, log } = deployments
//     const { deployer } = await getNamedAccounts()

//     let args = []

//     const basicNft = await deploy("BasicNft", {
//         from: deployer,
//         args: args,
//         log: true,
//         waitConfirmations: network.config.blockConfirmations || 1,
//     })

//     log("______________________")
//     if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
//         log("Verifying...")
//         await verify(basicNft.address, args)
//     }
// }

// module.exports.tags = ["all", "basicNft"]
