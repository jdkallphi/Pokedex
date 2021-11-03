let globalCurrentPage = 1;
let globalDataLimit = 12;
let globalSearchTerm = "";
let globalPokemonId = -1;
let globalCommentHidden = false;
function Pagination({ data, title, pageLimit, dataLimit, searchTerm, handleClick }) {
    const [pages] = React.useState(Math.round(data / dataLimit));
    const [currentPage, setCurrentPage] = React.useState(1);

    function goToNextPage() {
        setCurrentPage((page) => currentPage + 1);
        globalCurrentPage = currentPage + 1;
    }

    function goToFirstPage() {
        setCurrentPage((page) => 1);
        globalCurrentPage = 1;
    }
    function goToLastPage() {
        setCurrentPage((page) => pages);
        globalCurrentPage = pages;
    }
    function goToPreviousPage() {
        setCurrentPage((page) => currentPage - 1);
        globalCurrentPage = currentPage - 1;
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginationGroup = () => {
        let start = (currentPage - 1) - 2 > 0 ? (currentPage - 1) - 2 : 0;
        let pglmt = currentPage-2 < pageLimit * (Math.round(pages / pageLimit) - 1) ? pageLimit : pages % pageLimit;
        return new Array(pglmt).fill().map((_, idx) => start + idx + 1);
    };

    return (
        <div>
            {/* show the posts, 12 posts at a time */}
            <div className="dataContainer">
                < Table currentPage={currentPage - 1} dataLimit={dataLimit} searchTerm={searchTerm} handleClick={handleClick}>

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
class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [], commentHidden: globalCommentHidden };

    }

    componentDidMount() {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            var text = xhr.responseText;
            text = text == "" ? "[]" : text;
            console.log(text);
            const data = (JSON.parse(text));
            this.setState({ data: data });
        };
        xhr.open('get', this.props.url, true);
        xhr.send();
    };

    handleClick = () => {
        this.setState({ commentHidden: !this.state.commentHidden })
    }

    render() {
        if (this.state.data > 0) {
            return (
                <div key="searchtestdetails">
                    <div className={`${this.state.commentHidden === true ? 'd-none' : 'table'}`}>
                        <div>
                            <SearchTest data={this.state.data} handleClick={this.handleClick} />
                        </div>
                    </div>
                    <div className={`${this.state.commentHidden === true ? 'table' : 'd-none'}`}>
                        <div>
                            <Details data={globalPokemonId} handleClick={this.handleClick} />
                        </div>
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
            fetch('/limitedpokemonlist/' + this.props.currentPage + ' /' + this.props.dataLimit + ' /' + this.props.searchTerm)
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
                <TableTest data={data} handleClick={this.props.handleClick}>
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
            <TablePiece handleClick={this.props.handleClick} imgurl={d.imageUrl} url={d.url} name={d.name} key={idx} id={d.pokedexIndex}>

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
    constructor(props) {
        super(props);
        this.state = { data: [] };

    }
    handleClick = () => {
        globalPokemonId = this.props.id;
    }
    render() {
        return (
            <div style={{ backgroundColor: "lightblue" }} onClick={() => { this.handleClick(); this.props.handleClick(); }} className="border border-secondary border-collapse col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center" id={this.props.id}>
                <div >
                    <img src={this.props.imgurl} />
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
            value: 'search pokemon',
            searchValue: ''
        };
        this.timer = null;
    }
    handleChange(e) {
        // Clears running timer and starts a new one each time the user types
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.setState({ searchValue: this.myinput.value })

        }, 1000);
    }

    render() {
        return (
            <div>
                <h1>PokeDex</h1>

                <div>
                    <input placeholder={this.state.value} onChange={(e) => { this.handleChange(e) }} ref={(input) => this.myinput = input} />
                </div>
                <div>
                    <Pagination
                        data={this.props.data}
                        title="PokeDex"
                        pageLimit={5}
                        dataLimit={globalDataLimit}
                        searchTerm={this.state.searchValue}
                        handleClick={this.props.handleClick}
                    />
                </div>
            </div>
        )
    }
}

class Details extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: []
        };
    }
    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({ isLoaded: false });
            fetch('/pokemondetails/' + globalPokemonId)
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
                <SubDetails data={data} handleClick={this.props.handleClick}>
                </SubDetails> :
                <div>Loading details...</div>
        );
    }

}
class SubDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    render() {
        return (
            this.props.data.name != null ?
                <div style={{ backgroundColor: "lightblue" }}>
                    <div className="btn" onClick={this.props.handleClick}>return to list</div>
                    <h1>subdetails</h1>
                    <div>
                        <img src={this.props.data.sprites.front_default}></img>
                        <img src={this.props.data.sprites.front_female}></img>
                        <img src={this.props.data.sprites.front_shiny}></img>
                        <img src={this.props.data.sprites.front_shiny_female}></img>

                        <p>id: {this.props.data.id}</p>
                        <p>name: {this.props.data.name}</p>
                        <p>height: {this.props.data.height/10} m</p>
                        <p>weight: {this.props.data.weight/10} kg</p>
                    </div>
                </div> :
                <div>
                    <h1>empty subdetails</h1>
                </div>
        )
    }
}


ReactDOM.render(
    <CommentBox
        key="commentbox"
        url="/pokemonlist"
    />,
    document.getElementById('content'),
);