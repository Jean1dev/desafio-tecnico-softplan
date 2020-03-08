import React from 'react'
import { render } from '@testing-library/react'
import HeroCard from './index'

describe('testes do compoenente hero card', () => {
    it('deve renderizar corretamente', () => {
        const hero = {
            nome: 'magneto',
            avatar: 'no image',
            ultimaModificacao: new Date(),
            descricao: 'vilao'
        }

        const { getByText } = render(<HeroCard hero={hero}/>)
        expect(getByText('magneto'))
        expect(getByText('vilao....'))
    })
})