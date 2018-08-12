import { combineReducers } from 'redux'
import playlists from './playlists'
import songs from './songs'

export default combineReducers({
    playlists,
    songs
})