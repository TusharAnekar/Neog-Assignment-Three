// Given a list of movies as an array of objects with properties id, title, rating, year and category. Create a React component to list down all movies with rating and year. Create radio buttons to filter by category. Create a dropdown to filter by rating. Fake fetch has been provided.

import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export function Movies() {
  const [movies, setMovies] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [ratingFilter, setRatingFilter] = useState("All");

  async function getMovies() {
    try {
      const { status, data } = await fakeFetch(
        "https://example.com/api/movies"
      );
      if (status === 200) {
        setMovies(data);
      }
    } catch (error) {}
  }

  useEffect(() => {
    getMovies();
  }, []);

  function getRatingFilteredMovies(event) {
    setRatingFilter(event.target.value);
  }

  function getCategoryFilteredMovies(event) {
    setCategoryFilter(event.target.value);
  }

  const categoryFilteredMovies =
    categoryFilter === "All"
      ? movies
      : movies.filter(({ category }) => category === categoryFilter);

  const filteredMovies =
    ratingFilter === "All"
      ? categoryFilteredMovies
      : categoryFilteredMovies.filter(
          ({ rating }) => rating >= Number(ratingFilter)
        );

  /*function getFilteredMovies() {
    if (categoryFilter === "All" && ratingFilter === "All") {
      setFilteredMovies(movies);
    } else if (categoryFilter === "All") {
      setFilteredMovies(
        movies.filter(({ rating }) => rating > Number(ratingFilter))
      );
    } else if (ratingFilter === "All") {
      setFilteredMovies(
        movies.filter(({ category }) => category === categoryFilter)
      );
    } else {
      setFilteredMovies(
        movies
          .filter(({ rating }) => rating > Number(ratingFilter))
          .filter(({ category }) => category === categoryFilter)
      );
    }
  }*/

  return (
    <>
      <h2>Movies List</h2>

      <div>
        <span>Category Filter: </span>
        <input
          type="radio"
          id="all"
          name="category"
          value="All"
          checked={categoryFilter === "All"}
          onClick={getCategoryFilteredMovies}
        ></input>
        <label for="all">All</label>
        <input
          type="radio"
          id="action"
          name="category"
          checked={categoryFilter === "Action"}
          value="Action"
          onClick={getCategoryFilteredMovies}
        ></input>
        <label for="action">Action</label>
        <input
          type="radio"
          id="crime"
          name="category"
          checked={categoryFilter === "Crime"}
          value="Crime"
          onClick={getCategoryFilteredMovies}
        ></input>
        <label for="crime">Crime</label>
        <input
          type="radio"
          id="drama"
          name="category"
          checked={categoryFilter === "Drama"}
          value="Drama"
          onClick={getCategoryFilteredMovies}
        ></input>
        <label for="drama">Drama</label>
      </div>

      <label htmlFor="rating-selector">Rating Filter: </label>
      <select id="rating-selector" onChange={getRatingFilteredMovies}>
        <option value="All">All</option>
        <option value="8">8.0+</option>
        <option value="8.5">8.5+</option>
        <option value="9">9.0+</option>
        <option value="9.5">9.5+</option>
      </select>

      {!movies.length && <p>Loading...</p>}

      {filteredMovies.map(({ id, title, rating, year, category }) => (
        <li key={id}>
          {title} - {rating} - {year} - {category}
        </li>
      ))}
    </>
  );
}
