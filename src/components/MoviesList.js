import React from "react";
import { Link } from "react-router-dom";

export default function MoviesList({ movies }) {
  const renderMovie=Object.keys(movies).map((movieID)=>{
    return(
      <li key={movieID}>
      <Link to={`/movies/${movieID}`}> {movies[movieID].title} </Link>
    </li>
    )
    
  })
  

  return <ul>{renderMovie}</ul>;
}

// const renderMovie = Object.keys(movies).map((moiveID) => {
//   return (
//     <li key={moiveID}>
//       <Link to={`/movies/${moiveID}`}> {movies[moiveID].title}</Link>
//     </li>
//   );
// });