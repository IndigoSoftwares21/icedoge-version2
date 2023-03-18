import 'aos/dist/aos.css';
import './index.css';
import 'animate.css';

import { Suspense, lazy, useEffect, useState } from 'react';
import { getDatabase, onValue, ref } from "firebase/database";

import $ from "jquery";
import AOS from 'aos';
import Exchange from './components/Exchange';
import Loader from './Loader';
import Navbar from "../NavBar";
import TweenLite from 'gsap';
import ecoimgbig from '../images/ecoimgbig.png';
import ecoimgsmall from '../images/ecoimgsmall.png';
import whitepaper from './whitepaper.pdf';

const SectionA = lazy(() => import('./SectionA'));
const SectionB = lazy(() => import('./SectionB'));
const SectionC = lazy(() => import('./SectionC'));
const SectionD = lazy(() => import('./SectionD'));
const SectionE = lazy(() => import('./SectionE'));
const SectionF = lazy(() => import('./SectionF'));
const SectionG = lazy(() => import('./SectionG'));
const SectionH = lazy(() => import('./SectionH'));













// import SectionA from './SectionA';
// import SectionB from './SectionB';
// import SectionC from './SectionC';
// import SectionD from './SectionD';
// import SectionE from './SectionE';
// import SectionF from './SectionF';
// import SectionG from './SectionG';
// import SectionH from './SectionH';







//import sectiona with lazy















//import with lazy








const Main = () => {
  // const [loading, setloading] = useState(true)
  // useEffect(() => {
  //   document.title = "IceDoge Home";
  //   window.onload = () => {
  //     setloading(false)
  //   }
  // }, []);
  // ;

  const db = getDatabase();
  const presalecard_table = ref(db, 'presalecard');

  onValue(presalecard_table, (snapshot) => {
    const presalecard= snapshot.val();
    //console.log(presalecard);
  });
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


 
    
  


  


  // let token_contact_address ="0x38D76f7602f87968D86C762C6e4A49a156D73258";
  // let presale_contact_address ="0xE12C6fc28b6c35Fca2361321Ff593949d8BB539B";
  // let total_supply = "1B"
  // let presale_allocation = "15%"
  // let team_allocation = "2.5%"
  // let isplaying = false;
  
  const openPdf = () => {
    window.open(whitepaper, "_blank");
  };  



  useEffect (() => {
    AOS.init(
      {
        once: true,
        mirror: false, // values from 0 to 3000, with step 50ms
        duration: 400,
        anchorPlacement: 'top-top',
      }
    );
    // AOS.init({duration: 500});
    $(window).on('load', function () {
      AOS.refresh();
  });
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

 function moveIcedoge(e) {
  TweenLite.to(document.getElementById('dogcart'), 0.3, {
    css: {
      left: e.pageX,
      //top: e.pageY
    }
  });
 
}
$(window).on('mousemove', moveIcedoge);


  return (
    <>
    {/* {loading? <Loader/>:null} */}
    <Navbar/>
  
    <div id="snackbar">Some text some message..</div>
    <div className='buy-card-overlay'>
       <Exchange/> 
    </div>
    <Suspense fallback={<Loader/>}>
<SectionA/>
<SectionB/>
<SectionC/>
{
   window.innerWidth < 1200 ? 
   <div className="ecosystem " data-aos="fade-left">
   {
     window.innerWidth > 1200 ? 
     <img src={ecoimgbig} alt="eco-desktop" /> :
     <img src={ecoimgsmall} alt="eco-mobile" />
   }
  </div>
  :
  <></>

}
   <SectionD/>
    <SectionE/>
    <section className="addinfo">
      
    </section>
    <SectionF/>
    <SectionG/>
    <SectionH/>
    </Suspense>
    </>
  

    
  )
}

export default Main