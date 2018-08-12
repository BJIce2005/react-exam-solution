let nextPlaylistId = 1;

export const addPlaylist = playlist => ({
    type: 'ADD',
    id: nextPlaylistId++,
    name: playlist.name
})

export const searchSongs = (songs, filter) => ({
    type: 'SEARCH_SONGS',
    songs: songs,
    filter: filter
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})
