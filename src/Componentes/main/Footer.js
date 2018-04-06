import React, { Component } from 'react';
import '../estilos/Footer.css';
import LogoFooter from '../imagenes/footerLogo.png';

<<<<<<< HEAD
import DesktopBreakpoint from '../responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from '../responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from '../responsive_utilities/phone_breakpoint';


=======
>>>>>>> c65e647b3405c37e9c0f75a9d68ffe4fa113a2b4
/* <img src={logo} className="App-logo" alt="logo" />
         <h1 className="App-title">Welcome to React</h1> */

class Footer extends Component {

  render() {
    return (
<<<<<<< HEAD
      <div>
      <PhoneBreakpoint>
      <div className="App">
        <div className="FooterPhone">
            <p>Aplicación Web para el curso de Ingeniería Web - Salud en casa</p>
            <p>Dedicada a mi novia, la más hermosa</p>
            <p>Contacto: Jonathan Payares Acevedo la mas gaysita</p>
            <img src={LogoFooter} className="footerLogoPhone" ></img>
        </div>
      </div>
      </PhoneBreakpoint>

       <DesktopBreakpoint>
=======
>>>>>>> c65e647b3405c37e9c0f75a9d68ffe4fa113a2b4
      <div className="App">
        <div className="Footer">
            <p>Aplicación Web para el curso de Ingeniería Web - Salud en casa</p>
            <p>Dedicada a mi novia, la más hermosa</p>
            <p>Contacto: Jonathan Payares Acevedo</p>
<<<<<<< HEAD
            <img src={LogoFooter} className="footerLogoDesk" ></img>
        </div>
      </div>
      </DesktopBreakpoint>

       
      <TabletBreakpoint>
      <div className="App">
        <div className="Footer">
            <p>Aplicación Web para el curso de Ingeniería Web - Salud en casa</p>
            <p>Dedicada a mi novia, la más hermosa</p>
            <p>Contacto: Jonathan Payares Acevedo</p>
            <img src={LogoFooter} className="footerLogoTablet" ></img>
        </div>
      </div>
      </TabletBreakpoint>
      </div>
=======
            <img src={LogoFooter} className="footerLogo" ></img>
        </div>
      </div>
>>>>>>> c65e647b3405c37e9c0f75a9d68ffe4fa113a2b4
    );
  }
}
export default Footer;