import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import ListSeries from '../../components/list-series'
import { Container } from './styles'

const urlImg = 'https://wallpaperplay.com/walls/full/1/e/f/235048.jpg'

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    wallpaper: {
        backgroundImage: `url(${urlImg})`
    },
    center: {
        marginLeft: '50%'
    },
    spacer: {
        marginTop: '10px'
    },
    avatar: {
        height: '150px',
        width: '150px'
    }
}))

export default function HeroDetails({ match }) {
    const classes = useStyles()
    const id = match.params[0]

    return (
        <Container>
            <Paper className={classes.paper}>
                <div className={classes.wallpaper}>
                    <Avatar className={classes.avatar} alt="Cindy Baker" src="https://avatarfiles.alphacoders.com/153/153179.png" />
                    
                </div>
            </Paper>
            <div className={classes.spacer}></div>
            <Paper className={classes.paper}>
                <ListSeries />
            </Paper>
        </Container>
    );
}
