import React ,{Component}from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter,Switch
} from 'react-router-dom';
import PropTypes from 'prop-types';

// componentes sin estado
const Home = ()=>(<h4>home</h4>)

const Publico = ()=>(<h4>publico</h4>)
const Protegido = ()=>(<h4>protegido</h4>);

const autenticacionFalsa = {
    esAutenticado: false,
    autenticado(cb){
        this.esAutenticado = true;
        setTimeout(cb,100)
    },
    signout(cb){
        this.esAutenticado= false;
        setTimeout(cb, 100);
    }
}

const AuthButton = withRouter(({history})=>(
(autenticacionFalsa.esAutenticado)
 ?  <div>
     <h1>bienvenido</h1>
     <button onClick={()=>
        autenticacionFalsa.signout(()=> history.push('/'))}>
     salir
     </button>
     </div>
 :  <h3>NO ESTÁ LOGUEADO</h3>
));

const PrivateRoute = ({component: Component,rest })=>(
    <div>
    <Route {...rest}  
    render={(props)=>(
        (autenticacionFalsa.esAutenticado)
            ?  <Component {...props}/>
            :  <Redirect  to={
                {
                    pathname:'/login',
                    state:{
                             from:props.location
                            }
               }
               }/>
    )}
    
    
    /></div>
);




//COMPONENTE CON ESTADO
class Login extends Component{
    constructor(...props){
       super(...props);
      
       this.state = {
          redirectRoute: true
       }
       this.login = this.login.bind(this);
       
    }
   

    login(history){
        autenticacionFalsa.autenticado(()=>{
             this.setState({redirectRoute: true})
             window.history.back()
        })
    }

    render(){

        const {from }= this.props.location.state || {from: {pathname:'/'}}
       
       const {redirectRoute}= this.state.redirectRoute;

        if(redirectRoute){
            return(
                <Redirect to={from}/>
            )

        }else{
             return(
                 <h4>debes estar LOGUEADO
                     <mark>{from.pathname}</mark>
                     <button onClick={this.login}>login</button>
                 </h4>
             )
        }
    }
}

// COMPONENTE SIN ESTADO
 export const Au = ()=>
   (
    <div>
        <h2>JAreina <a href="https://github.com/JAreina" target="_blank">GITHUB</a></h2>
     <Router>
      <div>
          <AuthButton
          
          />
          <ul>
        <li>
            <Link to="/">inicio</Link>
        </li>
        <li>
            <Link to="/publico">publico</Link>

        </li>
        <li>
            <Link to="/login">login</Link>
        </li>
        <li>
            <Link to="/protegido">protegido</Link>
        </li>
        
    </ul>
  <Switch>
     <Route path="/"  exact component={Home}/>
     <Route path="/publico" component={Publico}/>
     <Route path="/login" component={Login}/>
     <PrivateRoute path="/protegido" component={Protegido}/>
      </Switch>
      </div>
         </Router>
         </div>
)

