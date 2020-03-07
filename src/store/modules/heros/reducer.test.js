import reducer from './reducer'
import { saveHero, removeHero } from './actions'

const INITIAL_STATE = {
    list: []
}

describe('deve testar a producao de novos estados de HEROS', () => {
    it('type SAVE_HERO', () => {
        const hero = {
            id: 0,
            nome: 'heroi',
            sobrenome: 'super heroi',
            descricao: 'master heroi'
        }

        const expected = {
            list: [ hero ]
        }
        const state = reducer(INITIAL_STATE, saveHero(hero))
        
        expect(state).toStrictEqual(expected)
    })

    it('DELETE_HERO', () => {
        const hero = {
            id: 0,
            nome: 'heroi',
            sobrenome: 'super heroi',
            descricao: 'master heroi'
        }

        const stateInital = {
            list: [ hero ]
        }
        const state = reducer(stateInital, removeHero(hero))
        
        expect(state).toStrictEqual({
            list: []
        })
    })
})