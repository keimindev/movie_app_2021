import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";


class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };

  getMoives = async () => { //it will take some time get info : using async 
    const {
      data : { 
      data : { movies }
    }
  } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false})
  };

  componentDidMount(){
   this.getMoives();
  }
  render(){
    const { isLodaing, movies } = this.state;
    return (
      <section className="container">
        {this.state.isLoading ? (
        <div className="loader">
        <span className="loader_text">Loading...</span>
      </div> 
        ) : (
         <div className="movies">
          {movies.map(movie => (     
            <Movie 
             key={movie.id}
             id={movie.id} 
             year={movie.year} 
             title={movie.title} 
             summary={movie.summary} 
             poster={movie.medium_cover_image}
             genres={movie.genres}
             />
          ))}
         </div>
      )}
      </section>
    ) 
  }
}

export default App;