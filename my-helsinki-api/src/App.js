import "./App.css";
import OpenApi from "./Components/OpenApi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Place from "./Components/Place";
import UsersForm from "./Components/UsersForm";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Password from "./Components/Password"

function App() {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OpenApi />} />
          <Route path="/place/:placeId" element={<Place />} />
          <Route path="/form" element={<UsersForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/password" element={<Password />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
