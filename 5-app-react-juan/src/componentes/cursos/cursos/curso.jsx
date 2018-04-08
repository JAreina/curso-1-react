import React from 'react';

// Componente sin estado 
const Curso = (props)=>{
   
   
    return (
         <div>
          
         <ul>
            
         <li><div>
             <h2>{props.id}. {props.name}</h2>
             <h6>{props.categories}</h6>
             <p>URL: {props.url}</p>
             <p>PROFESOR/A: {props.teacher}</p>
             <p>FECHA :{props.date}</p>
                    <p>PRECIO: {props.amount}</p>
         </div> :  :  :  : : </li>
         </ul>
         </div>
     )
}
    
                  
export default Curso;