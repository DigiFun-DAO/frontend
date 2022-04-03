import { useWeb3React } from "@web3-react/core"
import React, { useEffect, useState, useMemo } from "react"
import { injected } from "./connectors"
import { MANA_ABI } from '../../artifacts/contracts/manaAbi.js'
import { Aggregator_ABI } from '../../artifacts/contracts/Aggregator.js'
import Web3 from 'web3'
import { useSmallLoading, useSwitch } from "../Loading"
import { useMessage } from "../Message"
const toBN = Web3.utils.toBN;

export const useApprove = (contract, account, spender, needApproveAmount) => {
  const [isApproved, setIsApproved] = useState(false);
  const { isOpen, open, close } = useSwitch();
  const { message } = useMessage();
  const w3 = new Web3(Web3.givenProvider);

  useEffect(async () => {
    if (!contract || !account || !spender || !needApproveAmount) return
    open();
    let allowance = await contract.methods.allowance(account, spender).call();
    if (toBN(allowance).gte(toBN(needApproveAmount))) {
      setIsApproved(true)
    }
    close();
  }, [contract, account, spender, needApproveAmount])

  const approve = async () => {
    open();
    let timer;
    await contract.methods
      .approve(spender, w3.utils.toWei("999999999999", 'ether'))
      .send({ from: account }, function (err) {
        if (err) {
          message("error", err?.message || "approve allowance failed");
          close();
          clearInterval(timer);
        }
      });

    timer = setInterval(async () => {
      let allowance = await contract.methods.allowance(account, spender).call();
      if (toBN(allowance).gte(toBN(needApproveAmount))) {
        message("success", "approve allowance success!");
        close();
        setIsApproved(true)
        clearInterval(timer);
      }
    }, 1000);
  }

  return {
    isApproved,
    approve,
    loadingApprove: isOpen
  }
}

const manaAddress = "0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4"
const aggregatorAddress = "0xCEC5168cd1DFA9b5Fbe44fE8960E0acd22A57F52"

export default function BuyNFT() {

  const strs = window.location.href.split('/')
  const nftState = global.products.find(item => item.id == strs[strs.length - 1])

  const { active, account, library, connector, activate, deactivate } = useWeb3React()
  const w3 = new Web3(Web3.givenProvider)

  const mana = useMemo(() => new w3.eth.Contract(MANA_ABI, manaAddress), [MANA_ABI, manaAddress])
  const aggregator = useMemo(() => new w3.eth.Contract(Aggregator_ABI, aggregatorAddress), [Aggregator_ABI, aggregatorAddress])
  const { SmallLoading, open, close, loading } = useSmallLoading();
  const { message } = useMessage();
  const { isApproved, approve, loadingApprove } = useApprove(mana, account, aggregatorAddress, w3.utils.toWei('' + nftState['prize'], 'ether'))

  useEffect(() => {
    if (loadingApprove) {
      open()
    } else {
      close()
    }
  }, [loadingApprove])

  let button_selected = false

  async function buy() {
    /* if (nftState['isGroup'] === true) {
      aggregator.methods
        .buyNFTGroup(account, nftState['title'])
        .send({ from: account }, function (err, res) {
          if (err) {
            message("error", "buy failed");
            close();
          }
        })
    } else {
      aggregator.methods
        .buyNFT(account, nftState['title'])
        .send({ from: account }, function (err, res) {
          if (err) {
            message("error", "buy failed");
            close();
          }
        })
    } */

    open();
    await aggregator.methods[nftState['isGroup'] ? "buyNFTGroup" : "buyNFT"](account, nftState['title'])
      .send({ from: account }, function (err) {
        if (err) {
          message("error", err?.message || "buy failed");
          close();
        }
      });
    message("success", "buy success!");
    close();
  }

  /*   useEffect(() => {
      if (!mana || !account || !aggregatorAddress) return
      mana.events.Approval({
        filter: { owner: account, spender: aggregatorAddress },
        fromBlock: "lastest"
      }, function (error, event) { console.log(event, "event1"); })
        .on("connected", function (subscriptionId) {
          console.log(subscriptionId, "subscriptionId");
        })
        .on('data', function (event) {
          console.log(event, "event2"); // 与上述可选的回调结果相同
        })
    }, [mana, account, aggregatorAddress]) */

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
      style={{ cursor: loading || loadingApprove ? "wait" : 'pointer' }}
      onMouseEnter={() => {
        button_selected = true
      }}
      onMouseLeave={() => {
        button_selected = false
      }}
      onClick={() => {
        if(!active) return message("warning", "Please Connect Wallet!")
        if (loading || loadingApprove) return
        if (isApproved) {
          buy()
        } else {
          approve()
        }
      }}
    >
      <SmallLoading size={20} color="white" >
        <div className="buy_button_words">{(isApproved ? "BUY" : "Approve")}</div>
      </SmallLoading>
    </button>
  )
}
