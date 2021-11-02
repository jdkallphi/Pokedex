let globalCurrentPage = 1;
let globalDataLimit = 12;
let globalSearchTerm = "";
function Pagination({ data, title, pageLimit, dataLimit, searchTerm }) {
    const [pages] = React.useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = React.useState(1);

    function goToNextPage() {
        setCurrentPage((page) => currentPage + 1);
        globalCurrentPage = currentPage + 1;
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
        globalCurrentPage = page - 1;
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginationGroup = () => {
        let start = (currentPage - 1) - 2 > 0 ? (currentPage - 1) - 2 : 0;

        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };

    console.log("rerunning paging");
    console.log(globalSearchTerm);
    return (
        <div>
            <h1>{title}</h1>
            <SearchTest />

            {/* show the posts, 12 posts at a time */}
            <div className="dataContainer">
                < Table currentPage={currentPage - 1} dataLimit={dataLimit} searchTerm={searchTerm}>

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
            return (
                <div>
                    <div>
                        <Pagination
                            data={this.state.data}
                            title="Posts"
                            pageLimit={5}
                            dataLimit={globalDataLimit}
                            searchTerm={globalSearchTerm}
                        />
                    </div>
                </div>
            );
        }
        else {
            return <div>Loading...</div>
        }
    }
}

class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: null
        };
    }
    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({ isLoaded: false });
            console.log('page=' + this.props.currentPage);
            console.log('limit=' + this.props.dataLimit);
            console.log('search=' + this.props.searchTerm);
            fetch('/limitedpokemonlist/' + this.props.currentPage + ' /' + this.props.dataLimit+' /'+this.props.searchTerm)
                .then(response => response.json())
                .then(body => {
                    this.setState({ data: body });
                })
                .then(x => {
                    this.setState({ isLoaded: true });

                })
                .catch(error => console.error('Error', error));
        }
    };
    render() {
        const { isLoaded, data } = this.state;
        return (
            isLoaded ?
                <TableTest data={data}>
                </TableTest> :
                <div>Loading tableteset...</div>
        );
    }
}
class TableTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };

    }
    render() {
        const tablespieces = this.props.data.map((d, idx) => (
            <TablePiece imgurl={d.imageUrl} url={d.url} name={d.name} key={d.id} id={idx}>

            </TablePiece>
        ))
        return (
            <div className="col-12" style={{ display: "flex", flexWrap: "wrap" }}>
                {tablespieces}
            </div >
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

class SearchTest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 'search pokemon'
        }
    }
    handleChange(e) {
        console.log('handle change called')
        console.log(this.myinput.value)
        globalSearchTerm = this.myinput.value;
    }

    render() {
        return (
            <div>
                <input placeholder={this.state.value} onChange={(e) => { this.handleChange(e) }} ref={(input) => this.myinput = input} />
            </div>
        )
    }
}

ReactDOM.render(
    <CommentBox
        url="/pokemonlist"
    />,
    document.getElementById('content'),
);