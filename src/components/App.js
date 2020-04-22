import React, {Component} from "react";
import Artist from './Artist';
import Tracks from './Tracks';
import Search from './Search';

class App extends Component {

    state = { artist:'' ,tracks:[]};

    componentDidMount() {
        this.searchArtist('rahman');
    }

    searchArtist = (artistQuery) => {
        fetch(`https://spotify-api-wrapper.appspot.com/artist/${artistQuery}`)
        .then((response) =>  { return response.json()})
        .then((json)=> { 
            if(json.artists.total > 0){
                this.setState({artist:json.artists.items[0]});
                console.log(this.state.artist);
                fetch(`https://spotify-api-wrapper.appspot.com/artist/${this.state.artist.id}/top-tracks`)
                .then((response) => { return response.json()})
                .then((json)=> { this.setState({tracks:json.tracks})})
                .catch((error) => alert(error.message));
            }
            else {
                alert("Insert Correct Name");
            }
        })
        .catch((error)=> alert(error.message));
    }

   


    render() {
        console.log(this.state);
        return (
            <div>
            <h2> Music Master </h2> 
            <Search searchArtist = {this.searchArtist} />
            <Artist artist = {this.state.artist} />
            <Tracks tracks = {this.state.tracks} />
            </div>
        )
    }
}

export default App;