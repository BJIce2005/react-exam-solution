const initialState = {
    playlists: []
};

const playlists = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD':
            debugger;
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
        case 'LOAD_SONGS':
            debugger;


            return Object.assign({}, state, {
                songs: action.songs
            });
        case 'TOP_SONGS':
            return Object.assign({}, state, {
                songs: action.songs
            });
        case 'SEARCH_SONGS__':
            let songs = action.songs;

            songs.splice(3, 2);

            return Object.assign({}, state, {
                songs: songs
            });
        default:
            return state;
    }
};

export default playlists
