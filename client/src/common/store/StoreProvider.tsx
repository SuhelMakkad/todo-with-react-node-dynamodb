import { Provider } from "react-redux";
import { store } from ".";

export type StoreProviderProps = {
  children: React.ReactElement;
};

const StoreProvider = ({ children }: StoreProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
