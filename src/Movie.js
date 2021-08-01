import propTypes from "prop-types";

function Movie({id,year,title,summary,poster,genres}){
    return <div className="movie">
        <img src={poster} alt={title} title={title}></img>
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="movie_genres">
            {genres.map((genre, ind) => {
                return <li className="genres_genre" key={ind}>{genre}</li>
            })}
        </ul>
        <p className="movie_summary">{summary}</p>
    </div>
}

Movie.propTypes = {
    id : propTypes.number.isRequired,
    year : propTypes.number.isRequired,
    title : propTypes.string.isRequired,
    summary : propTypes.string.isRequired,
    poster : propTypes.string.isRequired,
    genres : propTypes.arrayOf(propTypes.string).isRequired
}

export default Movie;