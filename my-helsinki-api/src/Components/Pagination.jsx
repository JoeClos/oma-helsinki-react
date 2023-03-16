
const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div style={{ padding: "2rem"}} className="container">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button type="button" className="btn btn-info" onClick={prevPage}>
            Previous
          </button>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`page-item ${currentPage === pgNumber ? "active" : ""} `}
          >
            <button
              onClick={() => setCurrentPage(pgNumber)}
              type="button" className="btn btn-info"
            >
              {pgNumber}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button type="button" className="btn btn-info" onClick={nextPage} >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;