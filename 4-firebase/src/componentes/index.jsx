import React,{Component} from 'react';
import {
    Route,
    BrowserRouter as Router,
    Link,
    Redirect,
    Switch
}from 'react-router-dom';
import PropTypes from 'prop-types';

import  './index.css';



import $ from 'jquery';


// componente con estado

class App extends Component{
        constructor(...props){
           super(...props);
          
           this.state = {
             
               prueba: 'hola'
           }
           this.metodoPrueba = this.metodoPrueba.bind(this);
        }

   metodoPrueba(){
     
       this.setState({prueba:"esto es una prueba"})
      
   }


        render(){
                return (
                    <div>
                        <p>{this.state.prueba}</p>
                        <button onClick={this.metodoPrueba}>click</button>
                        </div>
                )  
          }
}
App.propTypes = {};
App.defaultProps={};
 

export default App;