import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import useForm from '../../hooks/useForm'
import Avatar from '@material-ui/core/Avatar'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { _saveHero } from '../../store/modules/heros/actions'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
const useStyles = makeStyles(theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    avatar: {
        height: '150px',
        width: '150px'
    },
    avatarContainer: {
        marginTop: '10px',
        marginBottom: '30px',
        margin: '0 auto',
        width: '35%'
    }
}))

export default function EditHero({ location }) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { state: hero } = location
    const [{ values }, handleChange, handleSubmit] = useForm()
    const [foto, setFoto] = useState("https://avatarfiles.alphacoders.com/153/153179.png")

    function submitForm() {
        dispatch(_saveHero(values))
        toast.success('Personagem alterado')
    }

    return (
        <>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        Editar personagem
                    </Typography>

                    <div className={classes.avatarContainer}>
                        <Avatar className={classes.avatar} alt={hero.nome} src={foto} />
                        <AddAPhotoIcon />
                    </div>
                    <form className={classes.form} onSubmit={handleSubmit(submitForm)}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="nome"
                                    name="nome"
                                    label="nome"
                                    fullWidth
                                    autoComplete="fname"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="sobrenome"
                                    name="sobrenome"
                                    label="Sobrenome"
                                    fullWidth
                                    autoComplete="lname"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="descricao"
                                    name="descricao"
                                    label="Descricao"
                                    fullWidth
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                        <div className={classes.buttons}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                onClick={() => { }}
                                className={classes.button}>
                                Ok
                        </Button>
                        </div>
                    </form>
                </Paper>
            </main>
        </>
    )
}
