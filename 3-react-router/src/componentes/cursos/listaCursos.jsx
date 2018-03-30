import React from 'react';
import Curso from './curso';
import uid from 'uid';

// componente sin estado

const Cursos = (props)=>{

        return(

            <div>
            <form onSubmit={props.addCurso}>
            <input type="text" placeholder="titulo del curso" name="curso"/>
            <input type="text" placeholder="profesor" name="profesor"/>
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
                            curso={curso.curso}
                            profesor={curso.profesor}
                       />
                        )
                    )
                }
               
            </ul>
            </div>
        )
    
}

export default Cursos;