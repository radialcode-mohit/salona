import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={FirstPage}></Route>
        <Route path="/second" Component={SecondPage}></Route>
      </Routes>
    </>
  );
}

export default App;
