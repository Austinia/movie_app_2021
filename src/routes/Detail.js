import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        const { location, history } = this.props;
        // url 작성으로 들어오면 홈으로 추방
        if(location.state === undefined){
            history.push("/");
        }
    }
    render(){
        const {location} = this.props;
        if (location.state){
            return <span>{location.state.title}</span>;
        } else {
            return null;
        }
    }
}
export default Detail;