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
            return (
                <div>{this.props.titleClicked}</div>
            )
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