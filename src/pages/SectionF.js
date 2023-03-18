import 'aos/dist/aos.css';
import './index.css';
import 'animate.css';

import { Swapbutton } from './components/WalletButton';
import swapimg from '../images/swapimg.png';
import { useState } from 'react';

const SectionF = () => {
    let [message, setMessage] = useState('');
  
    let account = false;
    
    let openSwap =(account)=>{
    
        if(account){
          document.querySelector('.buy-card-overlay').style.display = 'flex';
          // document.body.style.overflow = 'hidden';
        }
        else{
         
            setMessage("Please, connect wallet!");
           
          
        }
        
      }
    
  return (
    <section className='section-5'>
    <div className='sec5-div'>
      <div className='sec5-div-left'>
      <p data-aos="fade-up">Decentralised Exchange</p>
      <h1 data-aos="fade-up" >IceDoge Swap</h1>
      <p data-aos="fade-up"  style={{opacity:'0.5'}}>There are over 1,500 different types of cryptocurrencies.
         $ICEDOGE provides an adaptive swap interface that allows
          users to exchange their tokens quickly using the website.
           For every active transaction,
            a $ICEDOGE reward is granted to holders’ 
        decentralized wallets to foster a healthy community 
        usage
      </p>
      <Swapbutton/>
      </div>
      <div className='sec5-div-right'>
        <img src={swapimg} alt='swapimg'/>
      </div>
    </div>
</section>
  )
}

export default SectionF