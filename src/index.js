import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
<<<<<<< HEAD
=======

>>>>>>> c65e647b3405c37e9c0f75a9d68ffe4fa113a2b4
//Rutas
import AppRoutes from './routes';

//Assets
import './index.css';
import App from './Componentes/App';


render(
    <Router>
        <AppRoutes />
    </Router>, document.getElementById('root'));
registerServiceWorker();
