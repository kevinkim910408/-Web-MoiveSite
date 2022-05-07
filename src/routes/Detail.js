import { useEffect } from "react";
import {useParams} from "react-router-dom";
// useParams() - url에서 바뀌는 부분을 캐치해낸다. 

function Detail(){
    const {id} = useParams(); // id - app.js에서 url이 변경되는 부분을 캐치해낸걸 저장한 변수 
    
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json)
    };

    useEffect(()=> {
      getMovie();
    }, [])
    return <h1>Detail</h1>
}

export default Detail;