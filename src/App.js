import './App.css';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Process from './components/Process'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <section className="section">
        <Navbar/>
        <Banner/>
        <About/>
        <Process/>
        <Team/>
        <Footer/>
      </section>
    </>
  );
}

export default App;
