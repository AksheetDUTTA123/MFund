const { ethers } = require("hardhat");
const fs = require("fs"); // Import the fs module

async function main() {
    const CrowdFunding = await ethers.getContractFactory("CrowdFunding");
    const crowdFunding = await CrowdFunding.deploy(1000); // Pass the target amount here (e.g., 1000 wei)

    // The contract is automatically deployed at this point, no need for crowdFunding.deployed()

    // Write the contract address to a file
    fs.writeFileSync("CrowdFundingAddress.txt", `CrowdFunding deployed to: ${crowdFunding.address}`);

    // Log the contract address to the console
    console.log("CrowdFunding deployed to:", crowdFunding.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });