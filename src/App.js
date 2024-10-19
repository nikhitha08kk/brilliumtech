
import './App.css';
import About from './Components/About';
import Brand from './Components/Brand';
import Category from './Components/Category';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
// import LoginHeader from './Components/LoginHeader';

import Testimonials from './Components/Testimonials';

function App() {
  return (
  <>
{/* 
  <LoginHeader/> */}
  <Header/>
  <Home/>
  <About/>
  <Category/>
  <Brand/>
  <Testimonials/>
  <Contact/>
  <Footer/>

  </>
  );
}

export default App;
