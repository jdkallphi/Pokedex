
class PlateLeft extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"al"+this.props.data}>
                <div className={"al" + this.props.data+"__front face"}></div>
                <div className={"al" + this.props.data+"__back face"}></div>
                <div className={"al" + this.props.data+"__right face"}></div>
                <div className={"al" + this.props.data+"__left face"}></div>
                <div className={"al" + this.props.data+"__top face"}></div>
                <div className={"al" + this.props.data +"__bottom face"}></div>
            </div>
        )
    }
}

export default PlateLeft