import React from 'react'
import { render } from '@testing-library/react'
import Pagination from './index'

describe('testes do componente de paginacao', () => {
    it('deve renderizar o componente com 4 paginas corretamente', () => {
        const rowsPerPage = 10, totalRows = 50, pageActive = 1, onPageChange = jest.fn()
        const { getByText } = render(
            <Pagination 
                rowsPerPage={rowsPerPage} 
                totalRows={totalRows}
                pageActive={pageActive}
                onPageChange={onPageChange}/>
        )

        expect(getByText('1'))
        expect(getByText('2'))
        expect(getByText('3'))
        expect(getByText('4'))
    })
})