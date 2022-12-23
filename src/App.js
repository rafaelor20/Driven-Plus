import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useContext, createContext } from 'react';
import RenderLogin from './components/login'
import RenderRegister from './components/register'
import Habits from "./components/habits"
import Today from './components/today'
import Records from './components/records'
import { loginPostUrl, loginPostSendObj, loginPostReceiveObj } from './components/apiUrls.js'

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(loginPostReceiveObj);
  const userData = { user: user, setUser: setUser };
  return (
    <UserContext.Provider value={userData}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RenderLogin />} />
          <Route path="/cadastro" element={<RenderRegister />} />
          <Route path="/habitos" element={<Habits />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/historico" element={<Records />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;