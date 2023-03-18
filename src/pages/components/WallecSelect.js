import '../index.css';
import './exchange.css';

import React, { useCallback, useEffect, useState } from "react";

import Test from '../Test';
import metaimg from './metmsk.png';
import trustimg from './trst.png';
import walletimg from './walletcon.png';

const WallecSelect = () => {
  const currentUrl = "icedogetoken.com/";
  const isMobile = () => {
    const userAgent = window.navigator.userAgent;
    const mobilePlatforms = ['Android', 'iPhone', 'iPad'];
    return mobilePlatforms.some(platform => userAgent.includes(platform));
  };
  
  
  const [activateError, setActivateError] = useState('')
  

  let [message, setMessage] = useState('');
  let [prevMessage, setPrevMessage] = useState('');

  useEffect(() => {
    if (message !== prevMessage) {
      const snackbar = document.getElementById("snackbar");

      snackbar.innerHTML = message;
      snackbar.classList.add("show");

      const timeoutId = setTimeout(() => {
        snackbar.classList.remove("show");
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
        snackbar.classList.remove("show");
      };
    }
    setPrevMessage(message);
  }, [message, prevMessage]);


    // const config = {
    //     readOnlyChainId: Mainnet.chainId,
    //     readOnlyUrls: {
    //       [Mainnet.chainId]: "https://eth-mainnet.g.alchemy.com/v2/lx98LXCFaP31WWsEE0w6S6LvOPwhp856",
    //       [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/H9eQzFBw6hk3TDMC2q1nGwoZcCm60fyN",
    //     },
    //     connectors: {
    //       metamask: new MetamaskConnector(),
    //       coinbase: new CoinbaseWalletConnector(),
    //       walletConnect: new WalletConnectConnector({ infuraId: 'a347fa255b62416d88fb3365d634a7a6' }),
    //       // walletConnect: new WalletConnectConnector({ infuraId: 'd8df2cb7844e4a54ab0a782f608749dd' }),
    //     },
    //   }

      const [rendered, setRendered] = useState("");

     

    

      const closeSwap = ()=>{
        let buyCardOverlay = document.querySelector('.buy-card-overlay');
        if (buyCardOverlay) {
            buyCardOverlay.style.display = 'none';
        }
      }

      const hideload = ()=>{
        let ldsEllipsis = document.querySelector('.lds-ellipsis');
        let loadinfo = document.querySelector('.loadinfo');

        if (ldsEllipsis) {
            ldsEllipsis.style.display = "none";
        }

        if (loadinfo) {
            loadinfo.style.display = "none";
        }
      }
      const loading=()=>{
        let ldsEllipsis = document.querySelector('.lds-ellipsis');
        let loadinfo = document.querySelector('.loadinfo');
        
        if (ldsEllipsis) {
            ldsEllipsis.style.display = "inline-block";
            document.querySelectorAll('.lds-ellipsis div').forEach(item => {
                item.style.animationDuration = '0.6s';
            });
        }
        
        if (loadinfo) {
            loadinfo.style.display = "inline-block";
        }
      }
    
  
      
        let closemenu=()=>{
          let menu = document.querySelector('.menu');
          if (menu) {
              menu.style.display = 'none';
          }
        }
     
        // async function onConnect() {   
        //   try {
        //     loading();
        //     const provider = new WalletConnectProvider({
        //       infuraId: 'a347fa255b62416d88fb3365d634a7a6',
        //       // infuraId: 'd8df2cb7844e4a54ab0a782f608749dd',
        //     });
            
        //     await provider.enable();
        //     await activate(provider);
        
        //     setMessage("WalletConnect Connection Successful!");
        //     hideload();
        //   } catch (error) {
        //     setMessage("Error while connecting WalletConnect");
        //     if (error) {
        //       console.error(error);
        //       hideload();
        //     }
        //   }
        // }
        
        // async function onConnect() {
          
        //   try {
        //     const provider = new WalletConnectProvider({
        //       infuraId: 'd8df2cb7844e4a54ab0a782f608749dd',
        //     })
        //     await provider.enable()
        //     await activate(provider)
        //   } catch (error) {
        //     console.error(error)
        //   }
        // }
      // async function onConnect() {
      //   loading();
     
      //   try {
      //     const provider = new WalletConnectProvider({
      //       infuraId: 'a347fa255b62416d88fb3365d634a7a6',
      //       // infuraId: 'd8df2cb7844e4a54ab0a782f608749dd',
      //     })
          
      //     await provider.enable()
      //     await activate(provider)
      //     closemenu();
      //     setMessage("WalletConnect Connection Successful!");
      //     hideload();
      //     closeSwap();
        
      //   } catch (error) {
      //     setMessage("Error while connecting WalletConnect");
    
      //     if (error) {
      //       closemenu();
      //       hideload();
      //       closeSwap();
            
      //     }
          
      //   }
      // }

     
      
      // onConnect().then(result => {
      //   if (result === 'success') {
      //     // do something on success
      //     hideload();
      //   } else {
      //     // do something on failure
      //   }
      // });
      // useEffect(() => {
      //   if (error) {
      //     setActivateError(error.message)
      //     showToast(error.message);
      //   }
      //   else{
      //     alert(error)
      //     showToast("Metamask connection successful!");
      //     hideload();
      //     closeSwap();
      //   }
      // }, [error])
      // const MetamaskConnect = async () => {
      //   try {
      //     if (isMobile()) {
      //       if (typeof window.ethereum !== 'undefined') {
      //         activateBrowserWallet({ type: 'metamask'});
      //       }
      //       else{
      //         window.open(`https://metamask.app.link/dapp/${currentUrl}`);
      //       }
      //       //change to current url
      //       // 
            
      //     }
      //     else{
      //       activateBrowserWallet({ type: 'metamask'});
      //     }
      //   } catch(e) {
      //      // handle the error here
      //      if (e.code === 4001) {
      //        // user rejected the request
      //       // console.log('user rejected the request');
             
      //      }
      //   }
      // }
  return (
    <>
    <div className="select-card">
    <div className='ex-div'>
              <p>Select a Wallet</p>
              <br/>
              <ion-icon name="close-outline" onClick={()=>{
                document.querySelector('.buy-card-overlay').style.display = 'none';
                // document.body.style.overflow = 'initial';
              }}></ion-icon>
    </div>
    <div className="select-btn"
   
    >
     <p>Walletconnect</p>
     <img src={walletimg} alt="wallet-connect-logo" />
    </div>
    <div className="select-btn"

  
    >
     <p>Metamask</p>
     <img src={metaimg} alt="wallet-connect-logo" />
    </div>
    <Test/>
    {/* <div className="select-btn"
       onClick={() => {
        if (!account) {
          if (isMobile()) {
            //change to current url
            window.open(`https://link.trustwallet.com/open_url?coin_id=60&url=https://${currentUrl}`, '_blank');
          }
            activateBrowserWallet();
        } else {
            
        }
        }}
    >
     <p>Trust Wallet</p>
     <img src={trustimg} alt="wallet-connect-logo" />
    </div> */}
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div>
    <br />
    </div>
    <p className="loadinfo" style={{
      textAlign: 'center',
      color: '#000',
      fontSize: '13px',
      display:'none'
    }}>This may take a while, do not reload page or exit!</p>
    </div>
    </>
  )
}

export default WallecSelect