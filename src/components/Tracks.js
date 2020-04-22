import React, { Component } from "react";

class Tracks extends Component {

    state = {playing: false,playingAudio:null,playingUrl:null};
    playAudio = (previewUrl) => () => {
        const audio = new Audio(previewUrl);
        if(!this.state.playing){
            audio.play();
            this.setState({playing:true,playingAudio:audio,playingUrl:previewUrl});
        }
        else {
            this.state.playingAudio.pause();
            if(this.state.playingUrl===previewUrl){
                this.setState({playing:false});
            }
            else {
                audio.play();
                this.setState({playing:true,playingAudio:audio,playingUrl:previewUrl});
            }
            
        }
    }

    trackIcon = (track) => {
        if(this.state.playing && (this.state.playingUrl === track.preview_url))
            return <span>| |</span>;
        return <span>&#9654;</span>;
    }

    render() {
        const {tracks} = this.props;
        return(
            <div>
                {
                    tracks.map( (track) => {
                        const {id,name,album,preview_url} = track;
                        return (
                            <div key={id} onClick={this.playAudio(preview_url)} className='track'>
                                <img src = {album.images[0].url} alt="track-image" className="track-image" />
                                <p className='track-text'>{name}</p>
                                <div className='track-icon' style={{color:'white'}}>{this.trackIcon(track)}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Tracks;