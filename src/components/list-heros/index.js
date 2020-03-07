import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from './styles'
import CardHero from '../hero-card'
import CircularProgress from '@material-ui/core/CircularProgress'
import SearchBar from '../search-bar'
import Pagination from '../pagination'
import api, { getCredentials } from '../../services/api'

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    center: {
        marginLeft: '50%'
    },
    pagination: {
        marginTop: '25px',
        marginLeft: '15px'
    }
}))

function createData(data) {
    return {
        id: data.id,
        nome: data.name,
        descricao: data.description,
        img: data.thumbnail.path
    }
}

export default function ListHeros() {
    const classes = useStyles()
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [rowsPerPage] = useState(10)
    const [items, setItems] = useState([])
    const [filter, setFilter] = useState({
        limit: rowsPerPage
    })

    useEffect(() => {
        async function fetch() {
            let { params } = getCredentials()
            params.limit = filter.limit
            const { data } = await api.get('characters', { params })
            const results = data.data.results.map(createData)
            setItems(...results)
            setLoading(false)
            console.log(items)
        }

        fetch()
    }, [])

    function onPageChanged() {

    }

    return (
        <Container>
            <Paper className={classes.paper}>
                {loading &&
                    <div className={classes.center}>
                        <CircularProgress />
                    </div>
                }

                {!loading && <>
                    <Grid container spacing={1}>
                        <SearchBar />
                        <Grid container item xs={12} spacing={3}>
                            <CardHero />
                            <CardHero />
                            <CardHero />
                            <CardHero />
                            <CardHero />
                            <CardHero />
                            <CardHero />
                            <CardHero />
                        </Grid>
                    </Grid>
                    <div className={classes.pagination}>
                        <Pagination
                            onPageChange={onPageChanged}
                            pageActive={currentPage}
                            rowsPerPage={rowsPerPage}
                            totalRows={items.length}></Pagination>
                    </div>
                </>}
            </Paper>
        </Container>
    )
}
