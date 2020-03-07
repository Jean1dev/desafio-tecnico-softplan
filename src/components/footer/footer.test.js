import React from 'react'
import { render } from '@testing-library/react'
import Footer from './index'

describe('teste do componente footer', () => {
    it('deve renderizar corretamente', () => {
        const { getByTestId } = render(<Footer/>)
        expect(getByTestId('copyrigth'))
    })
})