import React from 'react';
import PropTypes from 'prop-types';

import './Table.scss';

const Table = ({ data, onSort, sort, sortField, onRowSelect }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={onSort.bind(null, 'id')}>
            {sortField === 'id'
              ? <span style={{ color: '#f00' }}>ID</span>
              : <span>ID</span>
            }
            {sort === 'asc' && sortField === 'id'
              ? <i className="fas fa-sort-down"></i>
              : <i className="fas fa-sort-up"></i>
            }
          </th>
          <th onClick={onSort.bind(null, 'firstName')}>
            {sortField === 'firstName'
              ? <span style={{ color: '#f00' }}>First Name</span>
              : <span>First Name</span>
            }
            {sort === 'asc' && sortField === 'firstName'
              ? <i className="fas fa-sort-down"></i>
              : <i className="fas fa-sort-up"></i>
            }
          </th>
          <th onClick={onSort.bind(null, 'lastName')}>
            {sortField === 'lastName'
              ? <span style={{ color: '#f00' }}>Last Name</span>
              : <span>Last Name</span>
            }
            {sort === 'asc' && sortField === 'lastName'
              ? <i className="fas fa-sort-down"></i>
              : <i className="fas fa-sort-up"></i>
            }
          </th>
          <th onClick={onSort.bind(null, 'email')}>
            {sortField === 'email'
              ? <span style={{ color: '#f00' }}>Email</span>
              : <span>Email</span>
            }
            {sort === 'asc' && sortField === 'email'
              ? <i className="fas fa-sort-down"></i>
              : <i className="fas fa-sort-up"></i>
            }
          </th>
          <th onClick={onSort.bind(null, 'phone')}>
            {sortField === 'phone'
              ? <span style={{ color: '#f00' }}>Phone</span>
              : <span>Phone</span>
            }
            {sort === 'asc' && sortField === 'phone'
              ? <i className="fas fa-sort-down"></i>
              : <i className="fas fa-sort-up"></i>
            }
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr 
            key={item.id + item.phone}
            onClick={onRowSelect.bind(null, item)}
          >
            <th>{item.id}</th>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </tr>)
        )}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
  sortField: PropTypes.string.isRequired,
  onRowSelect: PropTypes.func.isRequired
};

export default Table;