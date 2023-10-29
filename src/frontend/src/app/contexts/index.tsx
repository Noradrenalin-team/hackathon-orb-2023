import { Context } from "./Context";
import { UpdateContext } from "./UpdateContext";
import { Fragment, ReactNode, useState } from "react";

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const defaultUser = {
    first_name: localStorage.getItem('first_name') || '',
    last_name: localStorage.getItem('last_name') || '',
    id: localStorage.getItem('id') || '',
    login: localStorage.getItem('login') || '',
    avatar: localStorage.getItem('avatar') || '',
    isLogin: localStorage.getItem('isLogin') === 'false' 
  }

  const [user, setUser] = useState(defaultUser);
  return (
    <Fragment>
      <Context.Provider value={{user}}>
        <UpdateContext.Provider value={{setUser}}>
          {children}
        </UpdateContext.Provider>
      </Context.Provider>
    </Fragment>
  );
};

export default ContextProvider;

export { Context, UpdateContext };
