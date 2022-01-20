import React, { useState } from 'react';

import allMovies from '../normalized-movies';

const Filter = ({ setMovies }) => {

  const [inputValue, setInputValue] = useState('');


  const handleFormSubmit = (e) => {
    e.preventDefault();
    const titleRegEx = new RegExp(inputValue, 'gi');

    console.log(titleRegEx);
    const filterMovies = allMovies.filter((movie) => movie.title.match(titleRegEx));
    console.log(filterMovies);
    setMovies(filterMovies);
  }

  const handleSortValue = (e) => {
    setInputValue(e.target.value)
  }


  return (
    <section className="mb-4">
      <h2 className="sr-only">Movie search form</h2>

      <form onSubmit={handleFormSubmit} className="js-search-form" action="https://echo.htmlacademy.ru" method="GET" autoComplete="off">
        <div className="form-group">
          <input onChange={handleSortValue} className="form-control js-search-form__title-input" type="search" name="title" placeholder="Avengers"
            aria-label="Title" />
        </div>

        <button className="btn btn-primary btn-block" type="submit">Search</button>
      </form>
    </section>
  );
}

export default Filter;
