import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Container } from './styles'

export default function Footer() {
    return (
        <Container data-testid="copyrigth">
            <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}{ new Date().getFullYear() }
          
            Jeanluca Fernandes Pereira -- 
            {'.'}
            </Typography>

        </Container>
    )
}
