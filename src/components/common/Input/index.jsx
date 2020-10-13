import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import styles from './input.module.css';
const Input = ({ onChange, type, ...props }) => {
  const ref = useRef(null)
  useEffect(()=>{
    console.log(ref.current)
    ref.current.focus();
  },[])
	return <input ref={ref} className={styles.input} onChange={onChange} type={type} {...props} />;
};
Input.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	type: PropTypes.string,
	placeholder: PropTypes.string,
};
Input.defaultProps = {
	type: 'text',
};
export default Input;
