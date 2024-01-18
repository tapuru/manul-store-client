import { Button, AppText, TextInput, Alert, Loader } from '../../../../shared/components/ui';
import { AppForm } from '../../../../shared/components';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setCredentials } from '../../model/userSlice';
import { useAppDispatch } from '../../../../app/store';
import { LoginInput, useLoginMutation } from '../../api/authApi';

export const LoginForm = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [inputData, setInputData] = useState<LoginInput>({ email: "", password: "" });
  const [validationError, setValidationError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    setErrorMessage("");
  }, [inputData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      inputData.email.length <= 0 ||
      inputData.password.length <= 0
    ) {
      setValidationError(true);
      return;
    }

    try {
      const userData = await login(inputData).unwrap();
      dispatch(setCredentials(userData));
      setInputData({ ...inputData, password: "", email: "" });
      navigate("/");

    } catch (error) {
      console.log(error);
      if (error.status === "FETCH_ERROR") {
        setErrorMessage("Попробуйте позже"); 
        return;
      }
      setErrorMessage(error.data.message);
    }
  }

  return (
    <div>
      <AppForm
        header={
          <>
            <AppText variant='h2' >Вход</AppText>
            <div>
              Нет аккаунта? <Link to={"/registration"}>Зарегистрируйтесь</Link>
            </div>
          </>
        }
      >
        <AppForm.Item>
          <TextInput 
            variant='basic' 
            placeholder='Email' 
            type='email'
            onChange={(e) => setInputData(prev => ({ ...prev, email: e.target.value }))}
            required
            isError={validationError && inputData.email.length <= 0}
            errorMessage={"Заполните обязательное поле!"}
          />
        </AppForm.Item>
        <AppForm.Item>
          <TextInput 
            variant='basic' 
            placeholder='Пароль' 
            type='password' 
            onChange={(e) => setInputData(prev => ({ ...prev, password: e.target.value }))}
            required
            isError={validationError && inputData.password.length <= 0}
            errorMessage={"Заполните обязательное поле!"}
          />
        </AppForm.Item>
        {errorMessage && <Alert variant='error' message={errorMessage} />}
        {isLoading && <Loader centered />}
        <AppForm.Actions>
          <Button size='lg' onClick={handleSubmit}>Войти</Button>
          <div>
            <a href="">Забыли пароль?</a>
          </div>
        </AppForm.Actions>
      </AppForm>
    </div>
  )
}
