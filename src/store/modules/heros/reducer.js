const INITIAL_STATE = {

}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case '@hero/SAVE_HERO': 
            return {

            }
            
        default: return state
    }
}