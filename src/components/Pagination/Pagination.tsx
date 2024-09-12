// TODO: Use one caret
import CaretRightIcon from "assets/icons/caret-right.svg";
import CaretLeftIcon from "assets/icons/caret-left.svg";

// CSS prefix: .pagination-
import "./style.css";

// TODO: update classnames
// TODO: Disable button when currentPage === 1 or totalPages and prev and next buttons

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className="pagination-number-btn"
          data-active={currentPage === i}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="pagination">
      <button
        className="pagination-arrow-btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <span className="pagination-arrow-icon">
          <CaretLeftIcon />
        </span>
        <span className="pagination-arrow-label">Prev</span>
      </button>

      <div className="pagination-numbers">{renderPageNumbers()}</div>

      <button
        className="pagination-arrow-btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <span className="pagination-arrow-label">Next</span>
        <span className="pagination-arrow-icon">
          <CaretRightIcon />
        </span>
      </button>
    </div>
  );
}

export default Pagination;
