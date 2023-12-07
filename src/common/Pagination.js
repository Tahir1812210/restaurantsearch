import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount === 1) return null;

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}
    >
      <nav aria-label="Page navigation">
        <ul className="pagination">
          {currentPage > 1 && (
            <li className="page-item">
              <a
                className="page-link"
                onClick={() => onPageChange(currentPage - 1)}
              >
                Previous
              </a>
            </li>
          )}

          {currentPage < pagesCount && (
            <li className="page-item">
              <a
                className="page-link"
                onClick={() => onPageChange(currentPage + 1)}
              >
                Next
              </a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
