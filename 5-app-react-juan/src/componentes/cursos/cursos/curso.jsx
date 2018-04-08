import React from 'react';

// Componente sin estado 
const Curso = (props)=>{
    const categorias = props.categories.join(', ');
    return (
         <div>
          
         <ul>
            
         <li><div>
             <h2>{props.id}. {props.name}</h2>
             <h6>{categorias}</h6>
             <p>{props.url}</p>
             <p>{props.teacher}</p>
             <p>{props.date}</p>
         </div> :  :  :  : : </li>
         </ul>
         </div>
     )
}
    
                  
export default Curso;