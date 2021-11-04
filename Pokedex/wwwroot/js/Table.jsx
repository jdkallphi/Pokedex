
class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: null
        };
    };
    updateData() {
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

    componentDidMount() {
        this.updateData();
    }
    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.updateData();
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
        this.state = { data: [], PokemonId: -1 };

    }
    handleClick = (pokeId) => {
        this.props.handleClick(this.props.id);
        this.setState({ PokemonId: pokeId });

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
        this.state = { data: [], PokemonId: -1 };

    }
    handleClick = (pokeId) => {
        this.props.handleClick(this.props.id);
        this.setState({ PokemonId: pokeId });

    }
    render() {
        return (
            <div style={{ backgroundColor: "lightblue" }} onClick={() => { this.handleClick();}} className="border border-secondary border-collapse col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center" id={this.props.id}>
                <div >
                    <img src={this.props.imgurl} />
                    <p>{this.props.name}</p>
                </div>
            </div>
        );
    }

}

export default Table