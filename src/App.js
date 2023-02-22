import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLogIn from "./pages/HomeLogIn";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <HomeLogIn /> */}
        <Routes>
          <Route element={<HomeLogIn />} path="/" />
          <Route element={<HomePage />} path="/chats" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
