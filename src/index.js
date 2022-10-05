import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom";

import GlobalStyle from "./globalStyles";

import App from "./App";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Recipies from "./components/Recipies/Recipies";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <Header />
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/recipies/:selectedCategory" element={<Recipies />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);
