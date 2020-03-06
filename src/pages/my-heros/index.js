import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from './styles'
import List from '@material-ui/core/List'
import ListItem from '../../components/item-list-my-heros'

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    }
}))

export default function MyHeros() {
    const classes = useStyles()

    return (
        <Container>
            <Paper className={classes.paper}>
                <List className={classes.list}>
                    <ListItem/>
                </List>
            </Paper>
        </Container>
    )
}
