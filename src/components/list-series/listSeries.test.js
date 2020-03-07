import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import MockAdapter from 'axios-mock-adapter'
import api from '../../services/api'
import ListSeries from './index'

const apiMock = new MockAdapter(api)

describe('testes do componente listSeries', () => {
    it('deve renderizar o componente corretamente', async () => {

        const response = {
            data: {
                results: [{
                    id: 1,
                    title: 'titulo',
                    description: 'descricao',
                    startYear: 'inicio',
                    endYear: 'fim',
                    type: 'tipo'
                }]
            }
        }

        const hero = {
            id: 1
        }

        apiMock.onGet('series').reply(200, response)
        const { getByText, getByTestId } = render(<ListSeries hero={hero} />)
        waitForElement(() => {
            //expect(getByTestId('table')).toContainElement(getByText('descricao'))
            return
        })
    })
})