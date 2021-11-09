
class PokemonImage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []

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
            this.props ?
                this.props.data.pokemonDetails?.sprites ?
                    < img src={this.props.data.pokemonDetails?.sprites?.front_default} ></img > :
                    <div>no pokemon, no image</div>
                : <div>loading image</div>
        );
    }
}

export default PokemonImage