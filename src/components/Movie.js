import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'

function Movie({id, coverImg, title,}) {
    return  <div>
                <Card style={{ width: '13rem', backgroundColor: 'black'}}>
                    <Link to={`/movie/${id}`} style={{ textDecoration: 'none', color: 'white'}}>
                    <Card.Img variant="top" src={coverImg} alt={title}/>
                    </Link>
                 </Card>
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