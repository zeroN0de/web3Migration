const { Client } = require("@bnb-chain/greenfield-chain-sdk");

async function createBucket() {
  const gfClient = Client.create("https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org", "5600");
  console.log(gfClient);
  // console.log(gfClient);
  // const nodeInfo = await gfClient.basic.getNodeInfo();
  // console.log(nodeInfo);
  // const params = {
  //   bucketName: "testBucket",
  //   createor: "0xbAD6c18d669447465AF8F998635DD988CF5983bB",
  //   visibility: "VISIBILITY_TYPE_PUBLIC",
  //   chargedReadQuota: "10",
  //   spInfo: {
  //     endpoint: "https://gnfd-testnet-ethapi-us.bnbchain.org",
  //     sealAddress: "0xbAD6c18d669447465AF8F998635DD988CF5983bB",
  //     secondarySpAddresses: ["0x02Ad74D9B2349c2f0B1e9598aB018B3414dDe87A"],
  //   },
  // };
  // const txOption = {
  //   denom: "tBNB",
  //   gasLimit: 300000,
  //   gasPrice: "12345",
  //   payer: "0xbAD6c18d669447465AF8F998635DD988CF5983bB",
  //   granter: "",
  // };

  try {
    const sps = await gfClient.sp.getStorageProviders();
    console.log(sps);
    // const finalSps = (sps ?? []).filter((v) => v?.description?.moniker !== "QATest");
    // const selectIndex = 0;
    // const secondarySpAddresses = [...finalSps.slice(0, selectIndex), ...finalSps.slice(selectIndex + 1)].map(
    //   (item) => item.operatorAddress
    // );
    // const account = await gfClient.account.getAccount("0xbe11dfae013d6c82fb1154eb3408f416bd23cf74");
    // console.log(account);
    // await gfClient.bucket.createBucket(params, txOption);
    // console.log(gfClient);
  } catch (err) {
    console.log(err);
  }
}

module.exports = createBucket;
