import Table from "/js/Table.jsx"


function Pagination({ data, pageLimit, dataLimit, searchTerm, handleClick }) {
    const [pages] = React.useState(Math.round(data / dataLimit));
    const [currentPage, setCurrentPage] = React.useState(1);

    function goToNextPage() {
        setCurrentPage((page) => currentPage + 1);
    }

    function goToFirstPage() {
        setCurrentPage((page) => 1);
    }
    function goToLastPage() {
        setCurrentPage((page) => pages);
    }
    function goToPreviousPage() {
        setCurrentPage((page) => currentPage - 1);
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginationGroup = () => {

        let pageswithmaxlimit = Math.round(pages / pageLimit) - 1;
        let start = currentPage - 2 > 1 ? currentPage - 2 : 1;
        let pglmt = currentPage - 2 < pageLimit * pageswithmaxlimit ? pageLimit : (pages % pageLimit + pages - currentPage);
        return new Array(pglmt).fill().map((_, idx) => start + idx);
    };

    if (currentPage != 1 && searchTerm != "") {
        setCurrentPage(1);
    }
    return (
        <div>
            {/* show the posts, 12 posts at a time */}
            <div className="dataContainer">
                < Table currentPage={currentPage - 1} dataLimit={dataLimit} searchTerm={searchTerm} handleClick={handleClick} data={data}>

                </Table>

            </div>

            {/* show the pagination
        it consists of next and previous buttons
        along with page numbers, in our case, 5 page
        numbers at a time
    */}
            <div className="pagination">

                {/* first button */}
                <button
                    onClick={goToFirstPage}
                    className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                >
                    first
                </button>
                {/* previous button */}
                <button
                    onClick={goToPreviousPage}
                    className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                >
                    prev
                </button>

                {/* show page numbers */}
                {getPaginationGroup().map((item, index) => (
                    <button
                        key={index}
                        onClick={changePage}
                        className={`paginationItem ${currentPage === item ? 'active' : null}`}
                    >
                        <span>{item}</span>
                    </button>
                ))}

                {/* next button */}
                <button
                    onClick={goToNextPage}
                    className={`next ${currentPage === pages ? 'disabled' : ''}`}
                >
                    next
                </button>
                {/* last button */}
                <button
                    onClick={goToLastPage}
                    className={`next ${currentPage === pages ? 'disabled' : ''}`}
                >
                    last
                </button>
            </div>
        </div >
    );
}

export default Pagination