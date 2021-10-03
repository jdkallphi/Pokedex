import axios from 'axios';
import ReactPaginate from 'react-paginate';

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 10,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
    receivedData() {
        axios
            .get(`/pokemonlist`)
            .then(res => {

                const data = res.data;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(pd => <React.Fragment>
                    <p>{pd.title}</p>
                    <img src={pd.thumbnailUrl} alt="" />
                </React.Fragment>)

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),

                    postData
                })
            });
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    componentDidMount() {
        this.receivedData()
    }
    render() {
        return (
            <div>
                {this.state.postData}
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"} />
            </div>

        )
    }
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
        console.log("table running");
        console.log(this.props.data);

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
    <Pagination
        title="Posts"
        pageLimit={5}
        dataLimit={10}
    />,
    document.getElementById('content'),
);