import React, { useState, useEffect } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import api, { getCredentials } from '../../services/api'

export default function ListSeries({ hero }) {
    const [rows, setRows] = useState([])

    useEffect(() => {
        async function fetch() {
            let { params } = getCredentials()
            params.characters = hero.id
            const { data } = await api.get('series', { params })
            setRows(data.data.results)
        }

        fetch()
    }, [hero.id])

    return (
        <>
            <Typography variant="h5" color="textSecondary" component="p">
                Lista de series
                </Typography>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Titulo</TableCell>
                        <TableCell>Descricao</TableCell>
                        <TableCell>Inicio</TableCell>
                        <TableCell>Fim</TableCell>
                        <TableCell align="right">Tipo</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow data-testid="table" key={row.id}>
                            <TableCell>{row.title}</TableCell>
                            <TableCell>{row.description}</TableCell>
                            <TableCell>{row.startYear}</TableCell>
                            <TableCell>{row.endYear}</TableCell>
                            <TableCell align="right">{row.type}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}
