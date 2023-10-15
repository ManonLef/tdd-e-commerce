import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  console.log("rendering App component");

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
