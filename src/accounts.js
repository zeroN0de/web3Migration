import { BncClient } from "@binance-chain/javascript-sdk";
import Wallet from "ethereumjs-wallet";
import { ethers } from "ethers";
import gfChoice from "./gfChoice.js";

async function accounts() {
  const client = new BncClient("https://gnfd-bsc-testnet-dataseed1.bnbchain.org");
  let create = client.createAccount();
  //   console.log(create);

  const wallet = ethers.Wallet.createRandom();
  const privateKey = wallet.privateKey;

  const publicKey = wallet.publicKey;

  const address = wallet.address;
  console.log(`Address: ${address}`);
  console.log(`Public Key: ${publicKey}`);
  console.log(`Private Key: ${privateKey}`);
  gfChoice();
}

export default accounts;
