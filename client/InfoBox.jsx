import React from 'react';
import BookList from './BookList.jsx';

var navBox = {
    width: '30%',
    left: '500px',
    right: '500px',
    border: '2px solid black',
    padding: '10px'
}

class InfoBox extends React.Component {
    constructor(props) {
      super(props)
    }

    toRender() {
        if (this.props.titleClicked.length) {
            var onRead = this.props.readToggle(this.props.titleClicked);
            for(var i = 0; i < this.props.list.length; i++) {
                if (this.props.list[i].title === this.props.titleClicked) {
                    
                    return (
                        <div>
                            Title: {this.props.list[i].title} <br/>
                            Description: {this.props.list[i].info} <br/>
                            <input type="checkbox" onClick={onRead} /> Read
                        </div>
                    )
                }
            }
        } else {
            return (
                <div>Nothing Clicked Yet!</div>
            )
        }
    }

    render() {

        return(
            <div style={navBox}>
                <span><button>Books I've Read</button><button>Books I'll Read</button></span>
                {this.toRender()}
            </div>
        )
    }
}

export default InfoBox;