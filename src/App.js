import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  const fetchMoviesHandler = () => {
    fetch('https://swapi.dev/api/films/')
      .then((data) => {
        return data.json().then((d) => {
          const transformMovies = d.results.map(element => {
            return {
              id: element.episode_id,
              title: element.title,
              releaseDate: element.release_date,
              openingText: element.opening_crawl,
            }
          });
          setMovies(transformMovies);
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
