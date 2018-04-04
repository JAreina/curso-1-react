import React from 'react';
import Curso from './curso';
import uid from 'uid';

// componente sin estado

const Cursos = (props)=>{

        return(

            <div>
            <form onSubmit={props.addCurso}>
            <input type="text" placeholder="titulo del curso" name="name"/>
            <input type="text" placeholder="profesor" name="teacher"/>
            <input type="hidden" name="id" value={uid(10)}/>
            <input type="submit" value="ok"/>
            </form>
            
            <ul>
                {
                    
                  props.cursos.map(
                        curso =>(
                            <Curso  
                            key={curso.id}
                            id={curso.id}
                            name={curso.name}
                            teacher={curso.teacher}
                       />
                        )
                    )
                }
               
            </ul>
            </div>
        )
    
}

export default Cursos;