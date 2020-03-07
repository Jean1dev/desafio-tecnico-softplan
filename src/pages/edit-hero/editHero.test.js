import React from 'react'
import { useDispatch } from 'react-redux'
import { _saveHero } from '../../store/modules/heros/actions'
import { render, fireEvent } from '@testing-library/react'
import EditHero from './index'

jest.mock('react-redux')

describe('deve testar pagina de edicao de heroi', () => {
    it('deve alterar um hero', async () => {
        const location = {
            state: {
                nome: 'MIRANHA'
            }
        }
        const dispatch = jest.fn()
        useDispatch.mockReturnValue(dispatch)
        // TODO: PCAUSA DO TEXTFILE NAO DA PRA ALTERAR O CAMPO VIA FIREENVET - ARRUMAR
        const { getByTestId, debug } = render(<EditHero location={location} />)
        console.log(getByTestId('txtNome').children) 
        // // debug()
        // fireEvent.change(getByPlaceholderText('txtNome'), { target: { value: 'Jean' } })
        // fireEvent.change(getByTestId('txtSobrenome'), { target: { value: 'Fernandes' } })
        // fireEvent.change(getByTestId('txtDescricao'), { target: { value: 'Descricao' } })

        // expect(getByTestId('txtNome')).toHaveValue('Jean')
        fireEvent.submit(getByTestId('form'))
        expect(dispatch).toHaveBeenCalled()
        // expect(dispatch).toHaveBeenCalledWith(_saveHero({}))
    })
})