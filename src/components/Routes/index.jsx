import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './styles.module.sass'

const activeStyle = {
  backgroundColor : 'hsla(216, 85%, 34%,1)',
  fontWeight:'900'
}
const Routes = ()=>{
  return (
   <nav>
     <ul className={styles.list}>
       <li><NavLink to='/all' activeStyle={activeStyle}>All</NavLink></li>
       <li><NavLink to='/completed'  activeStyle={activeStyle}>Completed</NavLink></li>
       <li><NavLink to='/in-progress'  activeStyle={activeStyle}>In Progress</NavLink></li>
     </ul>
   </nav>
  )
}
export default Routes ;
