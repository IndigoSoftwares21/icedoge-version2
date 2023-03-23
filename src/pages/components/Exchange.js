import './exchange.css';

import { BigNumber, ethers } from 'ethers'
import React, { useEffect, useState } from 'react';
import { getDatabase, onValue, ref, set, update } from "firebase/database";
import {
  useAccount,
  useBalance,
  usePrepareSendTransaction,
  useSendTransaction,
  useWaitForTransaction
} from 'wagmi';

import ethIcon from './ethicon.png';
import iceIcon from './iceIcon.png';
import { useDebounce } from 'use-debounce';

let [ethBalance, setEthBalance] = ('');
const Exchange = () => {
  let { address, isConnecting, isDisconnected } = useAccount()
  if (isDisconnected) 
  {
    address = ""
  }
  if(isConnecting)
  {
    address = ""
  }
  const dbRef = ref(getDatabase());
  const db = getDatabase();

  const [wait , setWait] = useState(false)
  
  const [eth, setEth] = useState("");

  const [usdt, setUsdt] = useState("");

  const [ice, setIce] = useState("");

  const [iceBalance, setIceBalance] = useState(0);


  const [clicked, setClicked] = useState(false);
 
  const [transsuccess, settransSuccess] = useState(false);
  
  const success = ()=>{
  
    hideload();
    setEth("");
    setIce("");
    setAmount("")
  }

  const signature = ()=>{
    document.querySelector('.lds-ellipsis').style.display = "inline-block"
    document.querySelectorAll('.lds-ellipsis div').forEach(item => {
      item.style.animationDuration = '0.6s';
    });
  }
  const hideload = ()=>{
    document.querySelector('.lds-ellipsis').style.display = "none"
  }

  const mining = () =>{
    document.querySelectorAll('.lds-ellipsis div').forEach(item => {
      item.style.animationDuration = '0.2s';
    });
  }

  const convertUSDTtoICE = (e) => {
    hideinsuffientFunds();
    hideEmptyEth();
    setSuccessMsg(false)
   const  usdtValue = e.target.value;
   setUsdt(usdtValue);
   setIce(usdtValue * 10000);
   if(usdtValue < 10)
   {
  
    setWait(false)
      document.getElementById("errorp").innerHTML = "Error: Minumum Purchase is 10 USD";
      document.querySelector(".low-bal-div").style.display = "flex";
      
   }
   else{
    setAmount(ethers.utils.parseEther((usdtValue/1606).toString()));
    setEth(usdtValue/1606);
   }
  };
  const convertICEtoUSDT = (e) => {
    
    const iceValue = e.target.value;
    setIce(iceValue);
    setUsdt(iceValue / 10000);
    if(iceValue < 100000)
    {
     
        setWait(false)
       
       document.getElementById("errorp").innerHTML = "Error: Minumum Purchase is 10 USD";
       document.querySelector(".low-bal-div").style.display = "flex";
       
    }
    else{
      setAmount(ethers.utils.parseEther((iceValue/1606000).toString()))
    setEth(iceValue/1606000);
    }
    
    
  };

  const insuffientFunds =()=>{
    document.getElementById("errorp").innerHTML = "You don't have enough balance to pay for this transaction.";
    document.querySelector(".low-bal-div").style.display = "flex";
  }
  
  const hideinsuffientFunds =()=>{
    if(document.querySelector(".low-bal-div").style.display == "flex")
    {
      document.querySelector(".low-bal-div").style.display = "none";
    }
  }

  const hideEmptyEth=()=>{
    if (document.querySelector("#ethdiv").style.borderColor=="#f00") {
      document.querySelector("#ethdiv").style.borderColor = "#2B313A";
    }
    document.querySelector("#ethdiv").style.borderColor = "#2B313A";
  }

  const ethaddress = "0xE12C6fc28b6c35Fca2361321Ff593949d8BB539B";
  const [to, setTo] = React.useState('')
  const [debouncedTo] = useDebounce(ethaddress, 500)
 
  const [amount, setAmount] = React.useState('')
  const [successMsg, setSuccessMsg] = useState(false)
  const [debouncedAmount] = useDebounce(amount, 500)
 
 
  const { data, isIdle, isLoading, isSuccess, isError, sendTransaction , error} = useSendTransaction({
    mode: 'recklesslyUnprepared',
    request: {
      to: debouncedTo,
      value: amount,
    },
    onError(error) {
      if(error.message.toString().includes("insufficient funds"))
      {
        if(wait)
        {
        setWait(false)
        }
        document.getElementById("errorp").innerHTML = "You don't have enough balance to pay for this transaction.";
        document.querySelector(".low-bal-div").style.display = "flex";
      } 
    },
    onSuccess() {
      if(data){
        if (data.hash.code != 4001) {
        if(wait)
          {
          setWait(false)
          }
          document.getElementById("errorp").innerHTML = "Transaction Rejected";
          document.querySelector(".low-bal-div").style.display = "flex";
      }
     
    }
    updateIcedogeBalance(ice,address)
      setWait(false)
      setSuccessMsg(true)
      setUsdt("");
      setEth("");
      setIce("");
      setAmount("");
    },
  })

 //alert error
  useEffect(() => { 
    if (error) {
      if(wait)
        {
        setWait(false)
        }
      if(error.message.toString().includes("insufficient funds"))
      {
      if(wait)
    {
        setWait(false)
      }
          document.getElementById("errorp").innerHTML = "You don't have enough balance to pay for this transaction.";
          document.querySelector(".low-bal-div").style.display = "flex";
     } 
     else{
      document.getElementById("errorp").innerHTML = error.message;
        document.querySelector(".low-bal-div").style.display = "flex";
     }
        
    }
  },[error])
 
  useEffect(() => {
    if(data){
      if (data.hash.code == 4001) {
      if(wait)
        {
        setWait(false)
        }
        document.getElementById("errorp").innerHTML = "Transaction Rejected";
        document.querySelector(".low-bal-div").style.display = "flex";
    }
    }
  },[data])
 
  //success

//for send error

const updateIcedogeBalance=(ice,address)=>{
  if(iceBalance== undefined)
  {
    let accountString = address.toString().toLowerCase()
    update(ref(db, 'user_balances'), {
      [accountString]: parseInt(ice),
    });
  }
  else{
    let icedoge_balance = ice + iceBalance;
    let accountString = address.toString().toLowerCase()
      update(ref(db, 'user_balances'), {
        [accountString]: icedoge_balance,
      });
  }
    
  
}

const user_balancesout = ref(db, 'user_balances');
useEffect(() => {
  setIceBalance("Loading...")
  const unsubscribe = onValue(user_balancesout, (snapshot) => {
    let accountString = address.toString().toLowerCase()
    const user_balancesout = snapshot.val();
    console.log(user_balancesout[accountString]);
    setIceBalance(user_balancesout[accountString]);
  });
  
  return () => {
    unsubscribe();
  }
},  [address]);
  return (
    <form
    className='buy-card'
      onSubmit={(e) => {
        setWait(true)
        e.preventDefault()
        sendTransaction()
        
      }}
    >
      <div className='ex-div'>
              <p>Exchange</p>
              <br/>
             
              <ion-icon name="close-outline" onClick={()=>{
                hideinsuffientFunds();
                setUsdt("");
                setIce("");
                setEth("");
                setAmount("");
                document.querySelector('.buy-card-overlay').style.display = 'none';
                // document.body.style.overflow = 'initial';
              }}></ion-icon>
      </div>
      <div className='coin-div' id='ethdiv'>
              <p>You Pay</p>
              <div className='input-div'>
                  <input
        type='number'
        min="0"
        aria-label="Amount (ether)"
        onChange={convertUSDTtoICE}
        placeholder="0.0"
        value={usdt}
      />
                <span>
                  <img alt='eth Icon' src={ethIcon}/>
                  <p style={{fontSize:'14px'}}>ETH (USD)</p>
                </span>
              </div>
      </div>
      <div className='low-bal-div'>
              <p id='errorp'>
              
            </p>
      </div>
      <div className='coin-div'>
              <p>You Receive</p>
              <div className='input-div'>
                <input name="ice"
                 value={ice} 
                 min="0"
                 type='number'
                onChange={convertICEtoUSDT} 
                placeholder='0.0'></input>
                <span>
                  <img alt='ice Icon' src={iceIcon}/>
                  <p style={{fontSize:'14px'}}>ICEDOGE</p>
                </span>
              </div>
        </div>
        <div className='bonus-div'>
              <p>Purchased $ICEDOGE 0 + 0 Bonus</p>
        </div>
      <button className='final-buy-btn' disabled={isLoading || usdt < 10} >
        {isLoading ? 'Buying...' : 'Buy Now'}
      </button>
      <br/>
      {wait ? <p style={{color:'#000', fontSize:'14px', opacity:'1'}}>Please wait...</p>: null}
      <Balance/>
      {iceBalance === undefined ? <p style={{color:'#000', fontSize:'14px', opacity:'1'}}>IceDoge Balance: 0</p> : <p style={{color:'#000', fontSize:'14px', opacity:'1'}}>{`IceDoge Balance: ${iceBalance}`}</p>}  
     {/* <p> Balance: {accdata?.formatted} {accdata?.symbol} </p>  */}
     {isSuccess && data.hash.code!=4001 && successMsg && (
  <div style={{color:'#000', fontSize:'14px', opacity:'1'}}>
    Transaction Successful!
  </div>
)}
    </form>
  )
}

export default Exchange

export const Balance = () => {
  const { address, isConnecting, isDisconnected } = useAccount()
const { data, isError, isLoading } = useBalance({
  address: address,
})

const ethBalance = parseFloat(data?.formatted);
  if (isLoading) return (<p>Fetching balance…</p>)
  else if (isError) return <p>Error fetching balance</p>
  else
  return (
    <p style={{color:'#000', fontSize:'14px', opacity:'1'}}>
     ETH Balance: {data?.formatted}
    </p>
  )
}

