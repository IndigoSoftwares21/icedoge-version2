import 'aos/dist/aos.css';
import './index.css';
import 'animate.css';

import React from 'react';

const SectionE = () => {
  return (
    <section className='info'>

    <div className="infocard one" data-aos="fade-left">
    <ion-icon name="people-outline"></ion-icon>
    <h1>Community-Powered</h1>
    <p>
      Icedoge is 100% decentralized.
       It is owned by the Icedoge Army (Community).
        Our enthusiastic volunteers aim to make Icedoge
         one of the best in the crypto space. 
        Our driving 
      force is our vision and our number strength.
    </p>

            

    </div>
    <div className="infocard two" data-aos="fade-left">
    <ion-icon name="medal-outline"></ion-icon>
    <h1>Rewards</h1>
    <p>For every transaction, 
      a 2% reward is granted to the 
      decentralized wallets of holders. 
      The reason for this is to foster
       community usage. The more 
       Icedoge is used,
       the more rewards holders get.
    </p>
    </div>
    <div className="infocard three" data-aos="fade-left">
    <ion-icon name="shield-half-outline"></ion-icon>
      <h1>Secure</h1>
      <p>
      Our $Icedoge smart contract has been audited by
      two of the top teams in this niche; 
      Solidity finance Audit, and Solidproof Audit.
      Also, the Liquidity Pool tokens have been burnt 
      to ensure zero risk to our community users.
      </p>

    </div>
  </section>
  )
}

export default SectionE