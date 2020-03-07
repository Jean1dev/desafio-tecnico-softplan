import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { Input, ButtonSearch } from './styles'
import { useDispatch } from 'react-redux'
import { _dispatchSearch } from '../../store/modules/search/action'

export default function SearchBar() {
    const [filter, setFilter] = useState('')
    const dispatch = useDispatch()

    function handleChange(e) {
        setFilter(e.target.value)
    }

    function search() {
        dispatch(_dispatchSearch(filter))
    }

    return (
        <>
            <Input
                variant="outlined"
                margin="normal"
                id="filter"
                label="Search"
                name="filter"
                placeholder="Buscar"
                onChange={handleChange}
            />
            <ButtonSearch onClick={search}>
                <SearchIcon></SearchIcon>
            </ButtonSearch>
        </>
    )
}
