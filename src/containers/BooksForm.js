import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.bookCategory = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

    this.titleInput = React.createRef();
    this.categoryInput = React.createRef();
    const [categoryOne] = this.bookCategory;
    this.state = {
      title: '',
      category: categoryOne,
      titleError: '',
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange() {
    this.setState({
      title: this.titleInput.current.value,
    });
  }

  handleCategoryChange() {
    this.setState({
      category: this.categoryInput.current.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, category } = this.state;
    if (!/\S/.test(title)) {
      this.setState({ titleError: 'Title must not contain only whitespaces' });
      return;
    }
    const { createBook } = this.props;
    createBook({ title, category });
    this.setState({
      title: '',
      category: 'Action',
      titleError: '',
    });
  }

  render() {
    const { title, titleError, category } = this.state;
    return (
      <div className="container">
        <div className="Line col-9" />
        <div className="col-9 mx-auto">
          <h3 className="form-title">ADD NEW BOOK</h3>
          <form className="form d-flex" onSubmit={this.handleSubmit}>
            <div className="form-group title mr-4">
              <span>{titleError}</span>
              <input ref={this.titleInput} type="text" placeholder="Title" className="form-control" name="title" id="title" onChange={this.handleTitleChange} value={title} required />
            </div>
            <div className="form-group category mr-4">
              <select ref={this.categoryInput} placeholder="category" className="form-control" onChange={this.handleCategoryChange} value={category}>
                {this.bookCategory.map(val => <option key={val}>{val}</option>)}
              </select>
            </div>
            <button type="submit" className="btn mainColor submit">submit</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createBook: (book) => {
    dispatch(createBook(book));
  },
});

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
