import React, {Component} from 'react';
import LosCursos from '../../cursos/index'
export default class Cursos extends Component{
    render(){
        return (
            <div className="Main-container">
               <div>Cursos</div>
               <LosCursos />
            </div>
        )
    }
}