import { useContext } from "react";
import "./Settings.scss";
import { Context } from "app/contexts";
import { useState } from "react";
import { UpdateContext } from "app/contexts";

const Settings = () => {
  const { user } = useContext(Context);
  const { setUser } = useContext(UpdateContext);

  const [fn, setFn] = useState(user.first_name);
  const [sn, setSn] = useState(user.second_name);
  const [ln, setLn] = useState(user.last_name);
  const [phone, setPhone] = useState(user.phone);
  const [birthday, setBirthday] = useState(user.birthday);
  return (
    <main>
      <h1>Настройки</h1>
      <br />
      <div className="wrapper">
        <div className="image">
          <img src={user.avatar} width={100} height={100} alt="avatar" />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetch('api/users/update', {
              method:'post',
              body: JSON.stringify({
                last_name: ln,
                first_name: fn,
                second_name: sn,
                birthday: birthday,
                phone: phone,
                avatar: user.avatar
              })
            }).then(() => setUser({
              last_name: ln,
            first_name: fn,
            second_name: sn,
            birthday: birthday,
            phone: phone,
            avatar: user.avatar
            })
          )
          }}
        >
          <input
            type="text"
            className="fn"
            value={fn}
            onChange={(e) => {
              setFn(e.target.value);
            }}
            placeholder="Имя"
          />
          <br />
          <input
            type="text"
            className="sn"
            value={sn}
            onChange={(e) => {
              setSn(e.target.value);
            }}
            placeholder="Фамилия"
          />
          <br />
          <input
            type="text"
            className="ln"
            value={ln}
            onChange={(e) => {
              setLn(e.target.value);
            }}
            placeholder="Отчество"
          />
          <br />
          <input
            type="text"
            className="ln"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            placeholder="Телефон"
          />
          <br />
          <input
            type="text"
            className="ln"
            value={birthday}
            onChange={(e) => {
              setBirthday(e.target.value);
            }}
            placeholder="День рождения"
          />
          <br />
          <button>Сохранить</button>
        </form>
      </div>
    </main>
  );
};

export default Settings;
