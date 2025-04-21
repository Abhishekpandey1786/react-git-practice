import React from "react";

export default class Fan extends React.Component {
    render(){
        console.log(this.props);
        return(
        <div>
            <h1>student{this.props.name}</h1>
            <h2>student{this.props.email}</h2>
            </div>
    )}
}