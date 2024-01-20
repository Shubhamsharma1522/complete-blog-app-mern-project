import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [account, setAccount] = useState({ name: "", username: "" });
  const [loading, setLoading] = useState({ status: false, buttonFlag: "" });

  return (
    <DataContext.Provider
      value={{
        account,
        setAccount,
        loading,
        setLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
