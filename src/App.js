import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Components/Auth"
import PasswordReset from "./Components/PasswordReset"
//import Employee from "./Components/Employee"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/PasswordReset" element={<PasswordReset />} />
      </Routes>
    </BrowserRouter>
  )
}

//export default App

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);