import React from 'react';
import Curso from './curso';
import uid from 'uid';
import Calendario from './calendario'


import SelectMultiple from './selectMultiple';
import {categories, teachers} from '../../data';
import 'pure-css/lib/forms.css'
import 'pure-css/lib/buttons.css'
// componente sin estado





const Cursos = (props)=>{
    const opcionesProfesores = teachers.map((profe)=>{
        console.log("profe "+profe);
       return  Object.assign({},{label: profe,value: profe})
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
             <Calendario name="date" />
            <input type="hidden" name="id" value={uid(10)}/>
            <input type="submit" value="ok" className="pure-button pure-button-primary"/>
            </form>
            
            <ul className="AuthForm">
                {
                    
                  props.cursos.map(
                        curso =>(
                            <Curso  
                            key={curso.id}
                            id={curso.id}
                            name={curso.name}
                            teacher={curso.teacher}
                            date= {curso.date}
                       />
                        )
                    )
                }
               
            </ul>
            </div>
        )
    
}

export default Cursos;