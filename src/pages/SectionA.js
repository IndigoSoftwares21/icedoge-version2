import 'aos/dist/aos.css';
import './index.css';
import 'animate.css';

import { Buybutton } from './components/WalletButton';
import Presalecard from './components/presalecard';
import discordimg from '../images/discord.png';
import dogcart from '../images/dog-cart.png';
import fbimg from '../images/Facebook - Negative.png';
import instaimg from '../images/Instagram - Negative.png';
import telegram from '../images/Telegram - Negative.png';
import twimg from '../images/Twitter - Negative.png';
import whitepaper from './whitepaper.pdf';
import ytimg from '../images/YouTube - Negative.png';

const SectionA = () => {

    const openPdf = () => {
        window.open(whitepaper, "_blank");
      };  
    
  return ( 
    
    <section className='section-1' style={{position:'relative', paddingBottom:'90px'}}>
      <div className='intro'>
          <div className='intro-left'>
          <h1 data-aos="fade-right">
          {/* <h1 className='animate__animated  animate__bounceInLeft'> */}
          ICEDOGE <grad>PRESALE</grad> <br/> IS LIVE NOW
          </h1>
          
          {/* <p className='animate__animated animate__bounceInRight'> */}
          <p data-aos="fade-left">
          A Decentralised meme token built for the community 
          to transfer income into the DeFi ecosystem and
          safeguard a crucial component of the ecosystem.
          </p>
          <span>
            <Buybutton/>
            <a href='#' onClick={openPdf} className='learn-more'>Read Whitepaper</a>
          </span>
          <span className='socials'>
            <a href="https://www.facebook.com/" target="_blank">
            <img alt='fbimg' src={fbimg}></img>
            </a>
            <a href="https://twitter.com/icedogetoken" target="_blank">
            <img alt='twimg' src={twimg}></img>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
             <img alt='instaimg' src={instaimg}></img>
            </a>
            <a href="https://discord.com/" target="_blank">
              <img alt='discimg' src={discordimg}></img>
            </a>
            <a href="https://www.youtube.com/" target="_blank">
            <img alt='ytimg' src={ytimg}></img>
            </a>
            <a href="https://t.co/ueDF9WBnuO" target="_blank">
            <img alt='teleimg' src={telegram}></img>
            </a>
      
      
          </span>
        </div>
        <div className='intro-right'>
          <img className='dogcart' id='dogcart' alt='dog-cart' src={dogcart}/>
          
        </div>

      </div>
      <Presalecard/>
     
    </section>
  )
}

export default SectionA