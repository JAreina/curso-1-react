import React, { Component } from 'react';
import {
    Route,
    BrowserRouter as Router,
    Link,
    Redirect,
    Switch
} from 'react-router-dom';



// css
import 'pure-css';
import './index.css';


// firebase 
import { firebaseAuth } from './data/config'

import logo from './media/jareina.png'

// componentes pages
import Home from './pages/index';
import About from './pages/about';
import Error404 from './pages/error404';
import Login from './pages/login';
import Registro from './pages/registro';
import Cursos from './pages/protegidas/index';
import { logout } from './helpers/auth'


const PrivateRoute = ({ component: Component, autenticado, rest }) => (
    <Route
        {...rest}
        render={
            props => autenticado === true
                ? <Component {...props} />
                : <Redirect to={
                    {
                        pathname: '/login',
                        state: { from: props.location }
                    }
                } />
        }
    />
);

const PublicRoute = ({ component: Component, autenticado, rest }) => (
    <Route
        {...rest}
        render={
            props => autenticado === false
                ? <Component {...props} />
                : <Redirect to='/cursos'  />
        }
    />
);




class App extends Component {
    constructor(...props) {
        super(...props);

        this.state = {
            autenticado: false,
            cagando: true,
            prueba: 'hola'
        }
        this.metodoPrueba = this.metodoPrueba.bind(this);
        this.clickMenu = this.clickMenu.bind(this);
    }

    metodoPrueba() {

        this.setState({ prueba: "esto es una prueba" })

    }


    render() {
        return (
            this.state.cagando === true
                ? <h4>Cagando</h4>
                : (<div >
                    <Router>
                        <div className="">
                            <header className="custom-menu-wrapper">
                                <div className="pure-menu custom-menu custom-menu-top">
                                    <a className="pure-menu-heading custom-menu-brand">
                                        <div className="pure-g">
                                            <img className="pure-u-12-12" src={logo} alt="logo" />
                                        </div>
                                    </a>
                                    <a className="custom-menu-toggle"
                                        onClick={this.clickMenu}
                                        id="toggle">

                                        <s className="bar"></s>
                                        <s className="bar"></s>


                                    </a>
                                </div>
                                <div className="pure-menu pure-menu-horizontal pure-menu-scrollable custom-menu custom-menu-bottom custom-menu-tucked" id="tuckedMenu">
                                    <div className="custom-menu-screen"></div>
                                    <ul className="pure-menu-list">
                                        <li className="pure-menu-item" >
                                            <Link to='/' className="pure-menu-link" onClick={this.clickMenu}>Inicio</Link>

                                        </li>
                                        <li className="pure-menu-item" >
                                            <Link to='/about' className="pure-menu-link" onClick={this.clickMenu}>About</Link>

                                        </li>



                                        {
                                            (this.state.autenticado)
                                                ? <span>
                                                    <li className="pure-menu-item" >
                                                        <Link to='/cursos' className="pure-menu-link" onClick={this.clickMenu}>Cursos</Link>

                                                    </li>
                                                    <li className="pure-menu-item" >
                                                        <Link to='/logout' className="pure-menu-link"
                                                            onClick={() => {
                                                                logout()
                                                                this.setState({ autenticado: false })
                                                                this.clickMenu()
                                                            }
                                                            }>Logout</Link>

                                                    </li>
                                                </span>
                                                : <span>
                                                    <li className="pure-menu-item" >
                                                        <Link to='/registro' className="pure-menu-link" onClick={this.clickMenu}>Registro</Link>

                                                    </li>
                                                    <li className="pure-menu-item" >
                                                        <Link to='/login' className="pure-menu-link" onClick={this.clickMenu}>Login</Link>

                                                    </li>
                                                </span>
                                        }

                                    </ul>
                                </div>

                            </header>
                            <main className="main">
                                <Switch>
                                    <Route path="/" exact component={Home} />
                                    <Route  path="/about" component={About} />
                                    <PublicRoute autenticado={this.state.autenticado} path="/login" component={Login} />
                                    <PublicRoute autenticado={this.state.autenticado} path="/registro" component={Registro} />
                                    <Route path="/error" component={Error404} />
                                    <PrivateRoute autenticado={this.state.autenticado}  path="/cursos" component={Cursos} />
                                    <PrivateRoute autenticado={this.state.autenticado}  path="/logout" component={Login} />
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

    clickMenu() {

        document.getElementById('tuckedMenu').classList.toggle('custom-menu-tucked');
        document.getElementById('toggle').classList.toggle('x');
    }

    componentDidMount() {
        this.removeListener = firebaseAuth().onAuthStateChanged( user => {
          if (user) {
            this.setState({
              autenticado: true,
              cagando: false
            })
          } else {
            this.setState({
              cagando: false
            })
          }
        })
      }
    
      componentWillUnmount() {
        this.removeListener()
      }


}
App.propTypes = {};
App.defaultProps = {};


export default App;