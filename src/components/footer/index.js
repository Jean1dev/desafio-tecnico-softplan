import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Container } from './styles'

export default function Footer() {
    return (
        <Container>
            <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}{ new Date().getFullYear() }
          
            Jeanluca Fernandes Pereira -- 
            {'.'}
            </Typography>

        </Container>
    )
}
