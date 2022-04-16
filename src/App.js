import './App.css';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Process from './components/Process'
import Team from './components/Team'

function App() {
  return (
    <>
      <section className="section">
        <Navbar/>
        <Banner/>
        <About/>
        <Process/>
        <Team/>
      </section>
    </>
  );
}

export default App;
