import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

function Movie({id, coverImg, title, summary, genres}) {
    return  <div>
                <img src={coverImg} alt={title} />
                <h2>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <p>{summary}</p>
                <ul>
                    {genres.map(g =>  // 장르도 배열로 들어있기때문에 map을통해서 각 배열에 접근한다.
                <li key={g}> {/* 여기서 장르에는 id값이 없지만, 고유한 값만 주면 되서, 그냥 각 장르들을 key 값으로 줬다.*/}
                    {g}
                </li>
                )}
                </ul>
            </div>;
}

Movie.protoTypes ={
    id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired, 
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;