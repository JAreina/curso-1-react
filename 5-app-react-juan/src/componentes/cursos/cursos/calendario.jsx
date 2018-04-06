import React, {Component} from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

class Calendario extends Component{
    constructor(...props){
       super(...props);
      
       this.state = {
           empieza: null
       }
       this.cambiaCalendario = this.cambiaCalendario.bind(this);
       
    }

    cambiaCalendario(date){
         this.setState({
             empieza: date
         })
    }

    render(){
            return(
                <DatePicker 
                selected={this.state.empieza}
                onChange={this.cambiaCalendario}
                placeholderText="FECHA"
                isClearable={true}
                dateFormat="DD/MM/YYYY"
                name={this.props.name} // recibe nombre del componente padre a traves de las props
                />
            )
    }

   
}
export default Calendario;