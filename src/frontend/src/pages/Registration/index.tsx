import React, { useState } from "react";
import "./Registration.scss";
import { Text, Card, TextInput, Button } from "@gravity-ui/uikit";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordVerify, setPasswordVerify] = useState<string>("");
  const [fullname, setFullname] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  function sendForm(email: string, password: string) {
    console.log(email);
    console.log(password);
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
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (emailRegex.test(email) && password.length >= 8 && passwordVerify === password && fullname.length >= 8) {
              setError(false);
              sendForm(email, password);
            } else {
              setError(true);
            }
          }}
        >
          <TextInput
            size="xl"
            type="email"
            label="Почта:"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></TextInput>
          <div className="sep"></div>
          <TextInput
            size="xl"
            type="text"
            label="Полное имя:"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
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
              Неверная почта или пароль. Пожалуйста, попробуйте снова.
            </Text>
          )}
          <Button view="normal" width="max" type="submit">
            Войти
          </Button>
        </form>
      </Card>
    </main>
  );
};

export default Login;
