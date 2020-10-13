import React from 'react' ;
import PropTypes from 'prop-types' ;
import styles from './Button.module.scss';

const Button = ({onClick,children,...props})=>{
  return <button className={styles.btn} onClick={onClick} {...props}>{children}</button>
}
Button.propTypes = {
  onClick : PropTypes.func.isRequired,
  children:PropTypes.node

}

export const CompleteButton = ({onClick,children,...props})=>{
  return <button className={styles.completeBtn} onClick={onClick} {...props}>{children}</button>
}
CompleteButton.propTypes = {
  onClick : PropTypes.func.isRequired,
  children:PropTypes.node
}
export const DeleteButton = ({onClick,children,...props})=>{
  return <button className={styles.deleteBtn} onClick={onClick} {...props}>{children}</button>
}
DeleteButton.propTypes = {
  onClick : PropTypes.func.isRequired,
  children:PropTypes.node
}
export const EditButton = ({onClick,children,...props})=>{
  return <button className={styles.editBtn} onClick={onClick} {...props}>{children}</button>
}
EditButton.propTypes = {
  onClick : PropTypes.func.isRequired,
  children:PropTypes.node
}
