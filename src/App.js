import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./app.css";
/*
class App extends React.Component{
  //state 정의
  state = {
    count: 0
  };
  //함수들 정의
  add = () => { //current = this.state
    this.setState(current => ({count: current.count + 1})); // setState()를 사용해야 render()가 refresh 된다.
  };
  remove = () => {
    this.setState(current => ({count: current.count - 1}));
  };
  //render()정의
  render(){
    return <div>
      <h1>the number count is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.remove}>Remove</button>
    </div>
  }
}

export default App;
*/

class App extends React.Component {
  state = {
    isLoading: true,
    movies : []
  };
  getMovies = async () => { //async 비동기 함수
    const { data: { data: { movies }}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  }; // movies = movies:movies, await 뭘 기다리는지, movies.data.data.movies 보다 좋은 방법
  componentDidMount(){ // 첫 렌더 완료시 실행되는 함수
    // setTimeout(() => { //6초 뒤에 스테이트 변경
    //   this.setState({isLoading: false});
    // }, 6000);
    this.getMovies();
  };
  render(){
    const { isLoading, movies } = this.state; // 일일히 this.state를 적지 않게 해준다.
    return <section class="container">
      {isLoading ? (
      <div class="loader">
        <span class="loader__text_">Loading...</span>
      </div>
    ) : (
      <div class="movies">
        {movies.map(movie => (
          <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
            genres={movie.genres}
          /> // map은 언제나 return해야 한다.
        ))}
      </div>
    )}
    </section>;
  };
};

export default App;