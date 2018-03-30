import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Cursos from './cursos/listaCursos'
import css from './index.css';
import uid from 'uid';
import {cursos} from '../datos/cursosDatos.json';

import $ from 'jquery';


// componente con estado

class App extends Component{
        constructor(...props){
           super(...props);
          
           this.state = {
               //cursos:cursos
               cursos:[]
           }
           this.addCurso = this.addCurso.bind(this);
           this.cargarCursos = this.cargarCursos.bind(this);
           this.resetCursos = this.resetCursos.bind(this);
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


    cargarCursos(){
            //setTimeout(()=> this.setState({cursos:cursos}),1000);
            $('#root').fadeOut(1000,()=> this.setState({cursos:cursos})).fadeIn()
    }

    resetCursos(){
          //  this.setState({ cursos: []})
            $('#root').fadeOut(1000,()=> this.setState({cursos:[]})).fadeIn()
    }


    // se ejecuta despues del primer rendenr. METODO DEL CICLO DE VIDA DEL COMPONNETE
    componentDidMount(){
        console.log("metodo de react  que se ejecuta despues de renderizar el conponente")
        this.cargarCursos();
    }


        render(){
            if(!this.state.cursos.length){
                return (
                    <div>
                        <p>NO HAY CURSOS</p>
                        <button onClick={this.cargarCursos}>CARGAR CURSOS</button>
                        </div>
                )

            }else{
                return( 
                    <section>
                    <Cursos 
                    cursos={this.state.cursos}
                    addCurso={this.addCurso}//evento
                    />
                    <button onClick={this.resetCursos}>BORRARR CURSOS</button>
                     </section>
                      )

            }
               
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