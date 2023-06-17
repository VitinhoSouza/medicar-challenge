import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./hooks/useAuth";


import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { Home } from "./pages/Home/Home";

import theme from "./styles/theme";
import GlobalStyle from "./styles/global";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ToastContainer autoClose={3000} />
        <GlobalStyle />
        <AuthProvider>
          <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="*" element={<>Rota não encontrada!</>} />
            
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
