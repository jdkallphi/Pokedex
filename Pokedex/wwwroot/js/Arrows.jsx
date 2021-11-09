
class Arrows extends React.Component {
    constructor(props) {
        super(props)
    }
    handleClick = (ele) => {
        this.props.data(ele);
    }
    render() {
        return (
            <div className="arrows">
                <div className="arrow-h">
                    <div className="arrow-h__front face"></div>
                    <div className="arrow-h__back face"></div>
                    <div className="arrow-h__right face"></div>
                    <div className="arrow-h__left face"></div>
                    <div className="arrow-h__top face">
                        <a className="arrow-back" id="arrow-back" onClick={(e)=>this.handleClick(e)}>&#60;</a>
                        <a className="arrow-next" id="arrow-next" onClick={(e)=>this.handleClick(e)}>&#62;</a>
                    </div>
                    <div className="arrow-h__bottom face"></div>
                </div>
                <div className="arrow-v">
                    <div className="arrow-v__front face"></div>
                    <div className="arrow-v__back face"></div>
                    <div className="arrow-v__right face"></div>
                    <div className="arrow-v__left face"></div>
                    <div className="arrow-v__top face"></div>
                    <div className="arrow-v__bottom face"></div>
                </div>
            </div>
        )
    }
}

export default Arrows