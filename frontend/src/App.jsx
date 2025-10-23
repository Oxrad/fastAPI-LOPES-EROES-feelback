import { Routes, Route } from "react-router-dom";
import Header from './components/Header'
import './style/App.css'

import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import FeelbackForm from "./pages/FeelbackForm.jsx";

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/feelback-form" element={<FeelbackForm />} />
        </Routes>
      </main>
    </>
  )
}

export default App
