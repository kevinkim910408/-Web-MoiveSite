import { useEffect, useState } from 'react';
import Movie from '../components/Movie';


function Home() {
    // loading이 true면 loading글 보여주고 false면 안보여주는 state
  const [loading, setLoading] = useState(true);

  // API로 받아온 movie들 넣어줄 array state
  const [movies, setMovies] = useState([]);

  // async wait으로 api 가져오기
  const getMovies = async() => {
    const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)).json(); // url
    setMovies(json.data.movies);
    setLoading(false);
  }

  // 한번만 실행시킬 코드 - API 받아오기
  useEffect(()=>{
    getMovies();
  }, []);

  console.log(movies)
  return (
    <div> 
      {loading ? <h1>Loading...</h1>: 
      <div>
        {/* map을통해 response 들을 꺼내온다.
        Component props를 통해서 data를 넘겨준다.*/}
        {movies.map((movie)=>
          <Movie 
            key = {movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image} 
            title={movie.title} 
            summary={movie.summary} 
            genres={movie.genres} 
          />
        )} 
      </div>}
    </div>
  );
}

export default Home;