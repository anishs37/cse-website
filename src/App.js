import './App.css';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'

function App() {
  return (
    <>
      <section className="section">
        <Navbar/>
        <Banner/>
        <About/>
      </section>
    </>
  );
}

export default App;
