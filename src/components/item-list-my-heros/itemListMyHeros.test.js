import React from 'react'
import { useDispatch } from 'react-redux'
import { render, fireEvent } from '@testing-library/react'
import ItemList from './index'

jest.mock('react-redux')

describe('testes do componente itemListHeros', () => {
    it('deve renderizar o componente', () => {
        const hero = {
            nome: 'magneto',
            avatar: 'no image',
            ultimaModificacao: new Date(),
            descricao: 'vilao'
        }

        const dispatch = jest.fn()
        useDispatch.mockReturnValue(dispatch)

        const { getByText } = render(<ItemList hero={hero} />)
        expect(getByText('magneto'))
    })

    it('deve disparar o dispatch ao clicar no icone de remover', () => {
        const hero = {
            nome: 'magneto',
            avatar: 'no image',
            ultimaModificacao: new Date(),
            descricao: 'vilao'
        }
        const dispatch = jest.fn()
        useDispatch.mockReturnValue(dispatch)

        const { getByTestId } = render(<ItemList hero={hero} />)
        fireEvent.click(getByTestId('btnDelete'))
        expect(dispatch).toHaveBeenCalled()
    })
})