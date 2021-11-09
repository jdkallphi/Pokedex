
class RightButton extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div className='button-right'>
                <div className="button-right__front button-right__front--white face"></div>

                <div className={"button-right__front button-right__front--" + this.props.data+" face"}></div>
                <div className={"button-right__back button-right__back--" + this.props.data+" face"}></div>
                <div className={"button-right__left button-right__left--" + this.props.data+" face"}></div>
                <div className={"button-right__right button-right__right--" + this.props.data+" face"}></div>
                <div className={"button-right__top button-right__top--" + this.props.data+" face"}></div>
                <div className={"button-right__bottom button-right__bottom--" + this.props.data+" face"}></div>
            </div>
        )
    }
}

export default RightButton