import React from 'react';
import Curso from './curso';
import uid from 'uid';
import Calendario from './calendario'


import SelectMultiple from './selectMultiple';
import {categories, teachers} from '../../data';
import 'pure-css/lib/forms.css'
import 'pure-css/lib/buttons.css'
import './cursos.css';
// componente sin estado





const Cursos = (props)=>{
    const opcionesProfesores = teachers.map((profe)=>{
        console.log("profe "+profe);
       return  Object.assign({},{label: profe,value: profe})
    }
    
    )

    const opcionesCategorias = categories.map((cate)=>{
        console.log("cate "+cate);
       return  Object.assign({},{label: cate,value: cate})
    }
    
    )
        return(

            <div>
            <form onSubmit={props.addCurso} className="AuthForm">
            <input type="text" placeholder="titulo del curso" name="name"/>
            <SelectMultiple 
                 name="teacher"
                 placeholder="Selecciona..."
                 options={opcionesProfesores}/>
                 <SelectMultiple 
                 name="categoria"
                 placeholder="Selecciona..."
                 options={opcionesCategorias}/>
                 <input type="url" placeholder="poster" name="poster"/>
                 <input type="url" placeholder="web" name="url"/>
                 <input type="number" placeholder="costo" name="amount"/>
             <Calendario name="date" />
            <input type="hidden" name="id" value={uid(10)}/>
            <input type="submit" value="ok" className="pure-button pure-button-primary"/>
            </form>
            

              <h1>LISTADO DE CURSOS</  h1>
            <ul className="CoursesList">
          
                {
                    
                  props.cursos.map(
                        curso =>(
                            <Curso  
                            key={curso.id}
                            id={curso.id}
                            name={curso.name}
                            teacher={curso.teacher}
                            date= {curso.date}
                            categories={curso.categories}
                            url={curso.url}
                            amount={curso.amount}
                       />
                        )
                    ).reverse()
                }
               
            </ul>
            </div>
        )
    
}

export default Cursos;