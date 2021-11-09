import PokemonIdAndName from "/js/PokemonIdAndName.jsx"
import PokemonImage from "/js/PokemonImage.jsx"

class ScreenLeft extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div>
                <div className="screen-left">
                    <div className="screen-left__front face"></div>
                    <div className="screen-left__back face"></div>
                    <div className="screen-left__right face"></div>
                    <div className="screen-left__left face"></div>
                    <div className="screen-left__top face">
                        <PokemonImage data={this.props.data}></PokemonImage>
                    </div>
                    <div className="screen-left__bottom face"></div>
                </div>
                <div className="screen-left-2">
                    <div className="screen-left-2__front face"></div>
                    <div className="screen-left-2__back face"></div>
                    <div className="screen-left-2__right face"></div>
                    <div className="screen-left-2__left face"></div>
                    <div className="screen-left-2__top face">
                        <PokemonIdAndName data={this.props.data}></PokemonIdAndName>
                    </div>
                    <div className="screen-left-2__bottom face"></div>
                </div>
            </div>

        )
    }
}

export default ScreenLeft