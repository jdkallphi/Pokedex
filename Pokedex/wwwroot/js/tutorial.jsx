

function Pagination({ data, title, pageLimit, dataLimit }) {
    const [pages] = React.useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = React.useState(1);

    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };

    console.log("rerunning paging");
    console.log(data);
    return (
        <div>
            <h1>{title}</h1>

            {/* show the posts, 10 posts at a time */}
            <div className="dataContainer">
                < Table data={getPaginatedData()} >

                </Table>

            </div>

            {/* show the pagination
        it consists of next and previous buttons
        along with page numbers, in our case, 5 page
        numbers at a time
    */}
            <div className="pagination">
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
            </div>
        </div >
    );
}
class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };

    }

    componentDidMount() {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            var text = xhr.responseText;
            text.replace('[', '').replace(']', '');
            text = text == "" ? "[]" : text;
            const data = (JSON.parse(text));
            this.setState({ data: data });
        };
        xhr.open('get', this.props.url, true);
        xhr.send();
    };
    render() {
        if (this.state.data.length > 0) {
            console.log("this state date length is > 0: " + this.state.data.length);
            return (

                <div>
                    <>
                        <Pagination
                            data={this.state.data}
                            title="Posts"
                            pageLimit={5}
                            dataLimit={10}
                        />
                    </>
                </div>
            );
        }
        else {
            return <div>Loading...</div>
        }
    }
}

class Table extends React.Component {
    render() {
        const tablespieces = this.props.data.map((d, idx) => (
            <TablePiece imgurl={d.imageUrl} url={d.url} name={d.name} key={d.id} id={idx}>

            </TablePiece>
        ))
        return (
            <div className="col-12" style={{ display: "flex", flexWrap: "wrap" }}>
                {tablespieces}
            </div>
        );
    }
}
class TablePiece extends React.Component {
    render() {
        return (
            <div className="border border-secondary border-collapse col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center" id={this.props.id}>
                <div>
                    <img src={this.props.imgurl} />
                    {/*<p>{this.props.url}</p>*/}
                    <p>{this.props.name}</p>
                </div>
            </div>
        );
    }

}

ReactDOM.render(
    <CommentBox
        url="/pokemonlist"
    />,
    document.getElementById('content'),
);