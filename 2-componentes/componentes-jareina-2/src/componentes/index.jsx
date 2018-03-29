import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Cursos from './cursos/listaCursos'
import css from './index.css';
import uid from 'uid';
import {cursos} from '../datos/cursosDatos';
// componente con estado

class App extends Component{
        constructor(...props){
           super(...props);
          
           this.state = {
                cursos:cursos
           }
           this.addCurso = this.addCurso.bind(this);
           
        }

    addCurso(event){
          
             event.preventDefault();

             let formulario = event.target;
             let cursoNuevo= {
                 id: formulario.id.value,
                 curso: formulario.curso.value,
                 profesor: formulario.profesor.value
             }
             console.log(cursoNuevo);
         console.log("PROPIEDAD ID POR DEFECTO : " +App.defaultProps.id);

             // CAMIBIAR ESTADO. agregar nuevo curso al array de cursos del estado
             this.setState({
                 cursos: this.state.cursos.concat([cursoNuevo])
             })

             formulario.reset();
    }




        render(){
               return( 
               <Cursos 
               cursos={this.state.cursos}
               addCurso={this.addCurso}//evento
               />
               
                 )
        }
}
App.propTypes = {
    cursos: PropTypes.arrayOf(
                    {id: PropTypes.string.isRequired,
                    curso: PropTypes.string.isRequired,
                    profesor: PropTypes.string.isRequired}
                 )
};
App.defaultProps=
    {id: uid(10),
    curso: 'Ningún curso',
    profesor: 'Profesor no asignado'}
 

export default App;