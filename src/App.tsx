import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Onebox from "./pages/Onebox"

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/onebox" element={<Onebox/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
