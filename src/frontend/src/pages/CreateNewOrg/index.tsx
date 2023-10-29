import React, { useContext, useEffect, useState } from "react";
import "./CreateNewOrg.scss";
import { Text, Card, TextInput, Button } from "@gravity-ui/uikit";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "app/contexts";

const CreateNewOrg: React.FC = () => {
  const [INN, setINN] = useState<string>("");
  const [organizationName, setOrganizationName] = useState<string>("");
  const [organizationAddress, setOrganizationAddress] = useState<string>("");
  const [domain, setDomain] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const user = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.isLogin === false) {
      navigate("/login");
    }
  });

  function sendForm(
    INN: string,
    organizationName: string,
    organizationAddress: string,
    domain: string
  ) {
    fetch("api/organizations/create", {
      method: "post",
      body: JSON.stringify({
        name: organizationName,
        inn: INN,
        address: organizationAddress,
        domain: domain,
      }),
    }).then((res) => {
      navigate('/')
    }).catch(error => {
      console.log(error)
    })
  }

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
            const INNRegex = /^[\d+]{10,12}$/;

            if (
              INNRegex.test(INN) &&
              organizationName.length >= 15 &&
              organizationAddress.length >= 20
            ) {
              setError(false);
              sendForm(
                INN,
                organizationName,
                organizationAddress,
                domain
              );
            } else {
              setError(true);
            }
          }}
        >
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
          <TextInput
            size="xl"
            label="Поддомен:"
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          ></TextInput>
          <div className="sep"></div>
          {error && (
            <Text color="danger" className="error-message">
              Неверно заполненна анкета. Пожалуйста, попробуйте снова.
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
