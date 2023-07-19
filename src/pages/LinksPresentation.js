import React from "react"
import { Routes, Route } from "react-router-dom"
import { Presentation } from "./Presentation"

const LinksPresentation = () => (
  <Routes>
    <Route path="/react-portfolio" element={<Presentation />} />
  </Routes>
)

export { LinksPresentation }
