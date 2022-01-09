import GlobalStyle from "./global";
import { Home } from "./pages/home";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Home/>
      <ToastContainer/>
    </>
  );
};

export default App;
