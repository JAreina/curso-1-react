import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Cursos from './cursos/listaCursos'
import css from './index.css';
import uid from 'uid';
import {categories,courses,teachers} from '../data/index';

import $ from 'jquery';


// componente con estado

class LosCursos extends Component{
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
                 name: formulario.name.value,
                 teacher: formulario.teacher.value
             }
             console.log(cursoNuevo);
         console.log("PROPIEDAD ID POR DEFECTO : " +LosCursos.defaultProps.id);

             // CAMIBIAR ESTADO. agregar nuevo curso al array de cursos del estado
             this.setState({
                 cursos: this.state.cursos.concat([cursoNuevo])
             })

             formulario.reset();
    }


    cargarCursos(){
            //setTimeout(()=> this.setState({cursos:cursos}),1000);
            $('#root').fadeOut(1000,()=> this.setState({cursos:courses})).fadeIn()
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
LosCursos.propTypes = {
    cursos: PropTypes.arrayOf(
                    {id: PropTypes.string.isRequired,
                    name: PropTypes.string.isRequired,
                    teacher: PropTypes.string.isRequired}
                 )
};
LosCursos.defaultProps=
    {id: uid(10),
    name: 'Ningún curso',
    teacher: 'Profesor no asignado'}
 

export default LosCursos;