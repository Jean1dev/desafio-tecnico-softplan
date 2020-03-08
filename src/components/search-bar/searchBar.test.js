import React from 'react'
import { useDispatch } from 'react-redux'
import { render, fireEvent } from '@testing-library/react'
import SearchBar from './index'

jest.mock('react-redux')

describe('testes do componente de search-bar', () => {
    it('deve renderizar o componente corretamente', () => {
        useDispatch.mockReturnValue(jest.fn())
        const { getByPlaceholderText } = render(<SearchBar/>)
        expect(getByPlaceholderText('Buscar'))
    })

    it('ao clicar no buscar deve disparar a consulta', () => {
        const dispatch = jest.fn()
        useDispatch.mockReturnValue(dispatch)
        const { getByTestId } = render(<SearchBar/>)
        fireEvent.click(getByTestId('btnSearch'))
        expect(dispatch).toHaveBeenCalled()
    })
})