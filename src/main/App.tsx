import React from "react";
import "./App.css";
import HomePage from "../home/homepage";
import Header from "./header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Goals from "../goals/goals";
import Transact from "../transactions/Transactions";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="transactions" element={<Transact />} />
          <Route path="goals" element={<Goals />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
