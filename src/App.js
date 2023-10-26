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
import { SelectUser } from "./Components/selectuser"
import  AdminAuth  from "./Components/AdminAuth"
import { Customer }  from "./Components/Customer"
import  CustomerAuth  from "./Components/CustomerAuth"
import EmployeeAuth from "./Components/EmployeeAuth"
import PasswordResetAdmin from "./Components/PasswordResetAdmin"
import PasswordResetCustomer from "./Components/PasswordResetCustomer"
import PasswordResetEmployee from "./Components/PasswordResetEmployee"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectUser />} />
        <Route path="/passwordreset" element={<PasswordReset />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/createemployee" element={<CreateEmployee />} />
        <Route path="/generatereport" element={<GenerateReport />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/createmanager" element={<CreateManager />} />
        <Route path="/selectuser" element={<SelectUser />} />
        <Route path="/adminauth" element={<AdminAuth />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/customerauth" element={<CustomerAuth />} />
        <Route path="/employeeauth" element={<EmployeeAuth />} />
        <Route path="/passwordresetadmin" element={<PasswordResetAdmin />} />
        <Route path="/passwordresetcustomer" element={<PasswordResetCustomer />} />
        <Route path="/passwordresetemployee" element={<PasswordResetEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

//export default App

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Manager />);
root.render(<App />);