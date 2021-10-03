import { createContext, useState } from "react";
type Props = {
  children: React.ReactNode;
};
export const AccountContext = createContext<any>(null);

const AccountProvider = ({ children }: Props) => {
  const [account, setAccount] = useState();

  return (
    <AccountContext.Provider
      value={{
        account,
        setAccount,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
