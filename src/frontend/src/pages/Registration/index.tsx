import React, { useState } from "react";
import "./Registration.scss";
import { Text, Card, TextInput, Button } from "@gravity-ui/uikit";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordVerify, setPasswordVerify] = useState<string>("");
  const [last_name, setLastName] = useState<string>("");
  const [first_name, setFirstName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [second_name, setSecondName] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate()

  function sendForm(
    login: string,
    password: string,
    first_name: string,
    last_name: string,
    second_name: string,
    date: string,
    phone: string
  ) {
    fetch("api/auth/register", {
      method: "post",
      body: JSON.stringify({
        login,
        first_name,
        last_name,
        date,
        phone,
        password,
        second_name
      }),
    }).then((res) => {
      if (res.status === 200) {
        navigate('/login')
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <main className="registration">
      <Text variant="header-2" className="registration-title">
        Регистрация
      </Text>
      <div className="sep"></div>
      <Card view="filled" className="registration-wrapper">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const emailRegex =
              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const numberRegex =
              /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

            if (
              password.length >= 8 &&
              passwordVerify === password &&
              first_name.length >= 2 &&
              second_name.length >= 2 &&
              last_name.length >= 2 &&
              emailRegex.test(login) &&
              numberRegex.test(phone) &&
              date !== undefined
            ) {
              setError(false);
              sendForm(login,password, first_name,last_name, second_name, date, phone);
            } else {
              setError(true);
            }
          }}
        >
          <TextInput
            size="xl"
            type="email"
            label="Почта:"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          ></TextInput>
          <div className="sep"></div>
          <TextInput
            size="xl"
            type="text"
            label="Имя:"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          ></TextInput>
          <div className="sep"></div>
          <TextInput
            size="xl"
            type="text"
            label="Фамилия:"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          ></TextInput>
          <div className="sep"></div>
          <TextInput
            size="xl"
            type="text"
            label="Отчество:"
            value={second_name}
            onChange={(e) => setSecondName(e.target.value)}
          ></TextInput>
          <div className="sep"></div>
          <TextInput
            size="xl"
            label="Дата рождения:"
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></TextInput>
          <div className="sep"></div>
          <TextInput
            size="xl"
            label="Телефон:"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></TextInput>
          <div className="sep"></div>
          <TextInput
            size="xl"
            label="Пароль:"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></TextInput>
          <div className="sep"></div>
          <TextInput
            size="xl"
            label="Подтвердите пароль:"
            type="password"
            value={passwordVerify}
            onChange={(e) => setPasswordVerify(e.target.value)}
          ></TextInput>
          <div className="sep"></div>
          {error && (
            <Text color="danger" className="error-message">
              Неверно заполненна анкета. Пожалуйста, попробуйте снова.
            </Text>
          )}
          <Button view="normal" width="max" type="submit">
            Зарегистрироваться
          </Button>
        </form>
      </Card>
    </main>
  );
};

export default Login;
