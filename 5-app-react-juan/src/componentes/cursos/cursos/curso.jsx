import React from 'react';

// Componente sin estado 
const Curso = (props)=>
    
        (
            <div>
           
            <ul>
               
            <li>{props.id} : {props.name} : {props.teacher}</li>
            </ul>
            </div>
        )
export default Curso;