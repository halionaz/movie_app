import propTypes from "prop-types";

function Movie({id,year,title,summary,poster}){
    return <h4> {title} </h4>
}

Movie.propTypes = {
    id : propTypes.number.isRequired,
    year : propTypes.number.isRequired,
    title : propTypes.string.isRequired,
    summary : propTypes.string.isRequired,
    poster : propTypes.string.isRequired
}

export default Movie;