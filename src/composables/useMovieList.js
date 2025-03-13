import { ref } from "vue";
import { items } from "../mockData/movies.json";

const movieList = ref(items);

const handleAddNewMovie = ({ movieData }) => {
  movieList.value.push(movieData);
};

const handleUpdateMovieList = ({
  movieIndex,
  newMovieValue,
  movieKeyValue,
}) => {
  if (movieKeyValue) {
    movieList.value[movieIndex][movieKeyValue] = newMovieValue;
    return;
  }
  movieList.value[movieIndex] = newMovieValue;
};

const handleClearRatings = () => {
  const updatedMovieList = movieList.value.map((movie) => ({
    ...movie,
    rating: null,
  }));
  movieList.value = updatedMovieList;
};

const handleDeleteMovie = ({ movieIndex }) => {
  movieList.value.splice(movieIndex, 1);
};

export const useMovieList = () => {
  return {
    movieList,
    handleAddNewMovie,
    handleUpdateMovieList,
    handleClearRatings,
    handleDeleteMovie,
  };
};
