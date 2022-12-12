// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract CampaignFactory {
    address payable[] public deployedCampaigns;

    function createCampaign(uint minimum,string memory name,string memory description,string memory image,uint target) public {
        address newCampaign = address(new Campaign(minimum, msg.sender,name,description,image,target));
        deployedCampaigns.push(payable(newCampaign));
    }

    function getDeployedCampaigns() public view returns (address payable[] memory) {
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }

    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;

    string public CampaignName;
    string public CampaignDescription;
    string public imageUrl;
    uint public targetToAchive;
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    constructor (uint minimum, address creator,string memory name,string memory description,string memory image,uint target) {
        manager = creator;
        minimumContribution = minimum;
        CampaignName=name;
        CampaignDescription=description;
        imageUrl=image;
        targetToAchive=target;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);

        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(string memory description, uint value, address recipient) public restricted {
        Request storage newRequest = requests.push(); 
        newRequest.description = description;
        newRequest.value= value;
        newRequest.recipient= recipient;
        newRequest.complete= false;
        newRequest.approvalCount= 0;
    }

    function approveRequest(uint index) public {
        Request storage request = requests[index];

        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];

        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);

        payable(request.recipient).transfer(request.value);
        request.complete = true;
    }
    
    function getSummary() public view returns (
      uint, uint, uint, uint, address,string memory,string memory ,string memory,uint
      ) {
        return (
          minimumContribution,
          address(this).balance,
          requests.length,
          approversCount,
          manager,
          CampaignName,
          CampaignDescription,
          imageUrl,
          targetToAchive
        );
    }
    
    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }
}