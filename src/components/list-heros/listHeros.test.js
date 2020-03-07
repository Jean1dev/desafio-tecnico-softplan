import React from 'react'
// import { useSelector } from 'react-redux'
import { render, waitForElement } from '@testing-library/react'
import MockAdapter from 'axios-mock-adapter'
import api from '../../services/api'
import ListHeros from './index'

const apiMock = new MockAdapter(api)
jest.mock('react-redux')

describe('Testes do componente lisHeros', () => {
    it('deve renderizar os cards no componente',  async () => {
        const response = {
            data: {
                total: 1000,
                results: [{
                    id: 1,
                    name: 'wolverine',
                    description: 'description',
                    thumbnail: { path: 'url' },
                    modified: new Date(),
                    series: [],
                    urls: []
                }]
            }
        }
        apiMock.onGet('characters').reply(200, response)

        // useSelector.mockImplementation(callback => callback({
        //     search: {
        //         filter: 'teste'
        //     }
        // }))

        const { getByTestId, getByText, debug } = render(<ListHeros/>)
        waitForElement(() => {
            //expect(getByTestId('grid')).toContainElement(getByText('wolverine'))
            debug()
            return
        })
        
    })
})