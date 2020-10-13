import React from 'react';
import {Link} from "react-router-dom";
const Routes = ()=>{
  return (
   <nav>
     <ul>
       <li><Link to='/all'>All</Link></li>
       <li><Link to='/completed'>Completed</Link></li>
       <li><Link to='/in-progress'>In Progress</Link></li>
     </ul>
   </nav>
  )
}
export default Routes ;
