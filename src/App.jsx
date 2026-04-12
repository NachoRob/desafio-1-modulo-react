import Home from './components/Home'
import Footer from './components/Footer'
import Navigationbar from './components/Navbar'
import Cart from './components/Cart'
import { pizzaCart } from './pizzacart'
//import RegisterPage from './components/Register'
//import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css'


{/*En el componente App.jsx se mostrarán los componentes Navbar, Home y Footer.*/}
function App() {
  return (
    <>
      <Navigationbar />
      {/*<Home />
      <RegisterPage />
      <Login />*/}
      <Cart />
      <Footer />
    </>
  )
}

export default App
