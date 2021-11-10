
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
                this.props.data.pokemonDetails?.sprites ?
                    <img id="pokemonimg" src={this.props.data.pokemonDetails?.sprites?.front_default} className="pokemon-out"></img > :
                    <div>no pokemon, no image</div>
                : <div>loading image</div>
        );
    }
}

export default PokemonImage