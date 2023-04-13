import 'aos/dist/aos.css';
import './index.css';
import 'animate.css';

import ecoimgbig from '../images/ecoimgbig.png';
import ecoimgsmall from '../images/ecoimgsmall.png';

const SectionC = () => {
  let token_contact_address ="0x6475a3628649f97t9f81259803802f2188770870";
  let presale_contact_address ="0xE12C6fc28b6c35Fca2361321Ff593949d8BB539B";
  let total_supply = "250B"
  let presale_allocation = "88%"
  let team_allocation = "2.5%"
  let isplaying = false;
  return (
    <section className='section-3' style={{flexDirection:'column', textAlign:'center'}}>
    <h1 className='tokenomics-h1' data-aos="fade-up">Tokenomics</h1>
    <p className='tokenomics-p' data-aos="fade-up">
    $ICEDOGE is a full-fledge community token designed specially to transfer income into the DeFi ecosystem. 
    The token that users purchase will be split, 
    and by design this will provide an upward price pressure for the token.
     This will allow us to keep developing the platform and provide a source of utility for tokens.
    </p>
    <div className='tokenomic-details'>

    <div className='tokenomic-div'
     data-aos="flip-left">
      <h1>
        {total_supply}
      </h1>
      <p>
        Total Supply
      </p>
    </div>
    <div className='tokenomic-div'
    data-aos="flip-left"
    >
      <h1>
        {presale_allocation}
      </h1>
      <p>
        Presale Allocation
      </p>
    </div>
    <div
     className='tokenomic-div'
     data-aos="flip-left"
     >
      <h1>
        {team_allocation}
      </h1>
      <p>
        Team Allocation
      </p>
    </div>

    </div>
    <div className='token-details'  data-aos="flip-up">
      <div>
        <p className='det-item'>Token Name</p>
        <p className='det-value'>ICEDOGE</p>
      </div>
    </div>
    <div className='token-details' data-aos="flip-up">
      <div>
        <p className='det-item'>Token Symbol</p>
        <p className='det-value'>$ICEDOGE</p>
      </div>
    </div>
    <div className='token-details' data-aos="flip-up">
      <div>
        <p className='det-item'>Blockchain</p>
        <p className='det-value'>Ethereum</p>
      </div>
    </div>
    <div className='token-details' data-aos="flip-up">
      <div>
        <p className='det-item'>Decimal</p>
        <p className='det-value'>18</p>
      </div>
    </div>
    <div className='token-details' data-aos="flip-up">
      <div>
        <p className='det-item'  title="Presale Contract Address">Presale Contract Address</p>
        { 
        window.innerWidth < 1200 ?
         <p className='det-value'>
          <button onClick={() => {
           navigator.clipboard.writeText(presale_contact_address);
           alert('copied')
           }}
          >
          
          Copy<ion-icon name="clipboard-outline"></ion-icon></button></p> :
        <p className='det-value'>{presale_contact_address}</p>
        }
      </div>
    </div>
    <h1 className='tokenomics-h1' style={{paddingTop:'70px', paddingBottom:'20px', textAlign:'center'}}>Ecosystem</h1>

    {
      window.innerWidth > 1200 ? 
      
      <div className="ecosystem" data-aos="fade-left">
          {
            window.innerWidth > 1200 ? 
            <img src={ecoimgbig} alt="eco-desktop" /> :
            <img src={ecoimgsmall} alt="eco-mobile" />
          }
      </div>
      :
      <></>
    }
   
  
  </section>
  )
}

export default SectionC