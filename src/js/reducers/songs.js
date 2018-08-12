const initialState = {
    playlist_id: 0,
    songs: [],
    count: 0
};

const songs = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name
                }
            ]

        case 'SUBTRACT':
            return Object.assign({}, state, {
                count: state.count - 1
            });
        case 'SEARCH_SONGS': // ??
            debugger;
            let songs = action.songs;

            return Object.assign({}, state, {
                songs: songs,
                filter: action.filter
            });
        default:
            return state;
    }
};

export default songs
