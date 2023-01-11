import styles from './input.styles.module.scss';

const Input = ({inputName, ...otherProps}) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={otherProps.name} className={otherProps.value ? styles.active : ''}>{otherProps.name[0].toUpperCase() + otherProps.name.slice(1)}</label>
      <input
        {...otherProps}
      />
    </div>
  );
};

export default Input;
