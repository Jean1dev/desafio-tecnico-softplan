const INITIAL_STATE = {
    list: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case '@hero/SAVE_HERO':
            let lista = state.list.concat({
                id: state.list.length,
                nome: action.payload.nome,
                sobrenome: action.payload.sobrenome,
                descricao: action.payload.descricao
            })
            
            return {
                list: lista
            }

        case '@hero/DELETE_HERO':
            return {
                list: state.list.filter(i => i.id != action.payload)
            }

        default: return state
    }
}