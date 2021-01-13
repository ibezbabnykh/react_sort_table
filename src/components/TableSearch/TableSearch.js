import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TableSearch = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const onHandleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div className="input-group mb-3 mt-3">
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-secondary" 
              type="button"
              onClick={() => onSearch(value)}
            >
              Search
            </button>
          </div>
          <input
            type="text"
            className="form-control"
            onChange={onHandleChange}
            value={value}
          />
    </div>
  );
}

TableSearch.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default TableSearch;