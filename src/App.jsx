import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  console.log("rendering App component");

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default App;
