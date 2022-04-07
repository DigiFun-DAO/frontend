import { CardBox, Input, LabelBox, BtnGroup } from '../Card';
import Backdrop from '@mui/material/Backdrop';
import { useSmallLoading, useSwitch } from "../Loading"
import { useWeb3React } from "@web3-react/core"
import React, { useEffect, useState, useMemo } from "react"
import { NFTContract_ABI } from '../../artifacts/contracts/NFTContract.js'
import { TransferContract_ABI } from '../../artifacts/contracts/TransferContract'
import Web3 from 'web3'
import { useMessage } from "../Message"
import { platforms } from "./productContent"

const transferAddress = "0xbED2387034955B9B94528FCd1F65af0288ebbB74"

export const useApproveERC721 = (contract, owner, operator) => {
  const [isApproved, setIsApproved] = useState(false);
  const [isOpen, open, close] = useSwitch();
  const { message } = useMessage();

  useEffect(async () => {
    if (!contract || !owner || !operator) return
    open();
    let res = await contract.methods.isApprovedForAll(owner, operator).call();
    setIsApproved(res);
    close();
  }, [contract, owner, operator])

  const approve = async () => {
    open();
    let timer;
    await contract.methods
      .setApprovalForAll(operator, true)
      .send({ from: owner }, function (err) {
        if (err) {
          message("error", err?.message || "approve allowance failed");
          close();
          clearInterval(timer);
        }
      })

    timer = setInterval(async () => {
      let res = await contract.methods.isApprovedForAll(owner, operator).call();
      if (res) {
        message("success", "approve nft success!");
        close();
        setIsApproved(true);
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

export default function Transfer(props) {
  const [{
    to,
    groupName,
    fromPlatform,
    toPlatform,
  }, setValue] = React.useState({
    to: "",
    groupName: props?.groupName || "",
    fromPlatform: "",
    toPlatform: ""
  })
  const { active, account } = useWeb3React()
  const { SmallLoading, loading, open: openLoading, close: closeLoading } = useSmallLoading();
  const [isOpen, openModal, closeModal] = useSwitch();
  const { message } = useMessage();

  const w3 = new Web3(Web3.givenProvider)
  const selectFromPlatform = useMemo(() => {
    const platform = platforms.find(item => item?.value === fromPlatform);
    return platform || {}
  }, [fromPlatform])

  const nftContract = useMemo(() => {
    if (!selectFromPlatform?.address) return
    return new w3.eth.Contract(NFTContract_ABI, selectFromPlatform?.address)
  }, [NFTContract_ABI, selectFromPlatform?.address]);

  const transferContract = useMemo(() => new w3.eth.Contract(TransferContract_ABI, transferAddress), [TransferContract_ABI, transferAddress])
  const { isApproved, approve, loadingApprove } = useApproveERC721(nftContract, account, transferAddress);

  useEffect(() => {
    if (loadingApprove) {
      openLoading()
    } else {
      closeLoading()
    }
  }, [loadingApprove])

  useEffect(() => {
    setValue((pre) => ({ ...pre, to: account || "" }));
  }, [account])

  const handleSubmit = async () => {
    if (to == '' || groupName === "" || fromPlatform == '' || toPlatform == "") {
      message("warning", "Incomplete field filling!")
      return;
    }
    if (!w3.utils.isAddress(to)) {
      message("warning", "Address format error!")
      return
    }
    openLoading();

    console.log(to, groupName, fromPlatform, toPlatform)
    await transferContract.methods
      .transferNFTGroup(to, groupName, fromPlatform, toPlatform)
      .send({ from: account }, function (err) {
        if (err) {
          message("error", err?.message || "buy nft group failed");
          closeLoading();
        }
      });
    closeLoading();
    message("success", "Transfer Success!");
  };

  const handleClose = () => {
    /* setValue({
      to: "",
      groupName: "",
      fromPlatform: "",
      toPlatform: ""
    }); */
    closeModal();
  };

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
        <CardBox title="Cross Platform Transfer" css={{ width: 600, background: "white", maxHeight: "90vh" }}>
          <LabelBox title="To Address">
            <Input maxLength={100} placeholder="Please enter address" type="to" value={to} setValue={setValue} />
          </LabelBox>
          <LabelBox title="Group Name">
            <Input maxLength={100} placeholder="Please enter group name" type="groupName" value={groupName} setValue={setValue} />
          </LabelBox>
          <LabelBox title="From Platform">
            <Input maxLength={100} placeholder="Please select from platform" type="fromPlatform" value={fromPlatform} setValue={setValue} selectList={platforms} />
          </LabelBox>
          <LabelBox title="To Platform">
            <Input maxLength={100} placeholder="Please select to platform" type="toPlatform" value={toPlatform} setValue={setValue} selectList={platforms} />
          </LabelBox>
          <BtnGroup onOk={() => {
            if (!active) return message("warning", "Please Connect Wallet!")
            if (!selectFromPlatform?.address) return message("warning", "Please Select Planfrom!")
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