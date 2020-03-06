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

const useStyles = makeStyles(theme => ({
    inline: {
        display: 'inline',
    },
    item: {
        alignItems: 'flex-start',
        width: '100%',
    },
}))

export default function ListMyHeros() {
    const classes = useStyles()

    return (
        <ListItem className={classes.item}>
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
                primary="Brunch this weekend?"
                secondary={
                    <>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary">
                            Ali Connors
                                    </Typography>
                        {" "}
                    </>
                }
            />
            
            <ListItemSecondaryAction >
                <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                </IconButton>

                <IconButton edge="end" aria-label="view">
                    <VisibilityIcon />
                </IconButton>
            </ListItemSecondaryAction>
            
        </ListItem>
    )
}
