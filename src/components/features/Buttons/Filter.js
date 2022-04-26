import React, { useEffect } from 'react'

function Filter({setActiveGenre, activeGenre, setFiltered, popular}) {

    useEffect (() => {
        if (activeGenre === 0) {
            setFiltered(popular);
            return;
        }
        const filtered = popular.filter((movie) => 
        movie.genre_ids.includes(activeGenre));
        setFiltered(filtered);
    }, [activeGenre]);

  return (
    <div className="filter-container">
        <button className={activeGenre === 0 ? "active" : ""} onClick={() => setActiveGenre(0)} >All</button>
        <button className={activeGenre === 16 ? "active" : ""} onClick={() => setActiveGenre(16)}>Animations</button>
        <button className={activeGenre === 80 ? "active" : ""} onClick={() => setActiveGenre(80)}>Crimes</button>
    </div>  
  )
}

export default Filter;