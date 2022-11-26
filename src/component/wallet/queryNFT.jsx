import { useWeb3React } from "@web3-react/core"
import { useEffect, useMemo } from "react"
import { injected } from "./connectors"
import { Aggregator_ABI } from '../../artifacts/contracts/Aggregator.js'
import Web3 from 'web3'
import {aggregatorAddress} from "../product/productContent"

export default function QueryNFT(props) {

  const { active, account, library, connector, activate, deactivate } = useWeb3React()
  const w3 = new Web3(Web3.givenProvider)

  const aggregator = useMemo(() => new w3.eth.Contract(Aggregator_ABI, aggregatorAddress), [Aggregator_ABI, aggregatorAddress])

  async function buy() {
    return await aggregator.methods.getNFT(props).call()
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
    buy()
  )
}
