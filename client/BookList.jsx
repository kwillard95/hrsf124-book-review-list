import React from 'react';

class BookList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.titleClicked.length) {
            <div>{this.props.titleClicked}</div>
        }
    }
}

export default BookList;