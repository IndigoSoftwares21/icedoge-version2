import './walletbutton.css';
import '../index.css';
import 'animate.css';

import React, { useState } from "react";

import { ConnectKitButton } from "connectkit";
import styled from "styled-components";

const WalletButton = () => {

  
  let openSwap =()=>{
   
      document.querySelector('.buy-card-overlay').style.display = 'flex';
      
    
    
    
  }

 
  return (
    <ExampleButton />
  )
}

export default WalletButton



export const Buybutton = () => {
  const [rendered, setRendered] = useState("");
  let openSwap =()=>{
    document.querySelector('.buy-card-overlay').style.display = 'flex';  
}
  return (
   <ConnectKitButton.Custom>
      {({ isConnected, show, truncatedAddress, ensName }) => {
        return (
          <>
            {isConnected ? 
              <button
              className='read-white-btn animate__animated animate__pulse animate__infinite'
              onClick={openSwap}
              >
                <span style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "none", fontSize: "16px" }}>
                  Buy Now
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
               </button>
            : 
            <button
             className='read-white-btn animate__animated animate__pulse animate__infinite'
              onClick={show}
             >
               <span style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "none", fontSize: "16px" }}>
                Connect wallet 
                <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
              </button>}
             
          </>
        );
      }}
   </ConnectKitButton.Custom>
  )
}
export const Swapbutton = () => {
  const [rendered, setRendered] = useState("");
  let openSwap =()=>{
    document.querySelector('.buy-card-overlay').style.display = 'flex';  
}
  return (
   <ConnectKitButton.Custom>
      {({ isConnected, show, truncatedAddress, ensName }) => {
        return (
          <>
            {isConnected ? 
              <button
              className='read-white-btn animate__animated animate__pulse animate__infinite'
              onClick={openSwap}
              >
                <span style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "none", fontSize: "16px" }}>
                  Open IceDoge Swap
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
               </button>
            : 
            <button
             className='read-white-btn animate__animated animate__pulse animate__infinite'
              onClick={show}
             >
               <span style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "none", fontSize: "16px" }}>
                Connect wallet 
                <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
              </button>}
             
          </>
        );
      }}
   </ConnectKitButton.Custom>
  )
}
export const Icebutton = () => {
  const [rendered, setRendered] = useState("");
  let openSwap =()=>{
    document.querySelector('.buy-card-overlay').style.display = 'flex';  
}
  return (
   <ConnectKitButton.Custom>
      {({ isConnected, show, truncatedAddress, ensName }) => {
        return (
          <>
            {isConnected ? 
              <button
              className='buy-btn-div'
              onClick={openSwap}
              >
                <span style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "none", fontSize: "16px" }}>
                  BUY $ICEDOGE
            
                </span>
               </button>
            : 
            <button
             className='read-white-btn animate__animated animate__pulse animate__infinite'
              onClick={show}
             >
               <span style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "none", fontSize: "16px" }}>
                Connect wallet 
                <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
              </button>}
             
          </>
        );
      }}
   </ConnectKitButton.Custom>
  )
}

const StyledButton = styled.button`
   border-radius: 15px;
    background: #5ADAFF;
    box-shadow: 0px 0px 30px #5ADAFF;
    padding: 12px 20px;
    height: fit-content;
    font-size:15px;
    color: rgb(12, 12, 12);
    border:none;
    outline:none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 40px -6px #1a88f8;
  }
  &:active {
    transform: translateY(-3px);
    box-shadow: 0 6px 32px -6px #1a88f8;
  }
`;

export const ExampleButton = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, truncatedAddress, ensName }) => {
        return (
          <StyledButton onClick={show}>
            {isConnected ? ensName ?? <span style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "none", fontSize: "16px" }}>
       <p style={{fontSize:'7px', marginRight:'10px', animation: 'blink 1s linear infinite'}}>🔴</p>
       {truncatedAddress}
       </span> :   <span style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "none", fontSize: "16px" }}>
      Connect Wallet
    <ion-icon name="chevron-forward-outline" />
      </span>}
          </StyledButton>
        );
      }}
    </ConnectKitButton.Custom>
  );
};
const StyledButton2 = styled.button`
   border-radius: 15px;
    background: #5ADAFF;
    box-shadow: 0px 0px 30px #5ADAFF;
    padding: 12px 20px;
    height: fit-content;
    font-size:15px;
    color: rgb(12, 12, 12);
    border:none;
    outline:none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 40px -6px #1a88f8;
  }
  &:active {
    transform: translateY(-3px);
    box-shadow: 0 6px 32px -6px #1a88f8;
  }
`;

export const ExampleButton2 = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, truncatedAddress, ensName }) => {
        return (
          <StyledButton2 onClick={show}>
            {isConnected ? ensName ?? truncatedAddress : "Connect Wallet"}
          </StyledButton2>
        );
      }}
    </ConnectKitButton.Custom>
  );
};

