import React from 'react';
import PropTypes from 'prop-types';
import CategoryFilter from './CategoryFilter';


function Header({ onFilterChange }) {
  return (
    <div className="Header d-flex justify-content-between align-items-center">
      <h1 className="">Bookstore CMS</h1>
      <CategoryFilter onFilter={onFilterChange} />
    </div>
  );
}

Header.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Header;
