import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import "../routes/Home.css"

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";



function Home() {
  // loading이 true면 loading글 보여주고 false면 안보여주는 state
  const [loading, setLoading] = useState(true);

  // API로 받아온 movie들 넣어줄 array state - rate 8.8
  const [movies, setMovies] = useState([]);

  // Action Movie API array
  const [actionMovies, setActionMovies] = useState([]);

  // Romance Movie API array
  const [romanceMovies, setRomanceMovies] = useState([]);

  // Horror Movie API array
  const [horrorMovies, setHorrorMovies] = useState([]);

  // Comedy Movie API array
  const [comedyMovies, setComedyMovies] = useState([]);

  // Fantasy Movie API array
  const [fantasyMovies, setFantasyMovies] = useState([]);

  // async wait으로 api 가져오기
  const getMovies = async() => {
    const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)).json(); // url
    setMovies(json.data.movies);
    setLoading(false);
  }
  // async wait으로 api 가져오기
  const getActionMovies = async() => {
    const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?genre=action&sort_by=year`)).json(); // url
    setActionMovies(json.data.movies);
  }

  // async wait으로 api 가져오기
  const getRomanceMovies = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?genre=romance&sort_by=year`)).json(); // url
    setRomanceMovies(json.data.movies);
  }

  // async wait으로 api 가져오기
  const getHorrorMovies = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?genre=horror&sort_by=year`)).json(); // url
    setHorrorMovies(json.data.movies);
  }

  // async wait으로 api 가져오기
  const getComedyMovies = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?genre=comedy&sort_by=year`)).json(); // url
    setComedyMovies(json.data.movies);
  }

  // async wait으로 api 가져오기
  const getFantasyMovies = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?genre=fantasy&sort_by=year`)).json(); // url
    setFantasyMovies(json.data.movies);
  }


  // 한번만 실행시킬 코드 - API 받아오기
  useEffect(()=>{
    getMovies();
    getActionMovies();
    getRomanceMovies();
    getHorrorMovies();
    getComedyMovies();
    getFantasyMovies();
  }, []);


  //console.log(movies)
  const slidesPerViewData = 10;
  const spaceBetweenData = 30;
  const slidesPerGroupData = 5;
  return (
    <div className='wrap' style={{overflow: 'hidden'}}>
        <div className='header'>
            MOVIEPEDIA
        </div> 

      {loading ? <h1><img className='loading' src='https://ak.picdn.net/shutterstock/videos/1067276800/thumb/1.jpg' /></h1>: 
      
      // Main Contents
      <div>
        <h1 className='movieCatagory'>Rate over 8.8pt</h1>
        <Swiper
          slidesPerView={slidesPerViewData}
          spaceBetween={spaceBetweenData}
          slidesPerGroup={slidesPerGroupData}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
        <div className='movieCardsGroup'>
          {/* map을통해 response 들을 꺼내온다.
          Component props를 통해서 data를 넘겨준다.*/}
          {movies.map((movie)=>
            <div className='movieCards'>
              <SwiperSlide>
              <Movie 
                key = {movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image} 
                title={movie.title} 
              />
              </SwiperSlide>
            </div>
          )} 
        </div>
        </Swiper>
        <div style={{margin:'20px'}}></div>
        
        <h1 className='movieCatagory'>Genre: Action</h1>
        <Swiper
          slidesPerView={slidesPerViewData}
          spaceBetween={spaceBetweenData}
          slidesPerGroup={slidesPerGroupData}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
        <div className='movieCardsGroup'>
          {/* map을통해 response 들을 꺼내온다.
          Component props를 통해서 data를 넘겨준다.*/}
          {actionMovies.map((actionMovie)=>
            <div className='movieCards'>
              <SwiperSlide>
              <Movie 
                key = {actionMovie.id}
                id={actionMovie.id}
                coverImg={actionMovie.medium_cover_image} 
                title={actionMovie.title} 
              />
              </SwiperSlide>
            </div>
          )} 
        </div>
        </Swiper>
        <div style={{margin:'20px'}}></div>

        <h1 className='movieCatagory'>Genre: Romance</h1>
        <Swiper
          slidesPerView={slidesPerViewData}
          spaceBetween={spaceBetweenData}
          slidesPerGroup={slidesPerGroupData}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
        <div className='movieCardsGroup'>
          {/* map을통해 response 들을 꺼내온다.
          Component props를 통해서 data를 넘겨준다.*/}
          {romanceMovies.map((romanceMovie)=>
            <div className='movieCards'>
              <SwiperSlide>
              <Movie 
                key = {romanceMovie.id}
                id={romanceMovie.id}
                coverImg={romanceMovie.medium_cover_image} 
                title={romanceMovie.title} 
              />
              </SwiperSlide>
            </div>
          )} 
        </div>
        </Swiper>
        <div style={{margin:'20px'}}></div>

        <h1 className='movieCatagory'>Genre: Horror</h1>
        <Swiper
          slidesPerView={slidesPerViewData}
          spaceBetween={spaceBetweenData}
          slidesPerGroup={slidesPerGroupData}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
        <div className='movieCardsGroup'>
          {/* map을통해 response 들을 꺼내온다.
          Component props를 통해서 data를 넘겨준다.*/}
          {horrorMovies.map((horrorMovie)=>
            <div className='movieCards'>
              <SwiperSlide>
              <Movie 
                key = {horrorMovie.id}
                id={horrorMovie.id}
                coverImg={horrorMovie.medium_cover_image} 
                title={horrorMovie.title} 
              />
              </SwiperSlide>
            </div>
          )} 
        </div>
        </Swiper>
        <div style={{margin:'20px'}}></div>

        <h1 className='movieCatagory'>Genre: Comedy</h1>
        <Swiper
          slidesPerView={slidesPerViewData}
          spaceBetween={spaceBetweenData}
          slidesPerGroup={slidesPerGroupData}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
        <div className='movieCardsGroup'>
          {/* map을통해 response 들을 꺼내온다.
          Component props를 통해서 data를 넘겨준다.*/}
          {comedyMovies.map((comedyMovie)=>
            <div className='movieCards'>
              <SwiperSlide>
              <Movie 
                key = {comedyMovie.id}
                id={comedyMovie.id}
                coverImg={comedyMovie.medium_cover_image} 
                title={comedyMovie.title} 
              />
              </SwiperSlide>
            </div>
          )} 
        </div>
        </Swiper>
        <div style={{margin:'20px'}}></div>

        <h1 className='movieCatagory'>Genre: Fantasy</h1>
        <Swiper
          slidesPerView={slidesPerViewData}
          spaceBetween={spaceBetweenData}
          slidesPerGroup={slidesPerGroupData}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
        <div className='movieCardsGroup'>
          {/* map을통해 response 들을 꺼내온다.
          Component props를 통해서 data를 넘겨준다.*/}
          {fantasyMovies.map((fantasyMovie)=>
            <div className='movieCards'>
              <SwiperSlide>
              <Movie 
                key = {fantasyMovie.id}
                id={fantasyMovie.id}
                coverImg={fantasyMovie.medium_cover_image} 
                title={fantasyMovie.title} 
              />
              </SwiperSlide>
            </div>
          )} 
        </div>
        </Swiper>
        <div style={{margin:'20px'}}></div>

      </div>


      //loading
      }

      {/* Footer */}
      <div className='footer'>
        MOVIEPEDIA
      </div> 

    </div> // Wrap
  );
}

export default Home;