import 'aos/dist/aos.css';
import './presale-card.css';

import React, { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";

import AOS from 'aos';
import Stage from './Stage';

const Presalecard = () => {

  const [rendered, setRendered] = useState("");

  
  let account = false;


  


  
  
let presalecard;
  const db = getDatabase();
  const presalecard_table = ref(db, 'presalecard');

  onValue(presalecard_table, (snapshot) => {
    presalecard= snapshot.val();
    //console.log(presalecard);
  });

  let totalpresale = "220B";
  let list_price = 2.5;
  let presale_address = "0xE12C6fc28b6c35Fca2361321Ff593949d8BB539B";
  let end_date_data = "Mar 12, 2023 00:00:00";
  let ice_dodge_rem = 2084.0283;
  let presale_end = "12th March 2023"
  let presale_level = 0;
  let rate = 0.0001;
  let amount_raised = '3,920,092';
  let total_amount = 10000000;
  let amount_raised_int = amount_raised.replace(/,/g,"");
  let amount_raised_percent = (amount_raised_int / total_amount) * 100;
  let total_amount_percent = (total_amount / total_amount) * 100;
  let endDate = new Date(end_date_data);
  let [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endDate));
  function calculateTimeLeft(endDate) {
  let diffTime = endDate - new Date();
  let daysLeft = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  let hoursLeft = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutesLeft = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
  let secondsLeft = Math.floor((diffTime % (1000 * 60)) / 1000);

    return {
      daysLeft,
      hoursLeft,
      minutesLeft,
      secondsLeft,
    };
  }
  setInterval(() => {
    setTimeLeft(calculateTimeLeft(endDate));
  }, 1000);

  useEffect (() => {
    AOS.init({duration: 500});
    }, []);
    useEffect (()=>{
      let elements = document.querySelectorAll('[data-aos]');
      for (let i = 0; i < elements.length; i++) {
        //if ios remove the attribute
        if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent)) {
          elements[i].removeAttribute('data-aos');
        }
      }
     })

  return (
   
    <div className='presale-card' data-aos='flip-left'>
       <div className='presale-card-left'>
        <h3 className="presale-card-left-title">Join The $ICEDOGE Presale Now</h3>
        <p className='amount-raised'>Amount Raised: ${amount_raised} / $10,000,000</p>
        <progress  value={amount_raised_percent} max={total_amount_percent}> </progress>
        <span>
        <p className='presale-level-style'><em>Current Price: </em> ${rate}</p>
        <p className='presale-level-style'><em>Total Presale: </em>{totalpresale}</p>
        </span>
        <p className='presale-level-style '><em>Presale address: </em> <p className="presale-level-style address">{presale_address}</p></p>
      </div>
       {/* <div className='presale-card-right'>
       <p className='presale-level-style' style={{fontSize:'17px'}}><em> {presale_level} of 10 Phase completed </em></p>
       <span className='timer-span'>
         <div className='timer-holder'>
             <p className='timer-value'>{timeLeft.daysLeft}</p>
             <p className='timer-title'>Days</p>
           </div>
           <div className='timer-holder'>
             <p className='timer-value'>{timeLeft.hoursLeft}</p>
             <p className='timer-title'>Hours</p>
           </div>
           <div className='timer-holder'>
             <p className='timer-value'>{timeLeft.minutesLeft}</p>
             <p className='timer-title'>Minutes</p>
           </div>
           <div className='timer-holder'>
             <p className='timer-value'>{timeLeft.secondsLeft}</p>
             <p className='timer-title'>Seconds</p>
         </div>
        </span>
        <p className='presale-end'>Presale Ends in {presale_end}</p>
      </div> */}
      <Stage/>
    </div>
  )

  
}

export default Presalecard;


   <button className='connect-btn'>Connect Wallet</button>



  //  <div className='presale-info'>
  //       <p className='presale-level-style'>{`${presale_level} of 10 Phase completed`}</p>
  //       <p className='presale-live-style'>ICE DOGE PRESALE IS LIVE <red>🔴</red></p>
  //       <p className='presale-level-style'>{`1 $ICEDOGE = ${rate} USDT`}</p>
  //       <span className='timer-span'>
  //       <div className='timer-holder'>
  //           <p className='timer-value'>{timeLeft.daysLeft}</p>
  //           <p className='timer-title'>Days</p>
  //         </div>
  //         <div className='timer-holder'>
  //           <p className='timer-value'>{timeLeft.hoursLeft}</p>
  //           <p className='timer-title'>Hours</p>
  //         </div>
  //         <div className='timer-holder'>
  //           <p className='timer-value'>{timeLeft.minutesLeft}</p>
  //           <p className='timer-title'>Minutes</p>
  //         </div>
  //         <div className='timer-holder'>
  //           <p className='timer-value'>{timeLeft.secondsLeft}</p>
  //           <p className='timer-title'>Seconds</p>
  //         </div>
  //       </span>
  //       <progress  value={amount_raised_percent} max={total_amount_percent}> </progress>

  //       <p className='amount-raised'>Amount Raised: ${amount_raised} / $10,000,000</p>
  //       <button
  //     onClick={() => {
  //       if (!account) {
  //         activateBrowserWallet();
  //       } else {
  //         document.querySelector('.buy-card-overlay').style.display = 'flex';
  //         document.body.style.overflow = 'hidden';
  //       }
  //     }}

  //     className="connect-btn"
  //   >
  //     {rendered === "" && "Connect Wallet"}
  //     {rendered !== "" && "Buy with ETH"}
  //   </button>
  //       <p className='presale-end'>Presale Ends in {presale_end}</p>
  //       <p className='ice-doge-rem'> {ice_dodge_rem} $ICEDOGE Ramaining</p>
  //       <p className='list-price'>  Listing Price: 1 $ICEDOGE = {list_price} USDT</p>

  //     </div>