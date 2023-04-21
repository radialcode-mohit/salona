import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Header from "./components/Header";
import BuildForGrowth from "./components/BuildForGrowth";
import Footer from "./components/Footer";
import Community from "./components/Community";
import GridSection from "./components/GridSection";
function App() {
  return (
    <>
      <Header />
      <Community />
      <BuildForGrowth />
      <GridSection />
      <Footer />
    </>
  );
}

export default App;
