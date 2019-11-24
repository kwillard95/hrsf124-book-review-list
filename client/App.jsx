import React from 'react';
import Header from './Header.jsx';
import NavBar from './NavBar.jsx'
import InfoBox from './InfoBox.jsx'


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentBook: '',
            titleClicked: '',
            titleInfo: false,
            display: {on: false, read: false},
            list: []
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onReadToggle = this.onReadToggle.bind(this);
        this.onBookDelete = this.onBookDelete.bind(this);
        this.onDisplayClick = this.onDisplayClick.bind(this);
        this.onTitleClick = this.onTitleClick.bind(this);
    }

    onInputChange(e) {
      e.preventDefault();
      this.setState({currentBook: e.target.value})
    }

    onFormSubmit(e) {
      e.preventDefault();
      var bookList = this.state.list;
      bookList.push(this.state.currentBook);
      this.setState({currentBook: '', list: bookList})
      //POST request
    }

    onReadToggle() {

    }

    onBookDelete() {

    }

    onDisplayClick() {

    }

    retrieveData() {

    }

    deleteData() {

    }

    onTitleClick(e) {
      e.preventDefault();
      this.setState({titleClicked: e.target.id})
      console.log(this.state.titleClicked)
    }

    render() {
        return(
        <div>
          <Header/>
          <span><NavBar onChange={this.onInputChange} onClick={this.onFormSubmit} book={this.state.currentBook} titleClicked={this.state.titleClicked} onTitleClick={this.onTitleClick} list={this.state.list}/>  <InfoBox titleClicked={this.state.titleClicked} /></span>
        </div>
          
        )
    }
}

export default App