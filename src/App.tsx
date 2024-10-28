import "./styles/index.css";
import { Main } from "./components/Main";
import { Logo } from "./components/Logo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Agencia } from "./components/Agencia";
import { Portfolio } from "./components/Portfolio";
import { PortfolioItemPage } from "./components/PortfolioItemPage";
import { Contato } from "./components/Contato";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <Logo onMenuToggle={() => setMenuOpen(!menuOpen)} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/agencia" element={<Agencia />} />
        <Route
          path="/portfolio"
          element={<Portfolio onMenuToggle={() => setMenuOpen(false)} />}
        />
        <Route
          path="/portfolio/:itemId"
          element={
            <PortfolioItemPage onMenuToggle={() => setMenuOpen(false)} />
          }
        />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;
