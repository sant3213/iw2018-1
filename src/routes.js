//Dependencias

import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';

//Componentes

import App from './Componentes/App.js';
import Principal from './Componentes/Principal/Principal.js';
import Comprar from './Componentes/Comprar/Comprar.js';
import Consultar from './Componentes/Consultar/Consultar.js';
import Contacto from './Componentes/Contacto/Contacto.js';
import Page404 from './Componentes/Page404/Page404.js';
<<<<<<< HEAD
import Registro from './Componentes/SignUp.js';
=======
import IniciarSesion from './Componentes/SignUp.js';
>>>>>>> c65e647b3405c37e9c0f75a9d68ffe4fa113a2b4


const AppRoutes = () =>
<App>
    <Switch>
        <Route exact path="/" component={ Principal } />
        <Route path="/comprar" component={ Comprar } />
        <Route path="/consultar" component={ Consultar } />
        <Route path="/contacto" component={ Contacto } />
<<<<<<< HEAD
        <Route path="/registro" component={ Registro } />
=======
        <Route path="/login" component={ IniciarSesion } />
>>>>>>> c65e647b3405c37e9c0f75a9d68ffe4fa113a2b4
        <Route component={Page404} />
    </Switch>
</App>;

export default AppRoutes;
 