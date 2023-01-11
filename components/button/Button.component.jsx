import React from 'react';
import styles from './Button.styles.module.scss';

const stylesForButton = {
  classic: 'classic',
  inverted: 'inverted',
};

const Button = ({ children, style, ...otherProps }) => {
  return (
    <button
      className={`${styles.button} ${
        style === stylesForButton.classic ? styles.classic : styles.inverted
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
