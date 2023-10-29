import React, { useState } from "react";
import "./Login.scss";
import { Text, Card, TextInput, Button } from "@gravity-ui/uikit";
import { Link } from "react-router-dom";
import { UpdateContext, Context } from "app/contexts";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setUser } = useContext(UpdateContext);
  const { user } = useContext(Context);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  if(user.isLogin === 'true') {
    navigate('/')
  }

  function sendForm(email: string, password: string) {
    fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      credentials: "include",
      body: JSON.stringify({ login: email, password }),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((res) => {
        if (res.success) {
          return res.user;
        }
      })
      .then((data) => {
        if (data) {
          localStorage.setItem("isLogin", "true");
          setUser({
            first_name: data.first_name,
            second_name: data.second_name,
            login: data.login,
            id: data.id,
            avatar: data.avatar,
            isLogin: true
          });
          localStorage.setItem('user', JSON.stringify({
            first_name: data.first_name,
            last_name: data.last_name,
            avatar: data.avatar,
            login: data.login,
            id: data.id,
            isLogin: true
          }))
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <main className="login">
      <Text variant="header-2" className="login-title">
        Вход
      </Text>
      <div className="sep"></div>
      <Card view="filled" className="login-wrapper">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const emailRegex =
              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (emailRegex.test(email) && password.length >= 8) {
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
            label="Пароль:"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          <div className="sep"></div>
          <Text variant="body-1">
            или <Link to={"/registration"}>Зарегистрируйтесь</Link>
          </Text>
        </form>
      </Card>
    </main>
  );
};

export default Login;
