import React, {Component} from 'react';
import {login,resetPassword} from '../helpers/auth';
import 'pure-css/lib/buttons.css';
import 'pure-css/lib/forms.css';
import './login.css'
export default class Login extends Component{

   constructor(...props){
       super(...props);

       this.state = {loginMensaje: null};
       this.enviar= this.enviar.bind(this);
       this.reseteaPassword= this.reseteaPassword.bind(this);
   }


   reseteaPassword(){
       resetPassword(this.email.value)
        .then(()=>this.setState(this.setMensaje(`SE HA ENVIADO UN CORREO 
        PARA RESTABLECER LA CONTRASEÑA A ${this.email.value}`)))
        .catch(err=>this.setMensaje(this.setMensaje(`El email ${this.email.value} no está registrado`)))
   }
     enviar(e){
         e.preventDefault();
         alert("enviadndo formularios")
         login(this.email.value,this.password.value)
              .catch(error => this.setState(this.setMensaje("USUARIO ERRÓNEO")))
     }


     setMensaje(msg){
         return {loginMensaje:msg}
     }

    render(){
        return (
            <div className="Main-container">
               <h1 >Login </h1>
               
               <form onSubmit={this.enviar} className="AuthForm">
              
               <input type="email" placeholder="tu email"
                ref={email=>this.email = email}/>
               <input type="password" placeholder="tu nombre de usuario"
               ref={pass=>this.password = pass}/>

               
               <input type="submit" value="loguearse" className="pure-button pure-button-primary"/>
               {
                   this.state.loginMensaje && 
                   <div className="u-error">
                        {this.state.loginMensaje}
                       <a href="#" className="alert-link" onClick={this.reseteaPassword()}>    Recuperar la contraseña </a>
                   </div>
               }
               </form>
            </div>
        )
    }
}