import React, {Component} from 'react';
import Select from 'react-select';

import 'react-select/dist/react-select.css';

class SelectMultiple extends Component{
    constructor(...props){
       super(...props);
      
       this.state = {
         options: this.props.options,
         value: ''
       }
       this.cambiaSelect = this.cambiaSelect.bind(this);
       
    }

    cambiaSelect(value){
         this.setState({
             value
         })
    }

    render(){
            return(
                <Select 
                multi={true}
                simpleValue={true}
                joinValues={true}
                value={this.state.value}
                options={this.state.options}
                onChange={this.cambiaSelect}
                name={this.props.name} // recibe nombre del componente padre a traves de las props
                />
            )
    }

   
}
export default SelectMultiple;