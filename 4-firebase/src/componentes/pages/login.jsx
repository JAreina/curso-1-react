import React, {Component} from 'react';
import {login} from '../helpers/auth';

export default class Login extends Component{

   constructor(...props){
       super(...props);

       this.state = {loginMensaje: null};
       this.enviar= this.enviar.bind(this);
   }

     enviar(e){
         e.preventDefault();
         alert("enviadndo formularios")
         login(this.email.value,this.password.value)
              .catch(error => this.setState(this.setErrorMensaje("USUARIO ERRÓNEO")));
     }


     setErrorMensaje(err){
         return {loginMensaje:err}
     }

    render(){
        return (
            <div className="Main-container">
               <div>PÁGINA login</div>
               <form onSubmit={this.enviar}>
               <input type="email" placeholder="tu email"
                ref={email=>this.email = email}/>
               <input type="password" placeholder="tu nombre de usuario"
               ref={pass=>this.password = pass}/>

               {
                   this.state.loginMensaje && 
                   <div className="error">
                       Error : {this.state.loginMensaje}
                   </div>
               }
               <input type="submit" value="loguearse"/>
               </form>
            </div>
        )
    }
}