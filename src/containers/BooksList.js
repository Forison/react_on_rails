import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter, getBooks } from '../actions/index';
import Header from '../components/Header';


class BooksList extends Component {
  constructor(props) {
    super(props)
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleRemoveBook(id) {
    const { removeBook } = this.props
    removeBook(id);
  };

  handleFilterChange(filter) {
    const { changeFilter } = this.props
    changeFilter(filter);
  };

  componentDidMount() {
    const { getBooks } = this.props
    getBooks()
  }
  render() {
    const { books, filter } = this.props
    console.log(books)
    const visible = books.filter(book => book.category === filter || filter === 'All')

    return (
      <div className="container BooksList">
        <div className="mx-auto col-9 shadow-lg mt-3 ">
          <div className="p-3">
            <Header onFilterChange={this.handleFilterChange} />
          </div>
          {
            visible.map(book => <Book clickDelete={this.handleRemoveBook} key={book.id} book={book} />)
          }
          <div className="clearfix" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter

});
const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(removeBook(id)),
  changeFilter: filter => dispatch(changeFilter(filter)),
  getBooks: () => dispatch(getBooks())
});
BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
BooksList.defaultProps = {
  books: [{}],
};
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
