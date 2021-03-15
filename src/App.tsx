import { GlobalStyle } from "./styles/global";
import { Header } from "./compoents/Header";
import { Dashboard } from "./compoents/Dashboard";
export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}
