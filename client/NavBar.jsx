import React from 'react';

var navBox = {
    width: '30%',
    border: '2px solid black',
    padding: '10px'
}

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          currentBook: ''
        }
    }

    onTitleClick(e) {
      e.preventDefault();
      this.props.onTitleClick()
    }

    render() {
        return(
        <div style={navBox}>
            Navigation Bar
            <div>
            <input type="text" value={this.props.book} placeholder="Add New Book" onChange={this.props.onChange}></input>
            <button onClick={this.props.onClick}>Add Book</button>
            {this.props.list.map((book) => {
                return <div onClick={this.props.onTitleClick} id={book}>{book}</div>
            })}
            </div>
        </div>
        )
        
    }
}

export default NavBar;