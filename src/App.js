import './App.css';
import Header from './components/Header';
import SLiderImages from './components/SliderImages';
import CardsSlider from './components/CardsSlider';
import Premieres from './components/Premieres';
import Footer from './components/Footer';
// import AllMovies from './components/AllMovies';
import AllMoviesFetch from './components/AllMoviesFetch';
// import SingleMovie from './components/SingleMovie';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SingleMovieFetch from './components/SingleMovieFetch';
import Registeration from './components/Registeration';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/movies/:movid">
            <SingleMovieFetch />
          </Route>
          <Route path="/movies">
            <AllMoviesFetch />
          </Route>
          <Route path="/register">
            <Registeration />
          </Route>
          <Route path="/">
            <SLiderImages />
            <CardsSlider />
            <Premieres />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router >
  );
}

export default App;
