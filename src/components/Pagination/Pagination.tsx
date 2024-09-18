import SvgIcon from "components/SvgIcon/SvgIcon";

// CSS prefix: .pagination-
import "./style.css";

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
          className="pagin-number-btn"
          data-active={currentPage === i}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  function onClickPrev() {
    if (currentPage === 1) return;
    onPageChange(currentPage - 1);
  }

  function onClickNext() {
    if (currentPage === totalPages) return;
    onPageChange(currentPage + 1);
  }

  return (
    <div className="pagin">
      <button
        className="pagin-arrow-btn"
        onClick={onClickPrev}
        disabled={currentPage === 1}
      >
        <span className="pagin-arrow-icon">
          <SvgIcon path="caret-left" />
        </span>
        <span className="pagin-arrow-label">Prev</span>
      </button>

      <div className="pagin-numbers">{renderPageNumbers()}</div>

      <button
        className="pagin-arrow-btn"
        onClick={onClickNext}
        disabled={currentPage === totalPages}
      >
        <span className="pagin-arrow-label">Next</span>
        <span className="pagin-arrow-icon">
          <SvgIcon path="caret-right" />
        </span>
      </button>
    </div>
  );
}

export default Pagination;
