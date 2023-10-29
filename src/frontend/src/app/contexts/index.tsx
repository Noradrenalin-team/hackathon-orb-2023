import { Context } from "./Context";
import { UpdateContext } from "./UpdateContext";
import { Fragment, ReactNode, useState } from "react";

const ContextProvider = ({ children }: { children: ReactNode }) => {
  let isLogin = localStorage.getItem("isLogin");
  isLogin = JSON.parse(isLogin)
  const userLocalStorage = localStorage.getItem("user");
  const userParsed = JSON.parse(userLocalStorage);

  let defaultUser = {};

  if (userParsed) {
    if (isLogin === true) {
      defaultUser = {
        first_name: userParsed.first_name || null,
        last_name: userParsed.last_name || null,
        id: userParsed.id || null,
        login: userParsed.login || null,
        avatar: userParsed.avatar || null,
        role: userParsed.role || null,
        isLogin: true,
      };
    }
    if (isLogin === false) {
      defaultUser = {
        isLogin: false,
      };
    }
  }

  const [user, setUser] = useState(defaultUser);
  return (
    <Fragment>
      <Context.Provider value={{ user }}>
        <UpdateContext.Provider value={{ setUser }}>
          {children}
        </UpdateContext.Provider>
      </Context.Provider>
    </Fragment>
  );
};

export default ContextProvider;

export { Context, UpdateContext };
