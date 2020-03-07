function dispatchSearch(filter) {
    return {
        type: '@search/DISPATCH_SEARCH',
        payload: filter
    }
}

export function _dispatchSearch(filter) {
    return dispatch => {
        dispatch(dispatchSearch(filter))
    }
}