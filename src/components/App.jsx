

import Home from "pages/Home";
import Movie from "pages/Movie";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import {  Route, Routes } from "react-router-dom";
import { Container,Header, Link } from "./App.styled";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";




// const Movie = lazy(() => import(''));

export const App = () => {
  return (
    <Container>
      <Header>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/movies'>Movie</Link>
        </nav>
        </Header>
    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/movies" element={<Movie />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast></Cast>}></Route>
           <Route path="reviews" element={<Reviews></Reviews>}></Route>
        </Route>  
      </Routes>
          
        </Container>
  );
};
