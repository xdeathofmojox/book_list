import SearchResults from "./SearchResults";
import SearchForm from "./SearchForm";
import { Component } from "react"

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            has_results: true
        };
    }

    updateResults(results)
    {
        this.setState(results, results)
    }

    render() {
        return (
            <>
                <SearchForm />
                {this.state.has_results ? <SearchResults updateResults={this.updateResults}/> : ""}
            </>
        );
    }
}

export default Main;