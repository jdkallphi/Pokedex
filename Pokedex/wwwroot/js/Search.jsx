import Pagination from "/js/Pagination.jsx"

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 'search pokemon',
            searchValue: ''
        };
        this.timer = null;
    }
    handleChange(e) {
        // Clears running timer and starts a new one each time the user types
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.setState({ searchValue: this.myinput.value })

        }, 1000);
    }

    render() {
        return (
            <div>
                <h1>PokeDex</h1>

                <div>
                    <input placeholder={this.state.value} onChange={(e) => { this.handleChange(e) }} ref={(input) => this.myinput = input} />
                </div>
                <div>
                    <Pagination
                        data={this.props.data}
                        title="PokeDex"
                        pageLimit={5}
                        dataLimit={12}
                        searchTerm={this.state.searchValue}
                        handleClick={this.props.handleClick}
                    />
                </div>
            </div>
        )
    }
}

export default Search