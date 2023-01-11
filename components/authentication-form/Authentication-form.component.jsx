import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Button from '../button/Button.component';
import Input from '../input/Input.component';

import styles from './authentication-form.styles.module.scss'

const defaultFormValues = {
  email: '',
  password: '',
};

const AuthenticationForm = ({ operation, text, redirect }) => {
  const router = useRouter()
  const [formValues, setFormValues] = useState(defaultFormValues);
  const [error, setError] = useState(null)
  const { email, password } = formValues

  const handleFormValues = (e) => {
    const { name, value} = e.target
    setFormValues({...formValues, [name]: value})
  } 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const [data, error] = await operation(email, password)
    if(error){
        setError(error.message)
    }
    else{
      router.push(redirect)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.authenticationFormContainer}>
      <h2>{text} with email</h2>
      {error && <h3>{error.slice(error.indexOf(':') + 1)}</h3>}
      <Input name="email" type="email" value={email} required onChange={handleFormValues}/>
      <Input name="password" type="password" value={password} required onChange={handleFormValues} />
      <Button>{text}</Button>
    </form>
  );
};

export default AuthenticationForm;
