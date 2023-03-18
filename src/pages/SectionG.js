import 'aos/dist/aos.css';
import './index.css';
import 'animate.css';

import { Buybutton } from './components/WalletButton';

const SectionG = () => {
  return (
    <section className='newinfo' style={{marginTop:'100px', textAlign:'center'}}>
      <p data-aos="fade-down">
        Economic specialists forecast a 
        global market of over <green style={{color:'green'}} >176.5 billion USD </green>  
        within the next decade 
        Icedoge is driven
        to unite its token users globally to utilize
        it for accessing top products and services.
      </p>
      <Buybutton/>
    </section>
  )
}

export default SectionG