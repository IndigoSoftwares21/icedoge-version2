import React from 'react'
import './index.css'
import Presalecard from './components/presalecard'
import discordimg from '../images/discord.png'
import fbimg from '../images/Facebook - Negative.png'
import instaimg from '../images/Instagram - Negative.png'
import ytimg from '../images/YouTube - Negative.png'
import telegram from '../images/Telegram - Negative.png'
import twimg from '../images/Twitter - Negative.png'
import whitepaper from './whitepaper.pdf'
import Navbar from "../NavBar"

const Buy = () => {
  
  let token_contact_address ="0x6475a3628649f97t9f81259803802f2188770870";
  let presale_contact_address ="0x6475a3628649f97t9f81259803802f2188770870";
  let total_supply = "1B"
  let presale_allocation = "15%"
  let team_allocation = "2.5%"
  let isplaying = false;
  
  const openPdf = () => {
    window.open(whitepaper, "_blank");
  };  

  

 
  return (
    <>
    <Navbar/>
    <section>
      
       
     
      
        <div className='intro-left'>
          <h1>
            Buy IceDoge tokens at <br/> <grad>Presale price</grad> before! <br/> launch!
          </h1>
          <p>
          A Decentralised meme token built for the community to transfer
           income into the DeFi ecosystem and safeguard a 
           crucial component of the ecosystem.
          </p>
          <span>
            <button onClick={openPdf} className='read-white-btn'>Read Whitepaper</button>
            <a href='#' className='learn-more'>Learn More</a>
          </span>
          <span className='socials'>
            <a href="https://www.facebook.com/" target="_blank">
            <img  src={fbimg}></img>
            </a>
            <a href="https://twitter.com/" target="_blank">
            <img src={twimg}></img>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
             <img src={instaimg}></img>
            </a>
            <a href="https://discord.com/" target="_blank">
              <img src={discordimg}></img>
            </a>
            <a href="https://www.youtube.com/" target="_blank">
            <img src={ytimg}></img>
            </a>
            <a href="https://www.telegram.com/" target="_blank">
            <img src={telegram}></img>
            </a>
      
      
          </span>
        </div>
        <div className='intro-right'>
          <Presalecard/>
          
        </div>

    </section>
    </>
  

    
  )
}

export default Buy