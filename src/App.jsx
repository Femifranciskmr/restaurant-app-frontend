
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllRest from './Components/AllRest';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ViewRest from './Components/ViewRest';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>


      <section>
        <Routes>
          {/* localhost:300-all restaurant details */}
          <Route path='/' element={<AllRest/>}/>
          {/* localhost:300/view/s-particular restaurant details */}
          <Route path='/view/:id' element={<ViewRest/>}/>
        </Routes>
      </section>


      <footer>
        <Footer/>
      </footer>
      
     
    </div>
  );
}

export default App;
