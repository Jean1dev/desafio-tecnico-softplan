import React from 'react'
import { render } from '@testing-library/react'
import Header from './index'

describe('testes do componente Header', () => {
    it('deve renderizar corretamente', () => {
        const { getByTestId } = render(<Header/>)
        expect(getByTestId('img'))
        expect(getByTestId('side'))
    })
})