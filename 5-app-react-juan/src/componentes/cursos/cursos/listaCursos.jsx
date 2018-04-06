import React from 'react';
import Curso from './curso';
import uid from 'uid';
import Calendario from './calendario'
// componente sin estado

const Cursos = (props)=>{

        return(

            <div>
            <form onSubmit={props.addCurso} className="AuthForm">
            <input type="text" placeholder="titulo del curso" name="name"/>
            <input type="text" placeholder="profesor" name="teacher"/>
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