import React, { useState } from "react";
import "./CreateNewOrg.scss";
import { Text, Card, TextInput, Button } from "@gravity-ui/uikit";
import { Link } from "react-router-dom";

const CreateNewOrg: React.FC = () => {
  const [fullname, setFullname] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [INN, setINN] = useState<string>("");
  const [organizationName, setOrganizationName] = useState<string>("");
  const [organizationAddress, setOrganizationAddress] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  function sendForm(
    email: string,
    fullname: string,
    number: string,
    INN: string,
    organizationName: string,
    organizationAddress: string
  ) {}

  return (
    <main className="create">
      <Text variant="header-2" className="create-title">
        Регистрация новой школы
      </Text>
      <div className="sep"></div>
      <Card view="filled" className="create-wrapper">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const emailRegex =
              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const numberRegex =
              /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
            const INNRegex = /^[\d+]{10,12}$/;

            if (
              fullname.length >= 20 &&
              emailRegex.test(email) &&
              numberRegex.test(number) &&
              INNRegex.test(INN) &&
              organizationName.length >= 15 &&
              organizationAddress.length >= 20
            ) {
              setError(false);
              sendForm(email, fullname, number, INN, organizationName, organizationAddress);
            } else {
              setError(true);
            }
          }}
        >
          <TextInput
            size="xl"
            type="text"
            label="ФИО:"
            value={fullname}
            onChange={(e) => setEmail(e.target.value)}
          ></TextInput>
          <div className="sep"></div>
          <TextInput
            size="xl"
            label="Номер телефона:"
            type="text"
            pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          ></TextInput>
          <div className="sep"></div>
          <TextInput
            size="xl"
            label="Почта:"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></TextInput>
          <div className="sep"></div>
          <TextInput
            size="xl"
            label="ИНН организации:"
            type="number"
            value={INN}
            onChange={(e) => setINN(e.target.value)}
          ></TextInput>
          <div className="sep"></div>
          <TextInput
            size="xl"
            label="Название организации:"
            type="text"
            value={organizationName}
            onChange={(e) => setOrganizationName(e.target.value)}
          ></TextInput>
          <div className="sep"></div>
          <TextInput
            size="xl"
            label="Адрес организации:"
            type="text"
            value={organizationAddress}
            onChange={(e) => setOrganizationAddress(e.target.value)}
          ></TextInput>
          <div className="sep"></div>
          {error && (
            <Text color="danger" className="error-message">
              Неверная почта или пароль. Пожалуйста, попробуйте снова.
            </Text>
          )}
          <Button view="normal" width="max" type="submit">
            Зарегистрировать
          </Button>
        </form>
      </Card>
    </main>
  );
};

export default CreateNewOrg;
