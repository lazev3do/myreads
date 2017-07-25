import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BookShelfChanger extends Component {

  static propTypes = {
    shelf: PropTypes.string.isRequired,
    shelves: PropTypes.object.isRequired
  };
  state = {
    currentShelf : this.props.shelf
  }

  render() {
    const {shelves,shelf} = this.props;
    const {currentShelf} = this.state;
    const presentShelfName = shelves.get(currentShelf);
    return (
        <div className="book-shelf-changer">
        <select>
          <option value="none" disabled>Move to...</option>
          {
            Array.from(shelves.keys()).map((shelfName,index) => (
              <option key={`option_${index}`} selected={shelfName==shelf && (selected)} value={shelfName}>{shelves.get(shelfName).name}</option>
            ))
          }
        </select>
      </div>
    )
  }
}

export default BookShelfChanger;
