import Details from "/js/Details.jsx"
import RightButton from "/js/RightButton.jsx"
import Wheel from "/js/Wheel.jsx"
import PlateLeft from "/js/PlateLeft.jsx"
import ScreenLeft from "/js/ScreenLeft.jsx"
import Arrows from "/js/Arrows.jsx"

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 'search pokemon',
            searchValue: '',
            active: false,
            PokemonId: 1,
            pokemonDetails: null,
            filterePokemonIds: []

        };
        this.timer = null;
        this.handleCoverClick = this.handleCoverClick.bind(this);
    }

    updateData() {
        fetch('/limitedpokemonlist/0/151/' + this.state.searchValue)
            .then(response => response.json())
            .then(body => {
                this.setState({ filterePokemonIds: body.map(x => x.pokedexIndex) });
                this.setState({ searchValue: '' })
                this.setState({ PokemonId: this.state.filterePokemonIds[0] })
                this.updateDetails();
            })
            .catch(error => console.error('Error', error));
    }

    updateDetails() {
        fetch('/pokemondetails/' + this.state.PokemonId)
            .then(response => response.json())
            .then(body => {
                this.setState({ pokemonDetails: body });
            })
            .then(x => {
                this.setState({ isLoaded: true });
            }
            )
            .catch(error => console.error('Error', error));
    }
    componentDidMount() {
        this.setState({ isLoaded: false });

        this.updateData();
    }

    cycleList(e) {
        if (e.currentTarget.id == 'arrow-next') { this.state.filterePokemonIds.push(this.state.filterePokemonIds.shift()); }
        else if (e.currentTarget.id == 'arrow-back') { this.state.filterePokemonIds.unshift(this.state.filterePokemonIds.pop()); }
        this.setState({ PokemonId: this.state.filterePokemonIds[0] }, () => {
            this.updateDetails();
        });

    }
    handleChange(e) {
        // Clears running timer and starts a new one each time the user types
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.setState({ searchValue: this.myinput.value }, () => this.updateData());

        }, 1000);
    }
    handleCoverClick(e) {

        if (e.target.className != 'button-large__top face button-large-input') {
            this.setState({ active: !this.state.active });
            var pokedex = document.getElementById("pokedex");
            var pokemonimg = document.getElementById("pokemonimg");
            if (!pokedex.classList.contains('pokedex-transform-normal')) {
                setTimeout(() => { pokemonimg.classList.toggle('pokemon'); pokemonimg.classList.toggle('pokemon-out'); }, 500);
            }
        }
    };

    render() {
        const { isLoaded, data } = this.state;
        return (
            isLoaded ?
                <div>
                    <div id="pokedex" className="pokedex pokedex-transform-normal">
                        <div className="shadows">
                            <div className="shadow-1"></div>
                            <div id="pokedex-shadow" className={this.state.active ? 'shadow-2' : 'shadow-2 is-shadow-hidden'}></div>
                        </div>
                        {Array.from({ length: 3 }).map((el, index) => <PlateLeft key={index} data={index + 1}></PlateLeft>)}

                        <div className="wheel flex face">
                            {Array.from({ length: 4 }).map((el, index) => <Wheel key={index}></Wheel>)}

                        </div>
                        <div id="pokedex-cover" onClick={(e) => this.handleCoverClick(e)} ref={(ele) => this.ele = ele} className={this.state.active ? 'cover' : 'cover is-pokedex-open'}>
                            <div className="ar1">
                                <div className="ar1__front face"></div>
                                <div className="ar1__back face"></div>
                                <div className="ar1__right face"></div>
                                <div className="ar1__left face"></div>
                                <div className="ar1__top face">
                                    <div className="screen-right">
                                        <div className={this.state.active ? 'pokemon-author' : 'pokemon-author is-pokedex-hidden'}>
                                            <Details data={this.state.pokemonDetails} handleClick={this.handleClick} />
                                        </div>
                                    </div>
                                    <div className="buttons-right-1" id="buttons-right-1">
                                        {Array.from({ length: 12 }).map((el, index) => <RightButton key={index}></RightButton>)}

                                    </div>
                                    <div className="buttons-right-2">
                                        <RightButton data={"white"}></RightButton>
                                        <RightButton data={"white"}></RightButton>
                                        <RightButton data={"yellow"}></RightButton>
                                    </div>
                                    <div className="buttons-right-3">
                                        <div className="button-large">
                                            <div className="button-large__front face"></div>
                                            <div className="button-large__back face"></div>
                                            <div className="button-large__right face"></div>
                                            <div className="button-large__left face"></div>
                                            <input className="button-large__top face button-large-input" placeholder={this.state.value} onChange={(e) => { this.handleChange(e) }} ref={(input) => this.myinput = input} />
                                            <div className="button-large__bottom face"></div>
                                        </div>
                                        <div className="button-large">
                                            <div className="button-large__front face"></div>
                                            <div className="button-large__back face"></div>
                                            <div className="button-large__right face"></div>
                                            <div className="button-large__left face"></div>
                                            <div className="button-large__top face"></div>
                                            <div className="button-large__bottom face"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ar1__bottom face"></div>
                            </div>
                            <div className="ar2">
                                <div className="ar2__front face"></div>
                                <div className="ar2__back face"></div>
                                <div className="ar2__right face"></div>
                                <div className="ar2__left face"></div>
                                <div className="ar2__top face"></div>
                                <div className="ar2__bottom face"></div>
                            </div>
                        </div>
                        <ScreenLeft data={this.state}></ScreenLeft>
                        <Arrows data={(e) => this.cycleList(e)}></Arrows>
                        <div className="led" id="BlueLed"></div>
                        <div className="led-a"></div>
                        <div className="led-b"></div>
                        <div className="led-c"></div>
                    </div>
                    <div>

                    </div>
                </div>
                : <div></div>
        )
    }
}

ReactDOM.render(
    <>
        <Search
            key="commentbox"
            url="/pokemonlist"
        />
    </>,
    document.getElementById('content'),
);