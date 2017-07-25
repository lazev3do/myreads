import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css'
import Shelf from './shelf.js'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    shelves: new Map()
  }
  componentDidMount() {
    BooksAPI.getAll().then((books)=>{
      let shelves = new Map([
        ["currentlyReading",{name:"Currenty Reading",books:[]}],
        ["wantToRead",{name:"Want to Read",books:[]}],
        ["read",{name:"Read",books:[]}]
      ]);
      books.forEach(book=>{
        let shelf = shelves.get(book.shelf);
        if(typeof shelf==='undefined')//just in case we get a shelf different from the ones above
        {
          shelf = {name:book.shelf,books:[]};
          shelves.set(shelf.name,shelf);
        }
        shelf.books.push(book);
      });
      this.setState({shelves});
    });
  }

  render() {
    const {shelves} = this.state;
    return (
      <div>
        <Route exact path="/search" render={()=>(
          <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        )}/>
      <Route exact path="/" render={()=>(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {
                  Array.from(shelves).map(entry=>(
                    <Shelf shelves={shelves} key={entry[0]} name={entry[1].name} books={entry[1].books} />
                  ))
                }
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
