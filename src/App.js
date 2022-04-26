import { useEffect, useState } from 'react';
import './App.css';
import Filter from './components/features/Buttons/Filter';
import Movie from './components/view/Movie';

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
      <Filter 
      popular={popular} 
      setFiltered={setFiltered} 
      activeGenre={activeGenre} 
      setActiveGenre={setActiveGenre} 
      />
    <div className="popular-movies">
      {filtered.map((movie) => {
        return( <Movie key={movie.id} movie={movie} />)
      })};
    </div> 
    </div>
  );
}

export default App;
