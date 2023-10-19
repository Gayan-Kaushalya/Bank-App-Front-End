import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Components/Auth"
import PasswordReset from "./Components/PasswordReset"
import { Manager } from "./Components/Manager"
import { CreateEmployee } from "./Components/CreateEmployee"
import { GenerateReport } from "./Components/generatereport"
import { Employee } from "./Components/Employee"
import { Admin } from "./Components/Admin"
import { CreateManager } from "./Components/CreateManager"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/PasswordReset" element={<PasswordReset />} />
        <Route path="/Manager" element={<Manager />} />
        <Route path="/CreateEmployee" element={<CreateEmployee />} />
        <Route path="/generatereport" element={<GenerateReport />} />
        <Route path="/Employee" element={<Employee />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/CreateManager" element={<CreateManager />} />
      </Routes>
    </BrowserRouter>
  )
}

//export default App

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Manager />);
root.render(<App />);