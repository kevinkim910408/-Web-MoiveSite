import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
// useParams() - url에서 바뀌는 부분을 캐치해낸다. 
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Detail(){
    // loading이 true면 loading글 보여주고 false면 안보여주는 state
    const [loading, setLoading] = useState(true);

    const {id} = useParams(); // id - app.js에서 url이 변경되는 부분을 캐치해낸걸 저장한 변수 
    const [details, setDetail] = useState([]);
    
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setLoading(false);
        setDetail(json.data.movie)
    };

    console.log(details)
    useEffect(()=> {
      getMovie();
    }, [])

    return  (
        <div>{loading ? <h1><img className='loading' src='https://ak.picdn.net/shutterstock/videos/1067276800/thumb/1.jpg' /></h1>:  
            <div style={{
                width:"100%", 
                height:"100vh", 
                backgroundImage:`url(${details.background_image_original})`, 
                backgroundSize:"cover", 
                display:"flex", 
                flexDirection:"column", 
                justifyContent:"center", 
                alignItems:"center"
                }}>
                <Link to={`/movie/`}><Button style={{color:'#000', fontWeight:'700', marginBottom:'10px'}} variant="danger">BACK TO MAINPAGE</Button>{' '}</Link>
                <Card style={{ 
                    width: '1200px', 
                    height: '800px',
                    backgroundColor: '#000',
                    padding:'20px',
                    }}>
                    <div style={{color:'white', display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center" }}>
                        <div>
                            <Card.Img variant="top" style={{width:'400px'}} src={details.large_cover_image} />
                            <Card.Body style={{color:'white', display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
                                <h4 style={{fontWeight:"700"}}>{details.title}({details.year})</h4>
                                <h5>Rating: {details.rating} (IMDB)</h5>
                                <h5>Runtime: {details.runtime} mins</h5>
                            </Card.Body>
                        </div>
                        <div>
                            
                            <div style={{padding:'30px', color:'white', display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", }}>
                                <h5 style={{opacity:'50%'}}>* Click Below Summary to Check More Info *</h5>
                                <a 
                                    href={details.url} 
                                    target='_blank' 
                                    style={{color:"#fff", marginBottom:'50px', textDecoration:'none'}}>
                                    {details.description_intro.length > 1000 ? 
                                    `${details.description_intro.slice(0,1000)}.......` :
                                    details.description_intro }
                                </a>
                                {details.yt_trailer_code == "" ? <h1>No Youtube Trailer Provided</h1>: 
                                <iframe width = "560"
                                    height = "315"
                                    src = {`https://www.youtube.com/embed/${details.yt_trailer_code}?autoplay=0&mute=0`}
                                    title = "YouTube video player"
                                    frameborder = "0"
                                    allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen 
                                /> }
                            </div>
                        </div>
                    </div>
                </Card>
            </div>}
         </div>)
}

export default Detail;