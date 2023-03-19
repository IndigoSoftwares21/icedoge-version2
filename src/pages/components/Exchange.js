import './exchange.css';

import React, { useEffect, useState } from 'react';
import { getDatabase, onValue, ref, update } from "firebase/database";
import {
  useAccount,
  useBalance,
  usePrepareSendTransaction,
  useSendTransaction,
  useWaitForTransaction
} from 'wagmi';

import ethIcon from './ethicon.png';
import { ethers } from 'ethers';
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
    if (!wait) {
      setWait(true)
    } 
   const  usdtValue = e.target.value;
   setUsdt(usdtValue);
   setIce(usdtValue * 10000);
   if(usdtValue<=10)
   {
    
    setWait(false)
      document.getElementById("errorp").innerHTML = "Error: Minumum Purchase is 10 USD";
      document.querySelector(".low-bal-div").style.display = "flex";
      
   }
   else{
    setAmount((usdtValue/1606).toString());
    setEth(usdtValue/1606);
   }
  };
  const convertICEtoUSDT = (e) => {
    
    const iceValue = e.target.value;
    setIce(iceValue);
    setUsdt(iceValue / 10000);
    if(iceValue<=100000)
    {
     
        setWait(false)
       
       document.getElementById("errorp").innerHTML = "Error: Minumum Purchase is 10 USD";
       document.querySelector(".low-bal-div").style.display = "flex";
       
    }
    else{
     setAmount((iceValue/1606000).toString());
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
  
  const [debouncedAmount] = useDebounce(amount, 500)
 
  const { config, } = usePrepareSendTransaction({
    request: {
      to: debouncedTo,
      value: debouncedAmount ? ethers.utils.parseEther(debouncedAmount) : undefined,
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
  })
  const { data, sendTransaction, error } = useSendTransaction(config)

 //alert error
 useEffect(() => {
    if (error) {
      if(wait)
      {
        setWait(false)
      }
      
      document.getElementById("errorp").innerHTML = error.message;
    document.querySelector(".low-bal-div").style.display = "flex";
    }
  }, [error])
 
 
  const { isLoading, isSuccess} = useWaitForTransaction({
    hash: data?.hash,
  })

  //success
  useEffect(() => {
    if (isSuccess) {
      updateIcedogeBalance(ice,address);
    }
  }, [isSuccess])
 
//for send error
const getUserBalances = () => {
  return new Promise((resolve, reject) => {
    const user_balances = ref(db, 'user_balances');
    onValue(user_balances, (snapshot) => {
      const user_balances = snapshot.val();
      resolve(user_balances);
    });
  });
}
const updateIcedogeBalance=(ice,address)=>{
  getUserBalances()
  .then(user_balances => {
    let accountString = address.toString().toLowerCase()
    let icedoge_balance;
    if(user_balances[address]>0) {
      icedoge_balance = user_balances[accountString ] + ice;
    } else {
      icedoge_balance = ice;
    }

    update(ref(db, 'user_balances'), {
      [accountString]: icedoge_balance,
    });
  });
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
        e.preventDefault()
        sendTransaction?.()
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
      <button className='final-buy-btn' disabled={isLoading || !sendTransaction || !ethaddress || !amount || parseFloat(amount)!=0}>
        {isLoading ? 'Buying...' : 'Buy Now'}
      </button>
      <br/>
      {wait ? <p style={{color:'#000', fontSize:'14px', opacity:'1'}}>Please wait...</p>: null}
      <Balance/>
      {iceBalance === undefined ? <p style={{color:'#000', fontSize:'14px', opacity:'1'}}>IceDoge Balance: 0</p> : <p style={{color:'#000', fontSize:'14px', opacity:'1'}}>{`IceDoge Balance: ${iceBalance}`}</p>}  
     {/* <p> Balance: {accdata?.formatted} {accdata?.symbol} </p>  */}
      {isSuccess && (
        <div className=''>
          Successfully bought {ice} $ICD Tokens
          <div>
            <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
          </div>
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

