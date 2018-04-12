import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Cursos from './cursos/listaCursos'
import css from './index.css';
import uid from 'uid';
import {categories,courses,teachers} from '../data/index';

import $ from 'jquery';


// componente PADRE DE : cursos,buscador ,listacursos

class LosCursos extends Component{
        constructor(...props){
           super(...props);
          
           this.state = {
               //cursos:cursos
               cursos:courses,
               teachers:teachers,
               categories:categories,
               filter:{
                   name:'',
                   teacher:'',
                   categories:[],
                   search:''
               }
           }
           this.addCurso = this.addCurso.bind(this);
           this.cargarCursos = this.cargarCursos.bind(this);
           this.resetCursos = this.resetCursos.bind(this);
           this.onSearch = this.onSearch.bind(this);
           this.manejarOnFilter = this.manejarOnFilter.bind(this);
        }

    addCurso(event){
          
             event.preventDefault();

             let formulario = event.target;
             let cursoNuevo= {
                 id: formulario.id.value,
                 name: formulario.name.value,
                 teacher: formulario.teacher.value,
                 date: formulario.date.value,
                 categories:formulario.categoria.value.split(","),
                 url:formulario.url.value,
                 amount:formulario.amount.value
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


    //USADO EN BUSCADOR.JSX
onSearch(e){
        let newFilter = Object.assign({},this.state.filter, {[e.target.name] : [e.target.value]});
        this.setState({
            filter: newFilter
        })

        //console.log("busqueda" + this.state.filter)
}
manejarOnFilter(filter,datos){
       let regex = new RegExp(filter.search,'i')
       return datos.filter(q=>(regex.test(q.name) ||
                                            regex.test(q.categories) ||
                                            regex.test(q.teacher) ))
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
                    cursos={this.manejarOnFilter(this.state.filter,this.state.cursos)}
                    addCurso={this.addCurso}//evento
                    onSearch={this.onSearch}
                    />
                    <button onClick={this.resetCursos} className="pure-button pure-button-primary">BORRARR CURSOS</button>
                     </section>
                      )

            }
               
        }
}
LosCursos.propTypes = {
    cursos: PropTypes.arrayOf(
                    {id: PropTypes.string.isRequired,
                    name: PropTypes.string.isRequired,
                    teacher: PropTypes.string.isRequired,
                categories:PropTypes.arrayOf(PropTypes.string),
            url:PropTypes.string.isRequired,
        amount:PropTypes.string.isRequired}
                 )
};
LosCursos.defaultProps=
    {id: uid(10),
    name: 'Ningún curso',
    teacher: 'Profesor no asignado',
categories:"no hay categoria"}
 

export default LosCursos;