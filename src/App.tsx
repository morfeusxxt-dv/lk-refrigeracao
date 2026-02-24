import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Instalacao from "./pages/Instalacao";
import Manutencao from "./pages/Manutencao";
import LimpezaProfunda from "./pages/LimpezaProfunda";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/servicos/instalacao" element={<Instalacao />} />
          <Route path="/servicos/manutencao" element={<Manutencao />} />
          <Route path="/servicos/limpeza-profunda" element={<LimpezaProfunda />} />
          <Route path="/servicos/instalacao.html" element={<Navigate to="/servicos/instalacao" replace />} />
          <Route path="/servicos/manutencao.html" element={<Navigate to="/servicos/manutencao" replace />} />
          <Route
            path="/servicos/limpeza-profunda.html"
            element={<Navigate to="/servicos/limpeza-profunda" replace />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
