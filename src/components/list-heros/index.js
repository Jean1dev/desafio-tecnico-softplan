import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from './styles'
import { useSelector } from 'react-redux'
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
        img: data.thumbnail.path,
        ultimaModificacao: data.modified,
        series: data.series,
        urls: data.urls
    }
}

export default function ListHeros() {
    const classes = useStyles()
    const [rows, setRows] = React.useState([])
    const [loading, setLoading] = useState(true)
    const [totalRows, setTotalRows] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [rowsPerPage] = useState(10) 
    const filterName = useSelector(state => state.search.filter)
    
    const [filter, setFilter] = useState({
        limit: rowsPerPage,
        offset: 0
    })
    
    useEffect(() => {
        function getParams() {
            let { params } = getCredentials()
            params.limit = filter.limit
            params.offset = filter.offset
            if (filterName) {
                params.nameStartsWith = filterName
            }

            return params
        }


        async function fetch() {
            const params = getParams()
            const { data } = await api.get('characters', { params })
            const results = data.data.results.map(createData)
            // rows = results // setRows(results)
            setTotalRows(data.data.total)
            console.log(`fecth`)
            setRows(results)
            setLoading(false)
        }
        setLoading(true)
        fetch()
    }, [filter, filterName])

    function onPageChanged(pageItem) {
        setCurrentPage(pageItem)
        setFilter({
            limit: rowsPerPage,
            offset: (pageItem * rowsPerPage) - 10
        })
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
                            {rows.map(hero => (
                                <CardHero key={hero.id} hero={hero} />
                            ))}
                        </Grid>
                    </Grid>
                    <div className={classes.pagination}>
                        <Pagination
                            onPageChange={onPageChanged}
                            pageActive={currentPage}
                            rowsPerPage={rowsPerPage}
                            totalRows={totalRows}></Pagination>
                    </div>
                </>}
            </Paper>
        </Container>
    )
}
