import React,{ Component } from "react";


class Search extends Component {
    state = {artistQuery:''};

    searchQuery = (event) => {
        this.setState({ artistQuery:event.target.value });
    }

    handleKeyPress = (event) => {
        if (event.key === "Enter") {
            this.props.searchArtist(this.state.artistQuery);
        }
    }

    render() {
        return(
            <div>
            <input 
            placeholder="Search Artist"
            onChange={this.searchQuery}
            onKeyPress={this.handleKeyPress}
            /> 
            <button onClick={this.props.searchArtist}>Search</button>
            </div>
        )
    }
}


export default Search;