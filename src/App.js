import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/header";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
