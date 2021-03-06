import { useEffect, useState } from 'react';
import './App.css';
import Filter from './components/view/Buttons/Filter';
import Movie from './components/view/Movie';
import {motion, AnimatePresence} from "framer-motion";
import Navigation from './components/view/Navigation/Navigation';
// import Home from './components/view/Home/Home';

function App() {

  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  

  useEffect (() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=9de90cd572615203d991274e9147bb20&language=en-US&page=1');
    
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);

  }; 

  return (
    <div className="App">
      <Navigation />
      {/* <Home /> */}
      <div className="popular-movies filter">
      <Filter 
      popular={popular} 
      setFiltered={setFiltered} 
      activeGenre={activeGenre} 
      setActiveGenre={setActiveGenre} 
      />
      </div>
    <motion.div layout className="popular-movies">
      <AnimatePresence>
      {filtered.map((movie) => {
        return( <Movie key={movie.id} movie={movie} />)
      })};
      </AnimatePresence>
    </motion.div> 
    </div>
  );
}

export default App;
