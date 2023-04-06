import './index.css';
import './team.css';
import 'aos/dist/aos.css';
import 'animate.css';

import { useCallback, useEffect, useState } from 'react';

import AOS from 'aos';
import Exchange from './components/Exchange';
import { Icebutton } from './components/WalletButton';
import Loader from './Loader';
import NFTcard from './components/NFTcard';
import TeamsNavbar from '../TeamsNavBar';
import WallecSelect from './components/WallecSelect';
import discordimg from '../images/discord.png';
import fbimg from '../images/Facebook - Negative.png';
import icegod from '../images/icegod.png';
import instaimg from '../images/Instagram - Negative.png';
import nft1 from '../images/nft1.webp';
import nft2 from '../images/nft2.webp';
import nft3 from '../images/nft3.webp';
import telegram from '../images/Telegram - Negative.png';
import twimg from '../images/Twitter - Negative.png';
import whitepaper from './whitepaper.pdf';
import ytimg from '../images/YouTube - Negative.png';

const NFT = () => {
  const [loading, setloading] = useState(true)
  useEffect(() => {
    document.title = "IceDoge NFT";
    window.onload = () => {
      setloading(false)
    }
  }, []);


  const scrolltodiv = () => { 
    const howSection = document.getElementById('nftdiv');
    window.scrollTo({
      top: howSection.offsetTop,
      behavior: 'smooth'
    });
  }
  let account = false;
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
  let openSwap =(account)=>{
    
    if(account){
      document.querySelector('.buy-card-overlay').style.display = 'flex';
      // document.body.style.overflow = 'hidden';
    }
    else{
      setMessage("Please, connect wallet!");   
    }
    
  }
  const openPdf = () => {
    //window.open(whitepaper, "_blank");
  };  
  useEffect (() => {
    AOS.init({duration: 500});
    }, []);

const [display, setDisplay] = useState('');

window.addEventListener('resize', () => {
  setDisplay(
     window.innerWidth <= 1200 ? 'none' : 'block',
  );
});
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
    <>
    {/* {loading? <Loader/>:null} */}
    <TeamsNavbar />
    <div id="snackbar">Some text some message..</div>
    <div className='buy-card-overlay'>
      
       <Exchange/>
      
      
        
    </div>
    <section className='hero' style={{position:'relative'}}>
    <h1> 
      NFT <grad>Built</grad>  for the <br /> <grad>Community</grad>  with Unique <br /> personality
    
    </h1>
    <p>Each NFT represents different personality, <br /> buy, sell and trade ICE Collection</p>
    <div onClick={scrolltodiv} class="arrow">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <NFTcard
        img={nft1}
        hashtag='#Coming Soon'
        style={
          {
            position:'absolute',
            top:'50%',
            left:'20%',
            transform:'translate(-50%, -50%) rotate(-10deg)',
            display: display,
          }
        }
      />
       <NFTcard
        img={nft2}
        hashtag='#Coming Soon'
        style={
          {
            position:'absolute',
            top:'50%',
            left:'80%',
            transform:'translate(-50%, -50%) rotate(10deg)',
            display:display,
          }
        }
      />
    </section>

    <section className="nft-card-div" id='nftdiv'>
      <NFTcard
        img={nft1}
        hashtag='#Coming Soon'
      />
      <NFTcard
        img={nft2}
        hashtag='#Coming Soon'
      />
      <NFTcard
        img={nft3}
        hashtag='#Coming Soon'
      />
      <NFTcard
        img={nft2}
        hashtag='#Coming Soon'
      />
    
    </section>

    <section className='section-6'>
          <div data-aos="flip-down" className='blue-buy-div'>
            <div  className='ice-god-div'>
                <img alt='icegod' src={icegod}/>
                <span>
                  <h3>Become an Ice god!</h3>
                  <p>Join the top dogs buying IceDoge</p>
                </span>
            </div>
            <div className='buy-btn-div'>
            <Icebutton/>
            </div>
          </div>
          <div className='faq-div'>
            <h1 data-aos="fade-up" style={{textAlign:'center'}}>FAQ</h1>
            <p data-aos="fade-up" style={{textAlign:'center', opacity:'0.5'}}>
              See some of the most 
              frequently asked questions <br/>
             about Ice Doge here. </p>
          </div>
          <details
           data-aos="fade-left"
           data-aos-easing="ease-out-cubic"
           data-aos-duration="1000"
          >
            <summary>What are the Objectives of Icedoge Token? </summary>
            <div>
            <p>As clearly stated in our Whitepaper, we aim to effortlessly introduce well-known 
              cryptocurrency principles to the general public.
              <br />
              <br />
              Furthermore, we have a dream to become a worldwide brand with many use cases.
               We hope to achieve this by giving back to the public through charity and also collaborating
                with top businesses in various sectors.
            </p>
            </div>
          </details>
          <details
           data-aos="fade-left"
           data-aos-easing="ease-out-cubic"
           data-aos-duration="1000"
          >
            <summary>Does $ICD have any reward system?</summary>
            <div>
            <p>Yes. There is a reward system. For all active transactions, we will reward you with 2% $ICD, 
              which will be sent to your decentralized wallet. This means that the more
               the $ICEDOGE token is used, the more the reward.</p>
            </div>
          </details>
          
          <details
           data-aos="fade-left"
           data-aos-easing="ease-out-cubic"
           data-aos-duration="1000"
           >
            <summary>Does Investing in Icedoge worth it?</summary>
            <div>
            <p>Although Icedoge as with other cryptocurrencies is a speculative investment, 
              with the strength the community has, 
              it is worth investing. You can purchase the $ICD token using fractions of a penny, 
              and it has a total supply of 250,000,000,000.</p>
            </div>
          </details>
          <details
           data-aos="fade-left"
           data-aos-easing="ease-out-cubic"
           data-aos-duration="1000"
           >
            <summary>What is Ice Doge?</summary>
            <div>
            <p>Icedoge is a digital currency with a purpose. 
              And that is going to the moon. The icedoge ecosystem consists of a
               decentralized exchange, and an NFT marketplace</p>
            </div>
          </details>
          <details
           data-aos="fade-left"
           data-aos-easing="ease-out-cubic"
           data-aos-duration="1000"
           >
            <summary>Icedoge($ICD) is built on which cryptocurrency Blockchain?</summary>
            <div>
            <p>They built Icedoge on the Ethereum blockchain.
              Icedoge is a digital currency with a purpose. 
              And that is going to the moon. 
              The icedoge ecosystem consists of a
               decentralized exchange, and an NFT marketplace</p>
            </div>
          </details>
          <details
           data-aos="fade-left"
           data-aos-easing="ease-out-cubic"
           data-aos-duration="1000"
           >
            <summary>Where will the $Icedoge token presale hold?</summary>
            <div>
            <p>You can access the Icedoge presale on the Icedoge official website.</p>
            </div>
          </details>
          <details
           data-aos="fade-left"
           data-aos-easing="ease-out-cubic"
           data-aos-duration="1000"
           >
            <summary>How many $ ICDs will be available during the Presale?</summary>
            <div>
            <p>A total of 220,000,000,000 Icedoge tokens will be available during the token presale.</p>
            </div>
          </details>
          <details
           data-aos="fade-left"
           data-aos-easing="ease-out-cubic"
           data-aos-duration="1000"
           >
            <summary>On which exchange platform will $Icedoge be listed after the token presale?</summary>
            <div>
            <p>The Icedoge token will be available on platforms such as Uniswap, CEX, etc.</p>
            </div>
          </details>
          <details
           data-aos="fade-left"
           data-aos-easing="ease-out-cubic"
           data-aos-duration="1000"
           >
            <summary>Can I request assistance when purchasing $Icedoge tokens?</summary>
            <div>
            <p>You can make use of any of the available helplines on the official website. Also, you can contact an admin
               in the community or on our social media platforms.</p>
            </div>
          </details>

          <div className='links-div'>
            <a data-aos="fade-left" 
            onClick={openPdf}
            href='#'>
              Whitepaper
            <ion-icon name="open-outline"></ion-icon>
            </a>
            <a  data-aos="fade-left"  data-aos-delay="100" href='#'
            onClick={()=>{
              openSwap(account);
             
            }}
            >
            Buy $ICEDOGE
            <ion-icon name="open-outline"></ion-icon>
            </a>
            <a data-aos="fade-left"  data-aos-delay="200" href='https://etherscan.io/address/0xE12C6fc28b6c35Fca2361321Ff593949d8BB539B'  target="_blank">
            View on Etherscan
            <ion-icon name="open-outline"></ion-icon>
            </a>
            <a data-aos="fade-left"  data-aos-delay="300" href='#disclaimer'>
            Disclaimer
            <ion-icon name="open-outline"></ion-icon>
            </a>
          </div>

          <div data-aos="flip-down" className='footer-contact'>
            <h3>Connect with Us</h3>
            <p>Follow the Ice Community to stay updated with IceDoge growth.</p>
            <span className='socials mobile'>
            <a href="https://www.facebook.com/" target="_blank">
            <img alt='fbimg' src={fbimg}></img>
            </a>
            <a href="https://twitter.com/" target="_blank">
            <img alt='twimg' src={twimg}></img>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
             <img alt='instaimg' src={instaimg}></img>
            </a>
            <a href="https://discord.com/" target="_blank">
              <img alt='discordimg' src={discordimg}></img>
            </a>
            <a href="https://www.youtube.com/" target="_blank">
            <img alt='ytimg' src={ytimg}></img>
            </a>
            <a href="https://www.telegram.com/" target="_blank">
            <img alt='telimg' src={telegram}></img>
            </a>
      
          </span>
          </div>

          <div className='final-text' id='disclaimer'>
          Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.
          </div>

          <div className='footer'>
          Copyright ©2023 Ice Doge Team. All Right Reserved.
          </div>

    </section>
    </>
  )
}

export default NFT