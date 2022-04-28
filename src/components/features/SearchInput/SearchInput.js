// import React, { useState, useEffect } from 'react';

// const SearchInput = ({filtered, popular, search, setSearch}) => {

//     useEffect (() => {
//         if (search === "") {
//             setSearch(popular);
//             return;
//         }
//         const filtered = popular.filter((movie) => 
//         movie.original_title.toLowerCase().includes(search.toLowerCase()));
//         setSearch(filtered);
//     }, []);

//   return (
//     <div>
//         <input 
//         type="text" 
//         placeholder="Search..." 
//         onChange={(event) => {
//             setSearch(event.target.value);
//         }} 
//         />
//     </div>
//   )
// }

// export default SearchInput;