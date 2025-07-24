import { createContext } from "react";

const userContext = createContext();

const Context = ({ children }) => {
  const value = "some data";

  return(
    <userContext.Provider value={value}>
           {children}
    </userContext.Provider>
  );
};

export default Context;
export { userContext };
