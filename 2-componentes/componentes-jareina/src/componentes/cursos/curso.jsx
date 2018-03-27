import React from 'react';

// Componente sin estado 
const Curso = (props)=>
    
        (
            <div>
           
            <ul>
               
            <li>{props.id} : {props.nombre} : {props.profesor}</li>
            </ul>
            </div>
        )
export default Curso;