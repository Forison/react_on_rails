import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, clickDelete }) {
  return (
    <div className="card p-2 m-3">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h4>{book.category}</h4>
          <h2>{book.title}</h2>
          <h5>{book.author}</h5>
        </div>
        <div>
          <button
            type="button"
            className="btn mainColor"
            onClick={() => clickDelete(book.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
Book.propTypes = {
  book: PropTypes.object.isRequired,
  clickDelete: PropTypes.func.isRequired,
};

export default Book;
