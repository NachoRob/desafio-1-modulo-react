import Footer from "./components/Footer";
import Navigationbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import { Navigate, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import CardPizza from "./pages/CardPizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import Pizza from "./pages/Pizza";
import "./App.css";

function App() {
  const { token } = useContext(UserContext);
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Navigationbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/register"
              element={token ? <Navigate to="/" /> : <Register />}
            />
            <Route
              path="/login"
              element={token ? <Navigate to="/" /> : <Login />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<Pizza />} />
            <Route
              path="/profile"
              element={token ? <Profile /> : <Navigate to="/login" />}
            />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
//
