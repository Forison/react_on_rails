import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ onFilter }) => {
  const bookCategory = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <div>
      <select className="form-control" onChange={(event) => { onFilter(event.target.value); }}>
        <option>All</option>
        {bookCategory.map(val => <option key={val}>{val}</option>)}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
