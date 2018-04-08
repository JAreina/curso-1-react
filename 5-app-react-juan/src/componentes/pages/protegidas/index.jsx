import React, {Component} from 'react';
import LosCursos from '../../cursos/index'

import './protegida.css';

export default class Cursos extends Component{
    render(){
        return (
            <div className="Main-container">
            <h1 >Crear Curso</h1>
               <LosCursos />
            </div>
        )
    }
}