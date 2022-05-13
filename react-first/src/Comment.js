import React from "react";

class Comment extends React.Component {
    render(){
        return(
            <>
            <div className="Comment-text">
                 <b> {this.props.text}</b> 
            </div>
            <div className="Comment-date">
                <b>{this.props.date}</b>
            </div>
            </>
        )
    }
}

export default Comment