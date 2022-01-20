import React from 'react';
import Star from '../assetes/img/star.svg';
import Calendar from '../assetes/img/calendar.svg';

const Moviecard = ({ ...props }) => {
  return (
    <li className="search-results__item movie col-sm-6 mb-4" data-imdb-id="tt2380307">
      <div className="card">
        <img className="movie__poster card-img-top" src={props.bigPoster} alt="" width="300" height="200" />

        <div className="card-body">
          <h3 className="movie__title h5">{props.title}</h3>
          <p className="card-text">
            <img src={Calendar} alt="Calendar" width="25" height="25" />
            <span className="movie__year">{props.year}</span>
          </p>

          <p className="card-text">
            <img src={Star} alt="Star" width="25" height="25" />
            <span className="movie__rating">{props.imdbRating}</span>
          </p>

          <p className="card-text d-flex flex-column flex-md-row flex-wrap justify-content-around">
            <a className="movie__trailer-link m-1 m-xl-0 btn btn-outline-primary btn-sm" href="https://youtube.com/watch?v=6Zxj9q8Yjdw" target="_blank">Watch
              trailer</a>
            <button className="m-1 m-xl-0 btn btn-outline-info btn-sm js-movie-modal-opener" type="button" data-toggle="modal" data-target="#movie-info-modal">More info</button>
            <button className="m-1 m-xl-0 btn btn-outline-success btn-sm js-movie-bookmark" type="button">Bookmark</button>
          </p>
        </div>
      </div>
    </li>
  );
}

export default Moviecard;
