import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import Song from './Song'
import { connect } from 'react-redux';
import SongsList from "../common/SongsList";
import {addPlaylist} from "../actions";

const Playlist = ({ data, onClick }) => (
    <li key={ data.id }>
        <Link to={"/playlist/" +data.id } onClick={ onClick }>{ data.name }</Link>
    </li>
)

const PlaylistTitle = ({ hide }) => (
    hide
    ? null
    : <h3>My playlists</h3>
)

class Playlists extends Component {
    constructor(props) {
        super(props);

        let playlist_id;
        debugger;
        if (props.match) {
            playlist_id = props.match.params.id;
        }

        let hideTitle = false;
        if (props.hideTitle) {
            hideTitle = props.hideTitle;
        }

        debugger;

        this.state = {
            playlists: [],
            playlist_id,
            hideTitle: hideTitle,
            ol_css_class: props.olCssClass
        }
    }

    componentWillUpdate() {

        //
        // if (playlist_id) {
        //     this.setState({
        //         playlist_id
        //     });
        // }
    }

    componentDidUpdate() {
        window.localStorage

        let playlists = [];

        playlists = store.getState().playlists

        localStorage.setItem("playlists", JSON.stringify(playlists));

        debugger;
        let playlist_id = 0;

        if (this.props.match) {
            playlist_id = this.props.match.params.id;
        }

        console.log("Jus tnow REAL ONE MUST BE: "+playlist_id);
    }

    componentDidMount() {
        if (localStorage) {
            if (!store.getState().playlists.length) {
                let playlists = localStorage.getItem("playlists");
                playlists = JSON.parse(playlists);

                if (playlists) {
                    playlists.map(playlist => (
                        store.dispatch(addPlaylist(playlist))
                    ));
                }
            }
        }
    }

    onClick() {
        let playlist_id;
        if (props.match) {
            playlist_id = props.match.params.id;
        }
    }

    render() {
        let playlists = store.getState().playlists;

        if (!isNaN(this.state.playlist_id)) {
            return (
                <div>
                    <h1>Конкретен playlist e sega { this.state.playlist_id }</h1>
                    <SongsList listType="in_playlist" />
                    <Link to={ "/create-playlist/" + this.state.playlist_id }>Modify playlist content</Link>
                </div>
            )
        }

        if (!playlists.length) {
            return (
                <div>No lists found.</div>
            )
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <PlaylistTitle hide={ this.state.hideTitle } />
                        <ol className={ this.state.ol_css_class }>
                            {playlists.map(playlist =>
                                <Playlist
                                    key={playlist.id}
                                    data={playlist}
                                    onClick={ this.onClick }
                                />
                            )}
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

/*
Playlists.propTypes = {
    songs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired
}*/


function mapStateToProps(state, ownProps) {
    return {
        playlists: {...state.playlists}
    };
}

export default connect(mapStateToProps)(Playlists);