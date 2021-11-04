import Search from "/js/Search.jsx"
import Details from "/js/Details.jsx"

class Base extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [], commentHidden: false, PokemonId: -1 };

    }

    componentDidMount() {
        fetch('/pokemonlist')
            .then(response => response.json())
            .then(body => {
                this.setState({ data: body });
            })
            .then(x => {
                this.setState({ isLoaded: true });
                console.log('loaded');
            })
            .catch(error => console.error('Error', error));

    };

    handleClick = (pokeId) => {
        this.setState({ commentHidden: !this.state.commentHidden });
        this.setState({ PokemonId: pokeId });
        console.log('base pokeId' + pokeId);
        console.log('base pokemonId' + this.state.PokemonId);
    }

    render() {
        return (
            (this.state.data > 0) ?
                <div key="searchtestdetails">
                    <div className={`${this.state.commentHidden === true ? 'd-none' : 'table'}`}>
                        <div>
                            <Search data={this.state.data} handleClick={this.handleClick} />
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