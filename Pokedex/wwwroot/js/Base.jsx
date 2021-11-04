import Search from "/js/Search.jsx"
import Details from "/js/Details.jsx"

class Base extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoaded:false, data: null, commentHidden: false, PokemonId: -1 };

    }

    componentDidMount() {
        fetch('/pokemonlist')
            .then(response => response.json())
            .then(body => {
                this.setState({ data: body });
            })
            .then(x => {
                this.setState({ isLoaded: true });
            })
            .catch(error => console.error('Error', error));

    };

    handleClick = (pokeId) => {
        this.setState({ commentHidden: !this.state.commentHidden });
        this.setState({ PokemonId: pokeId });
    }

    render() {
        const { isLoaded, data } = this.state;
        return (
            (isLoaded) ?
                <div key="searchtestdetails">
                    <div className={`${this.state.commentHidden === true ? 'd-none' : 'table'}`}>
                        <div>
                            <Search data={data} handleClick={this.handleClick} />
                        </div>
                    </div>
                    <div className={`${this.state.commentHidden === true ? 'table' : 'd-none'}`}>
                        <div>
                            <Details data={this.state.PokemonId} handleClick={this.handleClick} />
                        </div>
                    </div>
                </div>
                : <div>loading</div>
        )
    }
}




ReactDOM.render(
    <>
        <Base
            key="commentbox"
            url="/pokemonlist"
        />
    </>,
    document.getElementById('content'),
);