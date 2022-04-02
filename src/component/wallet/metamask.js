import {useWeb3React} from "@web3-react/core"
import {useEffect} from "react"
import {injected} from "./connectors"

export default function Metamask() {
  const menu = (
    <mu-menu placement="top-start" open-on-hover>
      <mu-button color="primary">Open On Hover</mu-button>
      <mu-list slot="content">
        <mu-list-item button>
          <mu-list-item-title>Refresh</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-title>Send feedback</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-title>Settings</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-title>Help</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-title>Sign out</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-menu>
  );

  const {active, account, library, connector, activate, deactivate} = useWeb3React()

  async function connect() {
    try {
      await activate(injected)
      localStorage.setItem('isWalletConnected', true)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
      localStorage.setItem('isWalletConnected', false)
    } catch (ex) {
      console.log(ex)
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
    <div className="header_wallet">
      {
        active ?
          <div className="dropdown">
            <img className="icon_wallet" src={require("../../assets/wallet.svg").default}/>
            <div className="dropdown-content">
              <div>{account.substring(0, 4) + "..." + account.substring(account.length - 8)}</div>
              <div onClick={disconnect}>Log out</div>
            </div>
          </div>
          :
          <button className="button_wallet"
                  style={{cursor: 'pointer'}}
                  onClick={connect}>
            <div className="wallet_selected">Connect Wallet</div>
          </button>
      }

    </div>
  )
}
