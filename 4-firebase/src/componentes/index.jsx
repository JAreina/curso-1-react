import React, { Component } from 'react';
import {
    Route,
    BrowserRouter as Router,
    Link,
    Redirect,
    Switch
} from 'react-router-dom';
import PropTypes from 'prop-types';


// css
import 'pure-css';
import './index.css';

import $ from 'jquery';
import {firebaseAuth} from './data/config'

// componente con estado

class App extends Component {
    constructor(...props) {
        super(...props);

        this.state = {
            autenticado: false,
            cagando: false,
            prueba: 'hola'
        }
        this.metodoPrueba = this.metodoPrueba.bind(this);
    }

    metodoPrueba() {

        this.setState({ prueba: "esto es una prueba" })

    }


    render() {
        return (
            this.state.cagando === true
                ? <h4>Cagando</h4>
                : (   <div>
                    <Router>
                    <div>
                            <header className="custom-menu-wrapper">
                                <div className="pure-menu custom-menu custom-menu-top">
                                    <a href="#" className="pure-menu-heading custom-menu-brand">Brand</a>
                                    <a href="#" className="custom-menu-toggle" id="toggle"><s className="bar"></s><s className="bar"></s></a>
                                </div>
                                <div className="pure-menu pure-menu-horizontal pure-menu-scrollable custom-menu custom-menu-bottom custom-menu-tucked" id="tuckedMenu">
                                    <div className="custom-menu-screen"></div>
                                    <ul className="pure-menu-list">
                                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
                                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">About</a></li>
                                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Contact</a></li>
                                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Blog</a></li>
                                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">GitHub</a></li>
                                       
                                    </ul>
                                </div>
                            
                            </header>
                       <main className="main">
                             <Switch>

                                 </Switch>
                       </main>
                       
                       </div>
                       </Router> </div>
                        )
                 /*   <div>
                            <p>{this.state.prueba}</p>
                            <button onClick={this.metodoPrueba}>click</button>
                        </div>*/
                )
          }
}
App.propTypes = {};
App.defaultProps={};
  
/*
(function (window, document) {
    document.getElementById('toggle').addEventListener('click', function (e) {
        document.getElementById('tuckedMenu').classList.toggle('custom-menu-tucked');
        document.getElementById('toggle').classList.toggle('x');
    });
    })(this, this.document);
  */                      
export default App;