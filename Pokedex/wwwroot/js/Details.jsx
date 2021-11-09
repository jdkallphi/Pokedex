//import Typewriter from '../../node_modules/typewriter-effect';

class Details extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: null
        };
    }
    render() {
        return (
            <SubDetails data={this.props.data} handleClick={this.props.handleClick}>
            </SubDetails>
        );
    }

}
class SubDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    render() {
        var versions = ['red-blue'];

        var movesAtLevel1 = this.props.data.moves.filter(d => d.version_group_details.some(c => versions.includes(c.version_group.name) && c.level_learned_at === 1));
        var abilities = this.props.data.abilities.slice(0, 3).map((x) => x.ability.name).toString();
        var types = this.props.data.types.slice(0, 3).map((x) => x.type.name).toString();

        return (
            this.props.data.name != null ?
                <div className='poke-info-wrap'>
                    <div className="col-7">

                        <p className='poke-info'>height: {this.props.data.height / 10} m</p>
                        <p className='poke-info'>weight: {this.props.data.weight / 10} kg</p>
                        <p className='poke-info'>Type: {types}</p>
                        <p className='poke-info'>moves: {movesAtLevel1.map(x=>x.move.name).toString()}</p>
                        <p className='poke-info'>abilities: {abilities }</p>
                    </div>
                    <div className="col-4">
                        {this.props.data.stats.map((el, index) => <p className='poke-info' key={index}>base-{el.stat.name}:{el.base_stat}</p> )}

                    </div>
                </div> :
                <div>
                    <p className='poke-info'>no pokemon, no details</p>
                </div>
        )
    }
}
export default Details