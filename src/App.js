import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';
import Container from '@mui/material/Container';
import {Route, Routes} from 'react-router-dom';
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";

function App() {
  return (
    <>
    <Header/>
      <div className="app">
        <Container>
          <Routes>
            <Route exact path='/' element={<Trending/>}/>
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/series' element={<Series/>}/>
            <Route path='/search' element={<Search/>}/>
          </Routes>
        </Container>
      </div>
    <SimpleBottomNavigation/>
    </>
  );
}

export default App;
