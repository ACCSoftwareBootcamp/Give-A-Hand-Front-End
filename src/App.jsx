import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Cards';
function App() {
  return (
    <>
      <Header />

      <div className='banner'>
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default App;
