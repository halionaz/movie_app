import React from "react";

class Detail extends React.Component {

    state = {
        title : '',
        summary : ''
    }
    componentDidMount(){

        const {location,history} = this.props;

        if(location.state === undefined){
            history.push('/');
        } else {
            this.setState({title:location.state.title, summary:location.state.summary})
        }

    }
    render(){
        const {title,summary} = this.state;
        return <div>
            {title}
            {summary}
        </div>
    }

}

export default Detail;