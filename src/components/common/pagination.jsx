import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

class Paginations extends Component {
  render() {
    const { itemCount, pageSize, currentPage, onPageChange } = this.props;

    const pageCount = Math.ceil(itemCount / pageSize);
    if (pageCount <= 1) return null;

    const pages = _.range(1, pageCount + 1);

    return (
      <nav>
        <ul className="pagination">
          {pages.map(page => (
            <li
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
              key={page}
            >
              <a
                className="page-link"
                href="#"
                onClick={() => onPageChange(page)}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

Paginations.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Paginations;
