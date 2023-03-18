import React, { useState, useEffect } from 'react';
import logo from '../images/icedoge_logo.png';
import { Nav, Bars, Times, NavBtn, NavMenu, NavLinkAnchor } from './NavbarElements';
import whitepaper from '../pages/whitepaper.pdf';
import WalletButton from '../pages/components/WalletButton';
import '../styles/Home.css';

const Navbar = () => {
   

    const [menuopen, setMenuopen] = useState(false);

    let menuToggle = () => {
        setMenuopen(!menuopen);
    };

    useEffect(() => {
        if (menuopen&&window.innerWidth < 1180) {
            document.querySelector('.mobileNav').style.display = 'flex';
        } else {
            document.querySelector('.mobileNav').style.display = 'none';
        }
    }, [menuopen]);


    const scrollToWhy = () => { 
        const whySection = document.getElementById('why');
        window.scrollTo({
          top: whySection.offsetTop,
          behavior: 'smooth'
        });
        //document.querySelector('#why-text').style.textDecoration = "underline solid white"
        menuToggle()
      }

      const scrollToHow = () => { 
        const howSection = document.getElementById('how');
        window.scrollTo({
          top: howSection.offsetTop,
          behavior: 'smooth'
        });
        menuToggle()
      }
      const scrollToRoadMap = () => { 
        const roadmapSection = document.getElementById('roadmap');
        window.scrollTo({
          top: roadmapSection.offsetTop,
          behavior: 'smooth'
        });
        menuToggle()
      }

      const openPdf = () => {
        window.open(whitepaper, "_blank");
      }; 

      window.onscroll =()=>{
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("navbar").style.background= "rgba(246, 253, 255,1)";
          document.getElementById("navbar").style.boxShadow= "0 2px 2px -2px rgba(0,0,0,.2)";
        } else {
          document.getElementById("navbar").style.background= "rgba(246, 253, 255,0)";
          document.getElementById("navbar").style.boxShadow= "none";
        }
      }
  
      // const flags = document.getElementsByClassName('flag_link'); 
      // if(flags)
      // {
      // // alert(flags.length)
      // }
      // else{
      //  ///alert("nothing")
      // }
 
//  Array.prototype.forEach.call(flags, function(e){
//    e.addEventListener('click', function(){
//      const lang = e.getAttribute('data-lang'); 
//      const languageSelect = document.querySelector("select.goog-te-combo");
//      languageSelect.value = lang; 
//      languageSelect.dispatchEvent(new Event("change"));
//    }); 
//  });

  return (
    <>
     <div className='mobileNav'>
          <a className='why-text' href='#mission' onClick={menuToggle}>Our Mission</a>
          <a className='how-text'  href='https://t.co/ueDF9WBnuO' target='_blank' onClick={menuToggle}>Community</a>
          <a className='road-text'  href='#roadmap' onClick={menuToggle}>Roadmap</a>
          <a className='white-text'  href='#' onClick={openPdf}>Whitepaper</a>
          <a className='white-text'  href='/team'>Team</a>
          <a className='white-text'  href='/nft'>NFT</a>
         <WalletButton/>
         <br />
         
        
        </div>
        <Nav id='navbar'>
            <NavLinkAnchor href="/" >
                <img src={logo} style={{padding:'0'}} alt="logo"/>
            </NavLinkAnchor>
              {menuopen ? (
                <Times onClick={menuToggle} />
            ) : (
                <Bars onClick={menuToggle} />
            )}
            
            
            <NavMenu>
            
                <NavLinkAnchor href='#mission'  style={{padding:'0 20px'}} >
                    Our Mission
                </NavLinkAnchor>
                <NavLinkAnchor style={{padding:'0 20px'}} href="https://t.co/ueDF9WBnuO" target='_blank' activeStyle>
                    Community
                </NavLinkAnchor>
                <NavLinkAnchor style={{padding:'0 20px'}} href="#roadmap" activeStyle>
                    Roadmap
                </NavLinkAnchor>
                <NavLinkAnchor style={{padding:'0 20px'}} href="#" onClick={openPdf} activeStyle>
                    Whitepaper
                </NavLinkAnchor>
                <NavLinkAnchor className='dropdown' style={{padding:'0 20px', position:'relative'}} href="#"  activeStyle>
                    More
                    <ion-icon name="chevron-down-outline"></ion-icon>
           
                    <div class="dropdown-content">

                    <a href="/team">Team</a>

                    <a href="/nft">NFT</a>

                  </div>
                </NavLinkAnchor>
                
            </NavMenu>
    {/* <div class="flag">
		<a href="#" class="flag_link eng" data-lang="en">EN<img class="img-fluid" src="https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg" alt=""/></a>
    <a href="#" class="flag_link fr" data-lang="fr">FR<img class="img-fluid" src="https://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg" alt=""/></a>
    <a href="#" class="flag_link de" data-lang="de">DE<img class="img-fluid" src="https://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg" alt=""/></a>
    <a href="#" class="flag_link pt" data-lang="pt">PT<img class="img-fluid" src="https://purecatamphetamine.github.io/country-flag-icons/3x2/PT.svg" alt=""/></a>
  <a href="#" class="flag_link it" data-lang="it">IT<img class="img-fluid" src="https://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg" alt=""/></a>
<a href="#" class="flag_link es" data-lang="es">ES<img class="img-fluid" src="https://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg" alt=""/></a>
<a href="#" class="flag_link ja" data-lang="ja">JA<img class="img-fluid" src="https://purecatamphetamine.github.io/country-flag-icons/3x2/JP.svg" alt=""/></a>
<a href="#" class="flag_link cn" data-lang="cn">CN<img class="img-fluid" src="https://purecatamphetamine.github.io/country-flag-icons/3x2/CN.svg" alt=""/></a>
<a href="#" class="flag_link tr" data-lang="tr">TR<img class="img-fluid" src="https://purecatamphetamine.github.io/country-flag-icons/3x2/TR.svg" alt=""/></a>
	</div> */}
           {/* <div id="google_translate_element"></div> */}
            <NavBtn>
 
            <WalletButton/>
            </NavBtn>
            
        </Nav>
    </>
  )
}

export default Navbar;