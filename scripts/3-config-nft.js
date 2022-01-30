import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x6a89DCE2119F35Cf434ed7e882a299175152E745",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Membership NFT",
        description: "Show this NFT to get into VADAO!",
        image: readFileSync("scripts/assets/FNS-DAO_Membership.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()