import React, { useState } from "react";
import { Body1, Body4, SubTitle3, SubTitle4 } from "~/constants/Typography";
import * as Styled from "./GHeader.style";
import logo from "~/assets/videos/Common/logo.gif";
import { Link } from "react-scroll";
import Colors from "~/constants/Colors";
import { HEADER_HEIGHT } from "~/constants/Variables";
import { ethers } from "ethers";
import { FlexCenter } from "~/constants/Common.style";
const GHeader = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [defaultAccount, setDefaultAccount] = useState<string | null>(null);
  const [userBalance, setUserBalance] = useState<string>("");
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");

  const connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      console.log("MetaMask Here!");

      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result: any) => {
          accountChangedHandler(result[0]);
          setConnButtonText("Wallet Connected");
          getAccountBalance(result[0]);
        })
        .catch((error: any) => {
          setErrorMessage(error.message);
        });
    } else {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };

  const disconnectWallerHandler = () => {
    console.log("disconnect");
  };

  // update account, will cause component re-render
  const accountChangedHandler = (newAccount: string | null) => {
    setDefaultAccount(newAccount);
    if (typeof newAccount === "string") {
      getAccountBalance(newAccount.toString());
    }
  };

  const getAccountBalance = (account: string) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [account, "latest"] })
      .then((balance: string) => {
        setUserBalance(ethers.utils.formatEther(balance));
      })
      .catch((error: any) => {
        setErrorMessage(error.message);
      });
  };

  const chainChangedHandler = () => {
    // reload the page to avoid any errors with chain change mid use of application
    window.location.reload();
  };

  // listen for account changes
  window.ethereum.on("accountsChanged", accountChangedHandler);

  window.ethereum.on("chainChanged", chainChangedHandler);
  return (
    <>
      <Styled.Container>
        <Link to="/" smooth>
          <Styled.LogoWrapper src={logo} alt="logo" round />
        </Link>
        <Styled.NavWrapper>
          <Link to="ghostscops" smooth spy offset={-HEADER_HEIGHT}>
            <SubTitle4>GHOSTSCOPS</SubTitle4>
          </Link>
          <Link to="minting" smooth spy offset={-HEADER_HEIGHT}>
            <SubTitle4>MINTING</SubTitle4>
          </Link>
          <Link to="story" smooth spy>
            <SubTitle4>STORY</SubTitle4>
          </Link>
          <Link to="weare" smooth spy>
            <SubTitle4>WE ARE</SubTitle4>
          </Link>
        </Styled.NavWrapper>
        <Styled.WalletButton>
          <SubTitle3
            color={Colors.yellow}
            onClick={
              defaultAccount ? disconnectWallerHandler : connectWalletHandler
            }
          >
            {connButtonText}
          </SubTitle3>
        </Styled.WalletButton>
        {defaultAccount && (
          <FlexCenter direction="column">
            <Styled.Account>{defaultAccount}</Styled.Account>
            <Body1>{userBalance} ETH</Body1>
          </FlexCenter>
        )}
      </Styled.Container>
      <Styled.EmptyHeader />
    </>
  );
};

export default GHeader;
