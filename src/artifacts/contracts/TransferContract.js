export const TransferContract_ABI = [{
	"inputs": [],
	"stateMutability": "nonpayable",
	"type": "constructor"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "nid",
		"type": "uint256"
	}, {
		"internalType": "string",
		"name": "desc",
		"type": "string"
	}, {
		"internalType": "uint256",
		"name": "price",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "lowerBound",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "upperBound",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "balance",
		"type": "uint256"
	}, {
		"internalType": "address",
		"name": "addr",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "nftType",
		"type": "uint256"
	}],
	"name": "createNFT",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "string",
		"name": "groupName",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "platform",
		"type": "string"
	}, {
		"internalType": "uint256",
		"name": "nftType",
		"type": "uint256"
	}, {
		"internalType": "uint256[]",
		"name": "nids",
		"type": "uint256[]"
	}],
	"name": "createNFTGroup",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "nid",
		"type": "uint256"
	}],
	"name": "getNFT",
	"outputs": [{
		"internalType": "string",
		"name": "",
		"type": "string"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "string",
		"name": "groupName",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "platform",
		"type": "string"
	}],
	"name": "getNFTGroup",
	"outputs": [{
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}, {
		"internalType": "uint256[]",
		"name": "",
		"type": "uint256[]"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "uint256",
		"name": "nid",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "increasement",
		"type": "uint256"
	}],
	"name": "increaseNFT",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256[]",
		"name": "",
		"type": "uint256[]"
	}, {
		"internalType": "uint256[]",
		"name": "",
		"type": "uint256[]"
	}, {
		"internalType": "bytes",
		"name": "",
		"type": "bytes"
	}],
	"name": "onERC1155BatchReceived",
	"outputs": [{
		"internalType": "bytes4",
		"name": "",
		"type": "bytes4"
	}],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "address",
		"name": "",
		"type": "address"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}, {
		"internalType": "uint256",
		"name": "",
		"type": "uint256"
	}, {
		"internalType": "bytes",
		"name": "",
		"type": "bytes"
	}],
	"name": "onERC1155Received",
	"outputs": [{
		"internalType": "bytes4",
		"name": "",
		"type": "bytes4"
	}],
	"stateMutability": "nonpayable",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "bytes4",
		"name": "interfaceId",
		"type": "bytes4"
	}],
	"name": "supportsInterface",
	"outputs": [{
		"internalType": "bool",
		"name": "",
		"type": "bool"
	}],
	"stateMutability": "view",
	"type": "function"
}, {
	"inputs": [{
		"internalType": "address",
		"name": "to",
		"type": "address"
	}, {
		"internalType": "string",
		"name": "groupName",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "fromPlatform",
		"type": "string"
	}, {
		"internalType": "string",
		"name": "toPlatform",
		"type": "string"
	}],
	"name": "transferNFTGroup",
	"outputs": [],
	"stateMutability": "nonpayable",
	"type": "function"
}]