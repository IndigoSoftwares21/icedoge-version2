import 'aos/dist/aos.css';
import './index.css';
import 'animate.css';

import { Buybutton } from './components/WalletButton';
import Qrcode from '../images/qrcode.png';
import dog1 from '../images/dog1.png';
import dog2 from '../images/dog2.png';
import dog3 from '../images/dog3.png';
import ethimg from '../images/eth.png';
import lineimg from '../images/line.png';
import mktwatchimg from '../images/mktwatch.png';

const SectionB = () => {
  return (
    <section style={{flexDirection:'column', padding:'0'}}>
    <div className='line' alt='line'>
     <img alt='lineimg' src={lineimg}/>
    </div>
    <div className='org-images'>
      <span>
      <img src={ethimg} alt='ethereum'/>
     
      <img src={mktwatchimg} alt='marketwatch'/>
  
      </span>
      
    </div>

      
    <div id='mission' className="mission-div">
      <div className="mission-div-left" data-aos="fade-right">
          <h3>
            Mission
          </h3>
          <br/>
          <p>
            Our objective is to establish an accessible,
            sustainably managed environment in which new and
            experienced enthusiasts can access the global market 
            while maintaining decentralization and privacy. Creating a 
            24-hour open marketplace that operates within legal boundaries.
          </p>
      <div>

   </div>

        
      </div>
      <div className="mission-div-right" data-aos="fade-left">
            <img className='dog1' src={dog1} alt="dog" />
            <img id='followdog' className='dog2 ' src={dog2} alt="dog" />
            <img className='dog3' src={dog3} alt="dog" />
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
      </div>
    </div>
    <div className="mission-div donate">
      <div className="mission-div-left donate " data-aos="fade-right">
          <h1>
            Feel like donating?
          </h1>
          <br/>
          <p>
          Icedoge is 100% decentralized. It is owned by the
          Icedoge Army (Community). Our enthusiastic volunteers aim to
          make Icedoge one of the best in the crypto space. 
          Our driving force is our vision and our number strength.
          <br/>
          <br/>
          <br/>
          
         <p>0xE12C6fc28b6c35Fca2361321Ff593949d8BB539B</p> 
          <br/>
          <br/>
          Accepted: Any ERC20 token
          Preferred: $ETH, $USDC, $ICEDOGE
          </p>
          {/* <button style={{marginTop:'50px'}}
           className='read-white-btn '
           onClick={()=>{
            window.open("https://etherscan.io/address/0xE12C6fc28b6c35Fca2361321Ff593949d8BB539B", "_blank")
           }}
           >
          <span style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "none", fontSize: "16px" }}>
            View on Etherscan
          <ion-icon name="chevron-forward-outline" />
          </span>
          </button> */}
        <Buybutton/>
      <div>

   </div>

        
      </div>
      <div className="mission-div-right donate " data-aos="fade-left">
            <img  src={Qrcode} alt="qrcode" />
      </div>
    </div>
  
  </section>
  )
}

export default SectionB