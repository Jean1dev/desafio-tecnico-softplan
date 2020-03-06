import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Content } from './styles'

export default function header() {
    return (
        <Container>
            <Content>
                <nav>
                    <Link to="/">
                    <img src="https://www.userlogos.org/files/logos/danger83/marvel.png" alt="Icone Massa"></img>
                    </Link>
                </nav>

                <aside>

                </aside>
            </Content>
        </Container>
    )
}
