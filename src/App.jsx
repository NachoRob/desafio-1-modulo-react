import Home from './components/Home'
import Footer from './components/Footer.jsx'
import Navigationbar from './components/Navbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css'


{/*En el componente App.jsx se mostrarán los componentes Navbar, Home y Footer.*/}
function App() {
  return (
    <>
      <Navigationbar />
      <Home />
      <Footer />
    </>
  )
}

export default App
