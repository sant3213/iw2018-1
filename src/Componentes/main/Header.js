import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../estilos/Header.css';
import { Link } from 'react-router-dom';

import Logo from  '../imagenes/logo2.png'; 
<<<<<<< HEAD
import LoginLogo from  '../imagenes/login2.png'; 
import RegistroLogo from  '../imagenes/registrar.png'; 
import CarritoLogo from  '../imagenes/carrito2.png'; 

//Responsive
import DesktopBreakpoint from '../responsive_utilities/desktop_breakpoint';
import TabletBreakpoint from '../responsive_utilities/tablet_breakpoint';
import PhoneBreakpoint from '../responsive_utilities/phone_breakpoint';
import ResponsiveMenu from 'react-responsive-navbar';
=======
import LoginLogo from  '../imagenes/login.png'; 

/*          <ul className="menu">
{items && items.map((item, key)=> <li key={key}><strong>{item.texto}</strong></li>)}
</ul>  */
>>>>>>> c65e647b3405c37e9c0f75a9d68ffe4fa113a2b4


class Header extends Component {


  constructor(){
    super();

    this.state={
      count: 0
    }

    this.handleMensaje = this.handleMensaje.bind(this);
  }

  static propTypes = {
    titulo: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };


  handleMensaje(e){
    if(e.target.id === "comprar"){
      this.setState({
        count: this.state.count +1
      });
    }
  }

  render() {
    const { titulo, items } = this.props;  //const titulo = this.props.titulo;
    return (
<<<<<<< HEAD
      <div>
      <PhoneBreakpoint>
      <div className="App">
        <header className="Header">
          <ul className="lineaPhone">
            <Link to={'/login'}>
            <button className="boton">
            <img src={LoginLogo} className="loginLogoPhone"></img>
              <a>Iniciar Sesión</a>
            </button>
            </Link>


            <Link to={'/registro'}>
            <button className="boton">
              <img src={RegistroLogo} className="loginLogoPhone"></img>
              <a>Registrarse</a>
            </button>
            </Link>



            <button className="boton">
              <img src={CarritoLogo} className="loginLogoPhone"></img>
              <a>Carro de compras</a>
            </button>


=======
      <div className="App">
        <header className="Header">
          <ul className="linea">
          <img src={LoginLogo} className="loginLogo"></img>
          <a>Iniciar Sesión</a>
>>>>>>> c65e647b3405c37e9c0f75a9d68ffe4fa113a2b4
          </ul>
          <table align="center">
            <tbody>
              <tr>
<<<<<<< HEAD
              <th><img src={Logo} className="logoPhone"></img></th>
=======
              <th><img src={Logo} className="logo"></img></th>
>>>>>>> c65e647b3405c37e9c0f75a9d68ffe4fa113a2b4
              <th><h1 className="titulo">Salud en Casa</h1><a className="subtitulo">Venta de Medicamentos</a></th>
              </tr>
            </tbody>
          </table>
<<<<<<< HEAD
          <ul className="menuPhone">
=======
          <ul className="menu">
>>>>>>> c65e647b3405c37e9c0f75a9d68ffe4fa113a2b4
          <Link to={'/'}><li><button id="principal" className="boton sobre">Principal</button></li></Link>
          <Link to={'/comprar'}><li><button id="comprar" className="boton sobre"> Comprar </button></li></Link>
          <Link to={'/consultar'}> <li><button id="consultar" className="boton sobre"> Consultar </button></li></Link>
          <Link to={'/contacto'}> <li><button id="contacto" className="boton sobre"> Contacto </button></li></Link>
           </ul>
        </header>
      </div>
<<<<<<< HEAD


      </PhoneBreakpoint>


      <DesktopBreakpoint>
      <div className="App">
        <header className="Header">
          <ul className="lineaDesk">
            <Link to={'/login'}>
            <button className="boton">
            <img src={LoginLogo} className="loginLogoDesk"></img>
              <a>Iniciar Sesión</a>
            </button>
            </Link>


            <Link to={'/registro'}>
            <button className="boton">
              <img src={RegistroLogo} className="loginLogoDesk"></img>
              <a>Registrarse</a>
            </button>
            </Link>



            <button className="boton">
              <img src={CarritoLogo} className="loginLogoDesk"></img>
              <a>Carro de compras</a>
            </button>


          </ul>
          <table align="center">
            <tbody>
              <tr>
              <th><img src={Logo} className="logoDesk"></img></th>
              <th><h1 className="titulo">Salud en Casa</h1><a className="subtitulo">Venta de Medicamentos</a></th>
              </tr>
            </tbody>
          </table>
          <ul className="menuDesk">
          <Link to={'/'}><li><button id="principal" className="boton sobre">Principal</button></li></Link>
          <Link to={'/comprar'}><li><button id="comprar" className="boton sobre"> Comprar </button></li></Link>
          <Link to={'/consultar'}> <li><button id="consultar" className="boton sobre"> Consultar </button></li></Link>
          <Link to={'/contacto'}> <li><button id="contacto" className="boton sobre"> Contacto </button></li></Link>
           </ul>
        </header>
      </div>


      </DesktopBreakpoint>


      <TabletBreakpoint>
      <div className="App">
        <header className="Header">
          <ul className="lineaTablet">
            <Link to={'/login'}>
            <button className="boton">
            <img src={LoginLogo} className="loginLogoTablet"></img>
              <a>Iniciar Sesión</a>
            </button>
            </Link>


            <Link to={'/registro'}>
            <button className="boton">
              <img src={RegistroLogo} className="loginLogoTablet"></img>
              <a>Registrarse</a>
            </button>
            </Link>



            <button className="boton">
              <img src={CarritoLogo} className="loginLogoTablet"></img>
              <a>Carro de compras</a>
            </button>


          </ul>
          <table align="center">
            <tbody>
              <tr>
              <th><img src={Logo} className="logoTablet"></img></th>
              <th><h1 className="titulo">Salud en Casa</h1><a className="subtitulo">Venta de Medicamentos</a></th>
              </tr>
            </tbody>
          </table>
          <ul className="menuTablet">
          <Link to={'/'}><li><button id="principal" className="boton sobre">Principal</button></li></Link>
          <Link to={'/comprar'}><li><button id="comprar" className="boton sobre"> Comprar </button></li></Link>
          <Link to={'/consultar'}> <li><button id="consultar" className="boton sobre"> Consultar </button></li></Link>
          <Link to={'/contacto'}> <li><button id="contacto" className="boton sobre"> Contacto </button></li></Link>
           </ul>
        </header>
      </div>


      </TabletBreakpoint>

      </div>
=======
>>>>>>> c65e647b3405c37e9c0f75a9d68ffe4fa113a2b4
    );
  }
}


export default Header;