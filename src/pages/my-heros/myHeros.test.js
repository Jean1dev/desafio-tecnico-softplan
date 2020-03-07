import React from 'react'
import { render } from '@testing-library/react'
import { useSelector } from 'react-redux'
import MyHeros from './index'

jest.mock('react-redux')

describe('myHeros test', () => {
    it('ao carregar componente deve ter herois editados', () => {
        useSelector.mockImplementation(callback => callback({
            _hero: {
                list: [
                    {
                        id: 4,
                        nome: 'SPIDER-HOMEM',
                        sobrenome: 'SPIDER-HOMEM',
                        descricao: 'O ESPETACULAR MIRANHA'
                    },
                    {
                        id: 1,
                        nome: 'O COISA',
                        sobrenome: 'COISADO',
                        descricao: 'SOU O HOMEM COISA DE PEDRA'
                    }
                ]
            }
        }))

        const { getByTestId, getByText } = render(<MyHeros />)
        expect(getByTestId('list')).toContainElement(getByText('O ESPETACULAR MIRANHA'))
        expect(getByTestId('list')).toContainElement(getByText('SOU O HOMEM COISA DE PEDRA'))
    })
})