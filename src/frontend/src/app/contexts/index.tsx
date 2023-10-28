import { Context } from "./Context";
import { UpdateContext } from "./UpdateContext";
import { Fragment, ReactNode, useState } from "react";

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [ex, setEx] = useState<{}>();
  return (
    <Fragment>
      <Context.Provider value={[ex]}>
        <UpdateContext.Provider value={[setEx]}>
          {children}
        </UpdateContext.Provider>
      </Context.Provider>
    </Fragment>
  );
};

export default ContextProvider;

export { Context, UpdateContext };
