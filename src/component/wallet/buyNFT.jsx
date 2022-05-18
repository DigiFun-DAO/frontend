import { useWeb3React } from "@web3-react/core"
import React, { useEffect, useState, useMemo } from "react"
import { injected } from "./connectors"
import { MANA_ABI } from '../../artifacts/contracts/manaAbi.js'
import { Aggregator_ABI } from '../../artifacts/contracts/Aggregator.js'
import Web3 from 'web3'
import { useSmallLoading, useSwitch } from "../Loading"
import { useMessage } from "../Message"
import Notify from "bnc-notify";
import { aggregatorAddress } from "../product/productContent"

const toBN = Web3.utils.toBN;

/* export const BLOCKNATIVE_DAPPID = "c5a2921b-d638-45fe-a245-5387e8083d0d"
const options = {
  dappId: BLOCKNATIVE_DAPPID,
  networkId: 137
}
// initialize notify
const notify = Notify(options) */

export const useApproveERC20 = (contract, account, spender, needApproveAmount) => {
  const [isApproved, setIsApproved] = useState(false);
  const [isOpen, open, close] = useSwitch();
  const { message } = useMessage();
  const w3 = new Web3(Web3.givenProvider);

  useEffect(async () => {
    if (!contract || !account || !spender || !needApproveAmount) return
    open();
    let allowance = await contract.methods.allowance(account, spender).call();
    if (toBN(allowance).gte(toBN(needApproveAmount))) {
      setIsApproved(true)
    } else {
      setIsApproved(false)
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
      }).on('transactionHash', hash => {
        // 这种每天只有1000次免费监听， https://www.blocknative.com/pricing 价格表
        // pass the hash to notify.hash function for transaction updates and notifications
        /* const { emitter } = notify.hash(hash)

        // use emitter to listen to transaction events
        emitter.on('txSent', console.log)
        emitter.on('txPool', console.log)
        emitter.on('txConfirmed', close);
        emitter.on('txSpeedUp', console.log)
        emitter.on('txCancel', console.log)
        emitter.on('txFailed', console.log)
        emitter.on('all', console.log) */
      })

    timer = setInterval(async () => {
      let allowance = await contract.methods.allowance(account, spender).call();
      console.log(allowance)
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

export default function BuyNFT(props) {

  const strs = window.location.href.split('/');
  const products = global.products;
  const nftState = products?.find(item => item.id == strs[strs.length - 1])

  const { active, account, library, connector, activate, deactivate } = useWeb3React()
  const w3 = new Web3(Web3.givenProvider)

  const mana = useMemo(() => props.ERC20 ? new w3.eth.Contract(MANA_ABI, props.ERC20) : null, [MANA_ABI, props.ERC20])
  const aggregator = useMemo(() => new w3.eth.Contract(Aggregator_ABI, aggregatorAddress), [Aggregator_ABI, aggregatorAddress])
  const { SmallLoading, open, close, loading } = useSmallLoading();
  const { message } = useMessage();
  const { isApproved, approve, loadingApprove } = useApproveERC20(mana, account, aggregatorAddress, w3.utils.toWei('' + nftState['prize'], 'ether'))

  useEffect(() => {
    if (loadingApprove) {
      open()
    } else {
      close()
    }
  }, [loadingApprove])

  let button_selected = false

  async function buy() {
    open();
    await aggregator.methods.buyNFTs(account, props?.nids, props?.nids?.map(() => 1))
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
        if (!active) return message("warning", "Please Connect Wallet!")
        if (props?.nids?.length === 0) return message("warning", "Please Select NFT!")
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
