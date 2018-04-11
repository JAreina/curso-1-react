import React from 'react';
import './cursos.css';

// Componente sin estado 
const Curso = (props)=>{
   
   
    return (
       
          
        
            
         <li className="CoursesList-item ">
           
             <h2><i className="fa fa-key"></i>{props.id}. {props.name}</h2>
             <h6>{props.categories.map((cat,index,arr)=>
                    (index === arr.length -1)
                    ? cat
                    :`${cat}, `
            
            )}</h6>
             <p> <b><i className="fab fa-angellist"> </i><a href={props.url} target="a_blank">JAreina</a></b></p>
             <p> <b><i className="fas fa-user"> </i>{ props.teacher}</b></p>
             <p><b>  <i className="fa fa-calendar"></i>{props.date}</b></p>
                    <p> <b><i className="fa fa-dollar-sign"></i> {props.amount}</b></p>
         </li>
         
       
     )
}
    
                  
export default Curso;