import React, { Component } from 'react';
import Book from './Book.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      giggleStatus: false
    };
    this.handleClick = this.handleClick.bind(this)
    this.giggleButtonClick = this.giggleButtonClick.bind(this)
  }

  // componentWillMount() {
  //   console.log("In componentWillMount")
  //   // debugger;
  // }

  componentDidMount() {
    console.log("In componentDidMount")

    // debugger;
    fetch('http://localhost:4567/books.json')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          // do error handling
        }
      })
      .then(response => response.json())
      .then(body => {
        // debugger;
        let nextBooks = body.books;
        this.setState({ books: nextBooks });
      })
  }

  handleClick() {
    // debugger;
    // fetch('http://localhost:4567/books.json')
    //   .then(response => {
    //     if (response.ok) {
    //       return response;
    //     } else {
    //       // do error handling
    //     }
    //   })
    //   .then(response => response.json())
    //   .then(body => {
    //     let nextBooks = body.books;
    //     this.setState({ books: nextBooks });
    //   })
  }

  giggleButtonClick() {
    debugger;
    let newGiggleStatus;
    if (this.state.giggleStatus){
      newGiggleStatus = false
    } else {
      newGiggleStatus = true
    }
    this.setState({giggleStatus: newGiggleStatus })
  }

  // componentWillUpdate(){
  //   console.log("In componentWillUpdate")
  //   debugger;
  // }
  //
  // componentDidUpdate(){
  //   console.log("In componentDidUpdate")
  //   debugger;
  // }

  render() {
    console.log("In render")
    // debugger;

    // Manage giggle text show
    let giggle;
    if(this.state.giggleStatus){
      giggle = "teehee"
    }

    // Create all of the book components
    let books = this.state.books.map(book => {
      return (
        <Book
          key={book.id}
          name={book.name}
        />
      )
    });

    return (
      <div className="callout center columns">
        <h1 onClick={this.handleClick}>Lovely Lovely Books</h1>
        <ul> {books} </ul>
        <br/>
        <button onClick={this.giggleButtonClick}>Click for Giggles</button>
        <p>{giggle}</p>
      </div>
    );
  }
}

export default App;
