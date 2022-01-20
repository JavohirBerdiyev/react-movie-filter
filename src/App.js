import React, { useState } from 'react';
import Filter from './components/Filter';
import Moviecard from './components/MovieCard';
import allMovies from './normalized-movies';


function App() {
  const [movies, setMovies] = useState(allMovies);

  return (
    <div className="App">
      <main>

        <header className="py-3 mb-2 text-center">
          <div className="container">
            <h1 className="h3 mb-0">Movies catalog</h1>
          </div>
        </header>


        <div className="container-xl">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="container">
                <Filter setMovies={setMovies} />
                <section className="mb-4">
                  <h2>Bookmarked movies</h2>
                  <ul className="bookmarked-movies list-group"></ul>
                </section>
              </div>
            </div>

            <section className="col-md-8">
              <h2 className="h5">Search results</h2>
              <div className="alert alert-info">Use the form on the left to search for a movie</div>

              <ul className="search-results row list-unstyled">
                {movies.map((movie) => <Moviecard {...movie} />)}
              </ul>
            </section>
          </div>
        </div>

      </main>
    </div >
  );
}

export default App;
