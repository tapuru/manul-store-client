import { Button, AppText, TextInput, Alert, Loader } from '../../../../shared/components/ui';
import { AppForm } from '../../../../shared/components';
import { Link, useNavigate } from 'react-router-dom';
import { RegisterInput, useRegisterMutation } from '../../api/authApi';
import React, { useState } from 'react';

export const RegistrationForm = () => {

  const navigate = useNavigate();

  const [inputData, setInputData] = useState<RegisterInput>({
    email: "",
    name: "",
    password: "",
    passwordConfirm: ""
  });
  const [requiredError, setRequiredError] = useState(false);

  const [apiErrorMessage, setApiErrorMessage] = useState("");

  const [register, { isLoading }] = useRegisterMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setApiErrorMessage("");

    if (
      inputData.email.length <= 0 || 
      inputData.name.length <= 0 || 
      inputData.password.length < 8 || inputData.password.length > 32 ||
      inputData.password !== inputData.passwordConfirm
      // inputData.passwordConfirm.length < 8 || inputData.passwordConfirm.length > 32
    ) {
      setRequiredError(true);
      return;
    }

    try {
      const response = await register(inputData).unwrap();

      console.log(response);

      navigate("/login");
    } catch (error: unknown) {
      setApiErrorMessage(error.data?.message);
      console.log(error)
    }
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputData({ ...inputData, name: e.target.value });
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputData({ ...inputData, email: e.target.value });
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputData({ ...inputData, password: e.target.value });
  const handlePasswordConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputData({ ...inputData, passwordConfirm: e.target.value });

  return (
    <div>
      <AppForm
        header={
          <>
            <AppText variant='h2' >Регистрация</AppText>
            <div>
              Уже есть аккаунт? <Link to={"/login"}>Войти</Link>
            </div>
          </>
        }
      >
        <TextInput 
          variant='basic' 
          placeholder='Имя' 
          type="text" 
          required 
          isError={requiredError && inputData.name.length <= 0}
          errorMessage={"Заполните обязательное поле!"}
          value={inputData.name}
          onChange={handleNameChange}
        />
        <TextInput 
          variant='basic' 
          placeholder='Email' 
          type='email' 
          required 
          isError={requiredError && inputData.email.length <= 0}
          errorMessage={"Заполните обязательное поле!"}
          value={inputData.email}
          onChange={handleEmailChange}
        />
        <TextInput 
          variant='basic' 
          placeholder='Пароль' 
          type='password' 
          required 
          isError={requiredError && (inputData.password.length < 8 || inputData.password.length > 32)}
          errorMessage={"Пароль не должен быть короче 8 или длиннее 32 символов!"}
          value={inputData.password}
          onChange={handlePasswordChange}
        />
        <TextInput 
          variant='basic' 
          placeholder='Повторите пароль' 
          type='password' 
          required 
          isError={requiredError && inputData.password !== inputData.passwordConfirm}
          errorMessage={"пароли не совпадают!"}
          value={inputData.passwordConfirm}
          onChange={handlePasswordConfirmChange}
        />
        {isLoading && 
          <Loader centered />
        }
        {apiErrorMessage &&
          <Alert message={apiErrorMessage} variant='error' />
        }
        <AppForm.Item>
          <Button size='lg' onClick={handleSubmit}>Зарегистрироваться</Button>
          <Button size='lg' variant='outlined' >Войти через Google</Button>
        </AppForm.Item>
      </AppForm>
    </div>
  )
}
