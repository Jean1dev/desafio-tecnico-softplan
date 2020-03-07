const INITIAL_STATE = {
    teste: 'teste'
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case '@hero/SAVE_HERO': 
            return {

            }
            
        default: return state
    }
}