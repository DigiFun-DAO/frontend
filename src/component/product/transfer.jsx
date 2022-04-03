import { CardBox, Input, LabelBox, BtnGroup } from '../Card';
import Backdrop from '@mui/material/Backdrop';
import { useSmallLoading, useSwitch } from "../Loading"
import { useWeb3React } from "@web3-react/core"
import React, { useEffect, useState, useMemo } from "react"
import { MANA_ABI } from '../../artifacts/contracts/manaAbi.js'
import { Aggregator_ABI } from '../../artifacts/contracts/Aggregator.js'
import Web3 from 'web3'
import { useMessage } from "../Message"
import { useApprove } from "../wallet/buyNFT"

const manaAddress = "0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4"
const aggregatorAddress = "0xCEC5168cd1DFA9b5Fbe44fE8960E0acd22A57F52"

export default function Transfer(props) {
  const [{
    name,
    intro,
    slogan,
    stack,
  }, setValue] = React.useState({
    intro: "",
    name: "",
    slogan: "",
    stack: ""
  })
  const { active, account } = useWeb3React()
  const { SmallLoading, loading, open: openLoading, close: closeLoading } = useSmallLoading();
  const { isOpen, open: openModal, close: closeModal } = useSwitch();
  const { message } = useMessage();

  const handleSubmit = async () => {

    if (name == '' || intro?.length <= 6 || intro === "<p><br></p>" || stack == '' || slogan == "") {
      message("warning", "Incomplete field filling!")
      return;
    }
    openLoading();

    const data = {
      name,
      intro,
      slogan,
    }

    if (nftState['isGroup'] === true) {
      aggregator.methods
        .buyNFTGroup(account, nftState['title'])
        .send({ from: account }, function (err, res) {
          finish();
          if (err) {
            message("error", "buy nft group failed");
          }
        })
    } else {
      aggregator.methods
        .buyNFT(account, nftState['title'])
        .send({ from: account }, function (err, res) {
          finish();
          if (err) {
            message("error", "buy nft failed");
          }
        })
    }
  };

  const finish = () => {
    message("success", "Transfer Success!");
    closeLoading();
    handleClose();
  }

  const handleClose = () => {
    setValue({
      intro: "",
      name: "",
      slogan: "",
      stack: ""
    });
    closeModal();
  };

  const strs = window.location.href.split('/')
  const nftState = global.products.find(item => item.id == strs[strs.length - 1])
  const w3 = new Web3(Web3.givenProvider)

  const mana = useMemo(() => new w3.eth.Contract(MANA_ABI, manaAddress), [MANA_ABI, manaAddress])
  const aggregator = useMemo(() => new w3.eth.Contract(Aggregator_ABI, aggregatorAddress), [Aggregator_ABI, aggregatorAddress])
  const { isApproved, approve, loadingApprove } = useApprove(mana, account, aggregatorAddress, w3.utils.toWei('' + nftState['prize'], 'ether'))

  return (
    <div>
      <button className={"buy_button_selected"}
        style={{ cursor: 'pointer', marginLeft: 10 }}
        onClick={() => {
          if (!active) return message("warning", "Please Connect Wallet!")
          openModal()
        }}
      >
        <div className="buy_button_words">Transfer</div>
      </button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isOpen}
      >
        <CardBox title="Transfer NFT" css={{ width: 600, background: "white", maxHeight: "90vh" }}>
          <LabelBox title="To Address">
            <Input maxLength={30} placeholder="Please enter 1111" type="name" value={name} setValue={setValue} />
          </LabelBox>
          <LabelBox title="2222">
            <Input maxLength={100} placeholder="Please enter 2222" type="slogan" value={slogan} setValue={setValue} />
          </LabelBox>
          <LabelBox title="3333">
            <Input maxLength={100} placeholder="Please enter 33333" type="slogan" value={slogan} setValue={setValue} />
          </LabelBox>
          <LabelBox title="4444">
            <Input placeholder="Please enter 44444" type="stack" value={stack} setValue={setValue} />
          </LabelBox>
          <BtnGroup onOk={() => {
            if (!active) return message("warning", "Please Connect Wallet!")
            if (loading || loadingApprove) return
            if (isApproved) {
              handleSubmit();
            } else {
              approve();
            }
          }} onCancel={handleClose} SmallLoading={SmallLoading} okText={isApproved ? null : "Approve"} />
        </CardBox>
      </Backdrop>
    </div>
  );
}