import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <Router basename="/books">
      <AppRoutes />
    </Router>
  );
}

export default App;
