class Details extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: null
        };
    }
    handleClick = () => {
        this.props.handleClick(this.props.id);

    }
    updateData() {
        this.setState({ isLoaded: false });
        fetch('/pokemondetails/' + this.props.data)
            .then(response => response.json())
            .then(body => {
                this.setState({ data: body }, () => {});
            })
            .then(x => {
                this.setState({ isLoaded: true });

            })
            .catch(error => console.error('Error', error));
    }
    componentDidMount() {
        this.updateData();}
    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.updateData();
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
                        <p>height: {this.props.data.height / 10} m</p>
                        <p>weight: {this.props.data.weight / 10} kg</p>
                    </div>
                </div> :
                <div>
                    <h1>empty subdetails</h1>
                </div>
        )
    }
}
export default Details