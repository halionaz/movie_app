import PropTypes from 'prop-types';

// 따로 설치한 npm 요소

function Magpie(props){
    return(
        <div>
            <h3>I'm {props.name}</h3>
            <p>Peer Review : {props.rating}/5.0</p>
        </div>
    )
}

Magpie.propTypes = {
    name : PropTypes.string.isRequired,
    rating : PropTypes.number.isRequired,
    age : PropTypes.number,
    gender : PropTypes.string
};

export default Magpie;