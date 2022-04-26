import { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/view/Movie';

function App() {

  const [popular, setPopular] = useState([]);

  useEffect (() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=9de90cd572615203d991274e9147bb20&language=en-US&page=1');
    
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
  }; 

  return (
    <div className="App">
    <div className="popular-movies">
      {popular.map((movie) => {
        return (
           <Movie key={movie.id} movie={movie} />
           )
      })};
    </div> 
    </div>
  );
}

export default App;
