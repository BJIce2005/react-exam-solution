import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Control } from 'react-redux-form';
import SongsList from './SongsList';
// import Playlist from '../components/Playlists';
import songs from '../data/songs';

import { addPlaylist, searchSongs } from '../actions/index';
import Playlists from "../components/Playlists";

export default class CreatePlaylist extends Component {
    constructor(props) {
        super(props);

        let playlist_id = 0;
        if (props.match) {
            playlist_id = props.match.params.id;
        }

        this.state = {
            playlists: [],
            isLoading: true,
            songs: songs,
            playlist_id
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();

        const data = new FormData(event.target);

        store.dispatch(addPlaylist({name: data.get('playlist.name')}))
    }

    onSearch(event) {
        event.preventDefault();
debugger;

        let filter = event.target.elements.namedItem('filter.name').value;

        let filteredSongs = this.state.songs;

        filteredSongs = filteredSongs
             .filter(filteredSong => filteredSong.title.indexOf(filter) >= 0);

        store.dispatch(searchSongs({
            songs: filteredSongs,
            filter
        }));

        this.setState({
            songs: filteredSongs,
            filter
        })
    }

    addPlaylist() {
        //this.setState({ playlists: this.state.playlists });
    }

    render() {
        if (this.state.playlist_id) {
            return (
                <div>
                    <div className="row">
                        <div className="col-12">
                            <div className="header-container">
                                <form onSubmit={ this.onSearch }>
                                    <Control.text model="filter.name" id="filter.name"/>
                                    <Control.button model="filter" id="filter">Search Song</Control.button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-12">
                            <div className="body-container">
                                <SongsList songs={ this.state.songs } filter={this.state.filter} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div className="header-container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="create_list">Create Playlist</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={ this.onSubmit } className="playlist_frm">
                            <div className="col-4">
                                <div className="form-group">
                                    <label htmlFor="user.name">Name:</label>
                                    <Control.text model="playlist.name" id="playlist.name" className="form-control"/>
                                </div>
                                <Control.button
                                    model="playlist"
                                    id="playlist"
                                    className="btn btn-primary">Create</Control.button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
