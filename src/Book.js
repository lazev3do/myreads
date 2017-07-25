import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './bookshelfchanger'

function Book(props) {

  const {imageLinks,  authors, id, title, shelves, shelf} = props;

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${imageLinks.smallThumbnail}")` }}></div>
        <BookShelfChanger shelves={shelves} shelf={shelf} />
    </div>
      <div className="book-title">{title}</div>
      {authors.map((author,index)=>(
        <div key={`author_${index}`} className="book-authors">{author}</div>
      ))}
    </div>
  )
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  imageLinks:PropTypes.object.isRequired,
  shelves:PropTypes.object.isRequired,
  shelf:PropTypes.string.isRequired
}

export default Book;
