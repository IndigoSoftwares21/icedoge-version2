import './presalestage.css'
import '../index.css';

import React,{useState}from "react"

const Stage = () => {
    let end_date_data = "April 30, 2023 11:59:59";
    let presale_end = "30th April 2023"
    let presale_level = 1;
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
  return (
    
    <div className="stage">
      <p className='' style={{fontSize:'17px'}}><em> Presale Stage One </em></p>
        <span className='time-holder'>
         <div className='time-cont'>
             <p className='time'>{timeLeft.daysLeft}</p>
             <p className='time-spec'>Days</p>
           </div>
           <div className='time-cont'>
             <p className='time'>{timeLeft.hoursLeft}</p>
             <p className='time-spec'>Hours</p>
           </div>
           <div className='time-cont'>
             <p className='time'>{timeLeft.minutesLeft}</p>
             <p className='time-spec'>Minutes</p>
           </div>
           <div className='time-cont'>
             <p className='time'>{timeLeft.secondsLeft}</p>
             <p className='time-spec'>Seconds</p>
         </div>
        </span>
        <p className='presale-end'>Presale Stage Ends in {presale_end}</p>
    </div>
    
  )
}

export default Stage

{/* <p className='presale-end'>Presale Ends in {presale_end}</p> */}
{/* <p className='' style={{fontSize:'17px'}}><em> {presale_level} of 10 Phase completed </em></p> */}