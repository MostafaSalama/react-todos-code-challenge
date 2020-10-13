import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.sass';
import {Link} from "react-router-dom";
import Routes from "../Routes";
function Header({title}) {
  return (
    <header className={styles.header}>
     <Link to='/'>
       <h1 className={styles.title}>
         {title}
       </h1>
     </Link>
      <Routes/>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'React Todos',
};

export default Header;
