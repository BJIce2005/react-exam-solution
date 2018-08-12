import React from 'react';
import { Link } from 'react-router-dom';
import { createStore } from 'redux';
import playlists from '../reducers/playlists';
import songs from '../data/songs';
import Song from "../components/Song";

const store = createStore(playlists);


class SongsList extends React.Component {
  constructor(props) {
    super(props);

    let _songs = songs;
    if (this.props.songs) {
        _songs = this.props.songs;
    }

    debugger;
    this.state = {
        songs: _songs,
        isLoading: true,
        listType: props.listType
    };

    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
  }

  add() {
    const action = {
      type: 'ADD',
    };

    store.dispatch(action);
  }

  subtract() {
    const action = {
      type: 'SUBTRACT'
    };

      store.dispatch(action);
  }

  topSongs() {
    console.log('sdfsdf');

    const action = {
      type: 'TOP_SONGS'
    };

    store.dispatch(action);
  }

  search() {
    console.log('sdfsdf');

    const action = {
        type: 'SEARCH_SONGS'
    };

    store.dispatch(action);
  }

  topList() {
      // rank
      console.log('#@$>@!>$');
  }

  onSubmit(val){
      debugger;
  }

  componentDidMount() {
    /*const getSongs = () => {
      return new Promise((resolve, reject) => {
        fetch(songs)
          .then(data => console.log(Object.values(data))) // resolve(Object.values(data)))
          .catch(error => reject(error));
        });
      }*/

    let _songs = [];
      if (this.state.songs) {
          _songs - this.state.songs;
      }

      let loadedSongs = _songs;

      if (this.state.listType == 'top5') {
          loadedSongs.sort((song1, song2) => {
              if (song1.rank > song2.rank) {
                  return 1;
              }
              if (song1.rank < song2.rank) {
                  return -1;
              }
              return 0;
          });

          loadedSongs = loadedSongs.slice(0 ,3);
      }

      if (this.state.listType == 'in_playlist') {
          debugger;
          //loadedSongs.filter(
            //  loadedSong => loadedSong.name
          //)

      }

      this.setState({ songs: loadedSongs, isLoading: false });
  }

  componentWillUpdate(nextProps, nextState) {
      /*this.state = {
          songs: nextProps.songs
      };*/
  }

    componentDidUpdate() {
        debugger;
    }


    render() {
        // const { songs, count } = getState();
        debugger;
        let songs_for_render = songs; //[];

        /*if (this.state.songs.length) {
            songs_for_render = this.state.songs;
        }*/

        if (store.getState().songs) {
            songs_for_render = store.getState().songs;
        }

        if (this.state.filter) {
            songs_for_render = songs_for_render
                .filter(song_for_render => song_for_render.title.indexOf(filter) >= 0);
        }

        return (
          <div>
            <ul className={"songs " + this.state.listType}>
              { songs_for_render.map( song =>
                  <Song
                      key={ song.id }
                      song={ song }
                      top={ this.state.listType }
                  />
                )
              }
            </ul>
          </div>
        );
  }
}

export default SongsList;