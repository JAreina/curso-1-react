import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Cursos from './cursos/listaCursos'
import css from './index.css';


// componente con estado

class App extends Component{
        constructor(...props){
           super(...props);
          
           this.state = {
                 cursos:[
                     {id:1,nombre:"REACT",profesor:"JAreina"},
                     {id:2,nombre:"ANGULAR",profesor:"JAreina"}
                 ]
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

             // agregar nuevo curso al array de cursos del estado
             this.setState({
                 cursos: this.state.cursos.concat([cursoNuevo])
             })
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
     
};
App.defaultProps={};


export default App;