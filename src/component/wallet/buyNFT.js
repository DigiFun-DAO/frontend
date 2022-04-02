import {useWeb3React} from "@web3-react/core"
import React, {useEffect} from "react"
import {injected} from "./connectors"
import {MANA_ABI} from '../../artifacts/contracts/manaAbi.js'
import {Aggregator_ABI} from '../../artifacts/contracts/Aggregator.js'
import Web3 from 'web3'

const manaAddress = "0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4"
const aggregatorAddress = "0xCEC5168cd1DFA9b5Fbe44fE8960E0acd22A57F52"

export default function BuyNFT() {

  const strs = window.location.href.split('/')
  const nftState = global.products.find(item => item.id == strs[strs.length - 1])

  const {active, account, library, connector, activate, deactivate} = useWeb3React()
  const w3 = new Web3(Web3.givenProvider)

  const mana = new w3.eth.Contract(MANA_ABI, manaAddress)
  const aggregator = new w3.eth.Contract(Aggregator_ABI, aggregatorAddress)

  let button_selected = false

  async function buy() {
    let allowance = await mana.methods.allowance(account, aggregatorAddress).call()
    if (w3.utils.toWei(allowance) < w3.utils.toWei(''+nftState['prize'], 'ether')) {
      mana.methods
        .approve(aggregatorAddress, w3.utils.toWei("999999999999", 'ether'))
        .send({from: account}, function (err, res) {
          if (err) {
            window.alert("approve allowance failed")
          }
        })
    } else if (nftState['isGroup'] === true){
      aggregator.methods
        .buyNFTGroup(account, nftState['title'])
        .send({from: account}, function (err, res) {
          if (err) {
            window.alert("buy nft group failed")
          }
        })
    } else {
      aggregator.methods
        .buyNFT(account, nftState['title'])
        .send({from: account}, function (err, res) {
          if (err) {
            window.alert("buy nft failed")
          }
        })
    }
  }


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
    <button className={button_selected === true ? "buy_button_selected" : "buy_button_empty"}
            style={{cursor: 'pointer'}}
            onMouseEnter={() => {
              button_selected = true
            }}
            onMouseLeave={() => {
              button_selected = false
            }}
      onClick={buy}
    >
      <div className="buy_button_words">BUY</div>
    </button>
  )
}
