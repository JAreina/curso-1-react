import React, {Component} from 'react';

class MiComponente extends React.Component{
    render(){
      return(
        <div>
          <h2>JAreina{this.props.name}</h2>
          <img src="./img/react.svg" alt="logo"/>
          </div>
      )
    }
  }
  
  
  
  
  const element = <h1>Hello, world</h1>;
  
  export default MiComponente;