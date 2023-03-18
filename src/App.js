import { ConnectKitButton, ConnectKitProvider, getDefaultClient } from "connectkit";
import { WagmiConfig, createClient } from "wagmi";
import {
  usePrepareSendTransaction,
  useSendTransaction,
  useWaitForTransaction
} from 'wagmi'

import React from 'react'
import { ethers } from 'ethers';
import styled from "styled-components";
import { useDebounce } from 'use-debounce'

const alchemyId ="H9eQzFBw6hk3TDMC2q1nGwoZcCm60fyN";

const client = createClient(
  getDefaultClient({
    appName: "Eth App",
    alchemyId,
  }),
);
const App = () => {
  
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        /* Your App */
        <>
        <ConnectKitButton />
        <div>
        {/* Account content goes here */}
        <SendTransaction />
      </div>
        </>
      </ConnectKitProvider>
    </WagmiConfig>
  )
}

export default App


const StyledButton = styled.button`
  cursor: pointer;
  position: relative;
  display: inline-block;
  padding: 14px 24px;
  color: #ffffff;
  background: #1a88f8;
  font-size: 16px;
  font-weight: 500;
  border-radius: 10rem;
  box-shadow: 0 4px 24px -6px #1a88f8;

  transition: 200ms ease;
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
            {isConnected ? ensName ?? truncatedAddress : "Connect Wallet"}
          </StyledButton>
        );
      }}
    </ConnectKitButton.Custom>
  );
};

export function SendTransaction() {
  const [to, setTo] = React.useState('')
  const [debouncedTo] = useDebounce(to, 500)
 
  const [amount, setAmount] = React.useState('')
  const [debouncedAmount] = useDebounce(amount, 500)
 
  const { config } = usePrepareSendTransaction({
    request: {
      to: debouncedTo,
      value: debouncedAmount ? ethers.utils.parseEther(debouncedAmount) : undefined,
    },
  })
  const { data, sendTransaction } = useSendTransaction(config)
 
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })
 
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        sendTransaction?.()
      }}
    >
      <input
        aria-label="Recipient"
        onChange={(e) => setTo(e.target.value)}
        placeholder="0xA0Cf…251e"
        value={to}
      />
      <input
        aria-label="Amount (ether)"
        onChange={(e) => setAmount(e.target.value)}
        placeholder="0.05"
        value={amount}
      />
      <button disabled={isLoading || !sendTransaction || !to || !amount}>
        {isLoading ? 'Sending...' : 'Send'}
      </button>
      {isSuccess && (
        <div>
          Successfully sent {amount} ether to {to}
          <div>
            <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
          </div>
        </div>
      )}
    </form>
  )
}