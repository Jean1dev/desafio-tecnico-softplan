import reducer from './reducer'
import { dispatchSearch } from './action'

const INITAL_STATE = {
    filter: null,
}

describe('deve testar a producao de novos estados de SEARCH', () => {
    it('type DISPATCH_SEARCH', () => {
        const state = reducer(INITAL_STATE, dispatchSearch('filtro'))
        
        expect(state).toStrictEqual({
            filter: 'filtro'
        })
    })
})