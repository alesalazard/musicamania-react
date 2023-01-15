import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "../views/Start"
import Cards from "../views/Cards"

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Start />}/>
        <Route exact path="/Cards" element={<Cards />}/>
      </Routes>
    </BrowserRouter>
  )
}
export default Routing;
