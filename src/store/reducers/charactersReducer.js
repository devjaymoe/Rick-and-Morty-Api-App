const initialState = {
    characters: [{
        id: 242,
        name: "Mr. Meeseeks",
        status: "unknown",
        species: "Humanoid",
        type: "Meeseeks",
        gender: "Male",
        origin: {name: "Mr. Meeseeks Box", url: "https://rickandmortyapi.com/api/location/53"},
        location: {name: "Blips and Chitz", url: "https://rickandmortyapi.com/api/location/67"},
        image: "https://rickandmortyapi.com/api/character/avatar/242.jpeg"
    }],
    isFetching: false,
    error: ''
};

export const charactersReducer = ( state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CHARACTERS_START':
            return {
                ...state,
                isFetching: true
            };
        case 'FETCH_CHARACTERS_SUCCESS':
            // console.log(action.payload)
            return {
                ...state,
                isFetching: false,
                characters: action.payload,
                error: ''
            };
        case 'FETCH_CHARACTERS_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: 'Character not found!'
            };
        default:
            return state;
    }
};