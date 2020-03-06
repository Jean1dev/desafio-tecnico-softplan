import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { Input, ButtonSearch } from './styles'

export default function SearchBar() {
    const [filter, setFilter] = useState('')

    function handleChange(e) {
        setFilter(e.target.value)
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
            <ButtonSearch onClick={() => alert('clock')}>
                <SearchIcon></SearchIcon>
            </ButtonSearch>
        </>
    )
}
