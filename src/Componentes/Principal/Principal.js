import React, { Component } from 'react';
import Banner from '../imagenes/farmacia1.png';
import icono1 from '../imagenes/icono1.png';
import icono2 from '../imagenes/icono2.png';
import icono3 from '../imagenes/icono3.png';

<<<<<<< HEAD

import DesktopBreakpoint from '../responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from '../responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from '../responsive_utilities/phone_breakpoint';

=======
>>>>>>> c65e647b3405c37e9c0f75a9d68ffe4fa113a2b4
import './principal.css';


class Principal extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div>
      <PhoneBreakpoint>
 
=======
>>>>>>> c65e647b3405c37e9c0f75a9d68ffe4fa113a2b4
      <div className="App">
          <img src={Banner} className="banner"></img>
          <div className="tabla">
        <table align="center">
          <tbody>
            <tr>
              <th>
<<<<<<< HEAD
                <div className="container1Phone">
=======
                <div className="container1">
>>>>>>> c65e647b3405c37e9c0f75a9d68ffe4fa113a2b4
                <img src={icono1} className="icono"></img>
                <p className="textoContainer">Productos de la más alta calidad </p>
                </div>
              </th>
              <th>
<<<<<<< HEAD
                <div className="container2Phone">
=======
                <div className="container2">
>>>>>>> c65e647b3405c37e9c0f75a9d68ffe4fa113a2b4
                <img src={icono2} className="icono"></img>
                <p className="textoContainer">Servicio de domicilio</p>
                </div>
              </th>
              <th>
<<<<<<< HEAD
                <div className="container3Phone">
=======
                <div className="container3">
>>>>>>> c65e647b3405c37e9c0f75a9d68ffe4fa113a2b4
                <img src={icono3} className="icono"></img>
                <p className="textoContainer">En cualquier momento del día</p>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
      
<<<<<<< HEAD
      </PhoneBreakpoint>
    

      <DesktopBreakpoint>
 
      <div className="App">
          <img src={Banner} className="banner"></img>
          <div className="tabla">
        <table align="center">
          <tbody>
            <tr>
              <th>
                <div className="container1Desk">
                <img src={icono1} className="icono"></img>
                <p className="textoContainer">Productos de la más alta calidad </p>
                </div>
              </th>
              <th>
                <div className="container2Desk">
                <img src={icono2} className="icono"></img>
                <p className="textoContainer">Servicio de domicilio</p>
                </div>
              </th>
              <th>
                <div className="container3Desk">
                <img src={icono3} className="icono"></img>
                <p className="textoContainer">En cualquier momento del día</p>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
      
      </DesktopBreakpoint>


      <TabletBreakpoint>
 
      <div className="App">
          <img src={Banner} className="banner"></img>
          <div className="tabla">
        <table align="center">
          <tbody>
            <tr>
              <th>
                <div className="container1Tablet">
                <img src={icono1} className="icono"></img>
                <p className="textoContainer">Productos de la más alta calidad </p>
                </div>
              </th>
              <th>
                <div className="container2Tablet">
                <img src={icono2} className="icono"></img>
                <p className="textoContainer">Servicio de domicilio</p>
                </div>
              </th>
              <th>
                <div className="container3Tablet">
                <img src={icono3} className="icono"></img>
                <p className="textoContainer">En cualquier momento del día</p>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
      
      </TabletBreakpoint>
      </div>

=======
>>>>>>> c65e647b3405c37e9c0f75a9d68ffe4fa113a2b4
    );
  }
}


export default Principal;