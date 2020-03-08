import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import DeleteIcon from '@material-ui/icons/Delete'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import VisibilityIcon from '@material-ui/icons/Visibility'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import { _removeHero } from '../../store/modules/heros/actions'

const useStyles = makeStyles(theme => ({
    inline: {
        display: 'inline',
    },
    item: {
        alignItems: 'flex-start',
        width: '100%',
    },
}))

export default function ListMyHeros({ hero }) {
    const classes = useStyles()
    const dispatch = useDispatch()

    function remove() {
        dispatch(_removeHero(hero))
    }

    return (
        <ListItem className={classes.item}>
            <ListItemAvatar>
                <Avatar alt={hero.nome} src={hero.nome.substring(0, 1)} />
            </ListItemAvatar>
            <ListItemText
                primary={hero.nome}
                secondary={
                    <>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary">
                            {hero.descricao}
                                    </Typography>
                        {" "}
                    </>
                }
            />
            
            <ListItemSecondaryAction >
                <IconButton data-testid="btnDelete" edge="end" aria-label="delete" onClick={remove}>
                    <DeleteIcon />
                </IconButton>

                <IconButton edge="end" aria-label="view">
                    <VisibilityIcon />
                </IconButton>
            </ListItemSecondaryAction>
            
        </ListItem>
    )
}
