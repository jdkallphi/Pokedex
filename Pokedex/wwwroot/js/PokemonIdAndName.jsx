
class PokemonIdAndName extends React.Component {
    constructor(props) {
        super(props)
        this.state = {data: []

        };
    }

    //componentDidMount() {
    //    this.updateData();
    //}
    //componentDidUpdate(prevProps) {
    //    if (prevProps !== this.props) {
    //        this.updateData();
    //    }
    //};

    render() {
        return (
            this.props?
            <div>
                <p className="pokemon-number" id="pokemon-number">{this.props.data.pokemonDetails?.id} </p>
                <p className="pokemon-name" id="pokemon-name">{this.props.data.pokemonDetails?.name} </p>
                </div>
                :<div>loading id and name</div>
        );
    }
}

export default PokemonIdAndName