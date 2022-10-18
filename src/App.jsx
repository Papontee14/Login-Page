import './App.css'
import LogInPage from './components/LogInPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NameList from './components/NameList';
import FormComponent from './components/Form';

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route index element={<LogInPage/>} />
      <Route path="/name_list" element={<NameList/>} />
      <Route path="/form_coponent" element={<FormComponent/>} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
