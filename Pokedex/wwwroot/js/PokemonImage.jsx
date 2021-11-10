
class PokemonImage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []

        };
    }

    render() {
        return (
            this.props ?
                <img id="pokemonimg" src={this.props.data.pokemonDetails?.sprites ? this.props.data.pokemonDetails?.sprites?.front_default:"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="} className="pokemon-out" alt=""></img >
                : <div>loading image</div>
        );
    }
}

export default PokemonImage