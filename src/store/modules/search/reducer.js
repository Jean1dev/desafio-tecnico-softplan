const INITAL_STATE = {
    filter: null,
}

export default function reducer(state = INITAL_STATE, action) {
    switch (action.type) {
        case '@search/DISPATCH_SEARCH':
            return {
                filter: action.payload
            }

        default: 
            return state
    }
}