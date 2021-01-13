import React, { useState } from 'react';
import _ from 'lodash';
import ReactPaginate from 'react-paginate';

import Loader from 'components/Loader';
import Table from 'components/Table';
import DetailsRowView from 'components/DetailsRowView';
import ModeSelector from 'components/ModeSelector';
import TableSearch from 'components/TableSearch';

const pageSize = 50;

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [sort, setSort] = useState('asc');
  const [sortField, setSortField] = useState('id');
  const [rowDetails, setRowDetails] = useState(null);
  const [isModeSelected, setIsModeSeleted] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState('');

  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    const clonedData = data.concat();
    const orderedData = _.orderBy(clonedData, [sortField], [sort]);

    setData(orderedData);
    setIsLoading(false);
  }

  const onSort = (sortField) => {
    const clonedData = data.concat();
    const sortType = sort === 'asc' ? 'desc' : 'asc';
    const orderedData = _.orderBy(clonedData, [sortField], [sortType]);

    setData(orderedData);
    setSort(sortType);
    setSortField(sortField);
  }

  const onRowSelect = (row) => {
    setRowDetails(row);
  }

  const modeSelectHandler = (url) => {
    setIsModeSeleted(true);
    fetchData(url);
  }

  const pageChangeHandler = ({ selected }) => {
    setCurrentPage(selected);
  }

  const searchHandler = (search) => {
    console.log('search', search);
    setSearch(search);
    setCurrentPage(0);
  }

  const getFilteredData = () => {
    if (!search) {
      return data;
    }

    return data.filter(item => {
      return item['firstName'].toLowerCase().includes(search.toLowerCase())
        || item['lastName'].toLowerCase().includes(search.toLowerCase())
        || item['email'].toLowerCase().includes(search.toLowerCase());
    });
  }

  if (!isModeSelected) {
    return (
      <div className="container">
        <ModeSelector onselect={modeSelectHandler} />
      </div>
    );
  }

  const filteredData = getFilteredData();

  const pageCount = Math.ceil(filteredData.length / pageSize);

  const displayData = _.chunk(filteredData, pageSize)[currentPage];

  return (
    <div className="container">
      {isLoading
        ? <Loader />
        : <>
          <TableSearch onSearch={searchHandler} />
          <Table
            data={displayData}
            onSort={onSort}
            sort={sort}
            sortField={sortField}
            onRowSelect={onRowSelect}
          />
        </>
      }

      {data.length > pageSize
        ? <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={pageChangeHandler}
            containerClassName={'pagination'}
            activeClassName={'active'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            forcePage={currentPage}
          />
        : null
      }

      {rowDetails
        ? <DetailsRowView person={rowDetails} />
        : null
      }
    </div>
  );
}

export default App;