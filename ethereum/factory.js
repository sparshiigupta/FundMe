import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x578A7cabe8550470cAC326F9837CbB181f0216C6"
);

export default instance;
