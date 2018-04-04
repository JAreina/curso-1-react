import React, {Component} from 'react';
import LosCursos from '../../cursos/index'
export default class Cursos extends Component{
    render(){
        return (
            <div className="Main-container">
               <div>PÁGINA protegida cursos</div>
               <LosCursos />
            </div>
        )
    }
}