import {useWeb3React} from "@web3-react/core"
import React, {useEffect} from "react"
import {injected} from "./connectors"
import Web3 from 'web3'
import manaABI from '../../artifacts/contracts/MANA.json'
import aggregatorABI from'../../artifacts/contracts/Aggregator.json'

const manaAddress = "0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4"
const aggregatorAddress = "0x3C3C499Db5605672995C448dd4262c1952Ac22a7"


export default function BuyNFT() {

  const strs = window.location.href.split('/')
  const nftState = global.products.find(item => item.id == strs[strs.length - 1])

  const {active, account, library, connector, activate, deactivate} = useWeb3React()
  const w3 = new Web3(library.provider)

  function getContract(library, abi, address) {
    return new w3.eth.Contract(abi, address)
  }

  console.log(manaABI)
  console.log(typeof manaABI)
  const mana = getContract(library, manaABI.abi, manaAddress)
  const aggregator = getContract(library, aggregatorABI, aggregatorAddress)
  mana.methods
    .approve(aggregatorAddress, w3.utils.toWei(nftState['prize'], 'ether'))
    .send({from: account}, function (err, res) {
    if (err) {
      console.log("An error occured", err)
      return
    }
    console.log("tx hash: ", res)
  })

  // contract.methods
  //   .exit()
  //   .send({
  //     from: account,
  //   })
  //   .on('transactionHash', (hash) => {
  //
  //   })

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem('isWalletConnected') === 'true') {
        try {
          await activate(injected)
          localStorage.setItem('isWalletConnected', true)
        } catch (ex) {
          console.log(ex)
        }
      }
    }
    connectWalletOnPageLoad()
  }, [])

  return (
    <button className={this.state.button_selected === true ? "buy_button_selected" : "buy_button_empty"}
            style={{cursor: 'pointer'}}
            onMouseEnter={() => {
              this.setState({button_selected: true})
            }}
            onMouseLeave={() => {
              this.setState({button_selected: false})
            }}
            // onCLick={
            //
            // }
    >
      <div className="buy_button_words">BUY</div>
    </button>
  )
}
