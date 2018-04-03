import React, {Component} from 'react';
import {auth} from '../helpers/auth';
import 'pure-css/lib/buttons.css';
import 'pure-css/lib/forms.css';
import './login.css'


export default class Registro extends Component{

   constructor(...props){
       super(...props);

       this.state = {loginMensaje: null};
       this.enviar= this.enviar.bind(this);
       this.setMensaje = this.setMensaje.bind(this);
     
   }


  
     enviar(e){
         e.preventDefault();
         //alert("enviando registro formularios")
         auth(this.email.value,this.password.value)
              .catch(err => this.setState(this.setMensaje(err.message)))
     }


     setMensaje(msg){
         return {loginMensaje:msg}
     }

    render(){
        return (
            <div className="Main-container">
               <h1 >Registro </h1>
               
               <form onSubmit={this.enviar} className=" pure-form AuthForm">
              
               <input type="email" placeholder="tu email"
                ref={email=>this.email = email}/>
               <input type="password" placeholder="tu nombre de usuario"
               ref={pass=>this.password = pass}/>

               
               <input type="submit" value="REGISTRO" className="pure-button pure-button-primary"/>
               {
                   this.state.loginMensaje && 
                   <div className="u-error">
                        {this.state.loginMensaje}
                   
                   </div>
               }
               </form>
            </div>
        )
    }
}