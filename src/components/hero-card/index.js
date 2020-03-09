import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import AssignmentIcon from '@material-ui/icons/Assignment'
import EditIcon from '@material-ui/icons/Edit'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import history from '../../services/history'
import moment from 'moment'
import { getCredentialsString } from '../../services/api'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 300,
    marginLeft: '30px',
    marginTop: '20px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}))

export default function HeroCard({ hero }) {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label={hero.nome} className={classes.avatar}>
            {hero.nome.substring(0, 1)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={hero.nome}
        subheader={moment(hero.ultimaModificacao).format("dddd, MMMM Do YYYY")}
      />
      <CardMedia
        className={classes.media}
        image={hero.img}
        title={hero.nome}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {`${hero.descricao.substring(0, 32)}....`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => history.push('hero-details', hero)}>
          <AssignmentIcon />
        </IconButton>
        <IconButton aria-label="share" onClick={() => history.push('edit-hero', hero)}>
          <EditIcon/>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Descricao:</Typography>
          <Typography paragraph>
            {hero.descricao}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
