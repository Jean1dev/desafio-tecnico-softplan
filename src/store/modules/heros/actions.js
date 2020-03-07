function saveHero(hero) {
    return {
        type: '@hero/SAVE_HERO',
        payload: hero
    }
}

function removeHero(hero) {
    return {
        type: '@hero/DELETE_HERO',
        payload: hero.id
    }
}

export function _saveHero(hero) {
    return dispatch => dispatch(saveHero(hero))
}

export function _removeHero(hero) {
    return dispatch => dispatch(removeHero(hero))
}