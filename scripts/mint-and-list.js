const { ethers } = require("hardhat")

const PRICE = ethers.utils.parseEther("0.1")

const mintAndList = async () => {
    const nftMarketplaceFactory = await ethers.getContractFactory("NftMarketplace")
    const nftMarketplace = await nftMarketplaceFactory.deploy()
    await nftMarketplace.deployed()

    const basicNftFactory = await ethers.getContractFactory("BasicNft")
    const basicNft = await basicNftFactory.deploy()
    await basicNft.deployed()

    console.log("Minting...")
    const mintTx = await basicNft.mintNft()
    const mintTxReceipt = await mintTx.wait(1)
    console.log(mintTxReceipt.events[0])
    const tokenId = mintTxReceipt.events[0].args.tokenId

    console.log("Approving NFT...")
    const approvalTx = await basicNft.approve(nftMarketplace.address, tokenId)
    await approvalTx.wait(1)

    console.log("Listing NFT...")
    const tx = await nftMarketplace.listItem(basicNft.address, tokenId, PRICE)
    await tx.wait(1)
    console.log("Listing")
}

mintAndList()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
