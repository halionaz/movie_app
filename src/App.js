import React from "react";
import axios from "axios";

import Movie from './Movie';

//React.Component는 state를 가지고 있음

class App extends React.Component{
  state = {
    isLoading : true,
    movies : []
  }
  getMovies = async () => {
    const {
      data : {
        data : {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    console.log(movies);
    this.setState({movies : movies})
  }
  async componentDidMount(){
    await this.getMovies();
    this.setState({isLoading : false})
    console.log("방금 웹사이트가 처음으로 구현되었습니다.");
  }
  componentDidUpdate(){
    console.log("방금 웹사이트가 업데이트 되었습니다.");
  }
  componentWillUnmount(){
    console.log("웹사이트를 떠납니다! 안녕!");
    // 제일 마지막에 실행되어 console log를 볼 순 없음
  }
  render(){
    const {isLoading, movies} = this.state;
    return <div>
      <div>{isLoading ? "Loading" : movies.map(movie=>{
        return <Movie 
          key={movie.id}
          id={movie.id} 
          year={movie.year} 
          title={movie.title} 
          summary = {movie.summary} 
          poster = {movie.medium_cover_image} 
        />
      })}</div>
    </div>
  }
}

export default App;
