import React from 'react';
import Pagination from 'react-bootstrap/Pagination'

export default function PaginationComponet({ rowsPerPage, totalRows, pageActive, onPageChange }) {
    const pageNumber = []
    const maxButtons = 10

    for (let i = pageActive; i < Math.ceil(totalRows / rowsPerPage); i++) {
        if (i <= pageActive + maxButtons) {
            pageNumber.push(i)
        }
    }

    if (pageNumber.length < 2) {
        return (
            <>
            </>
        )
    }

    return (
        <Pagination>
            <Pagination.First onClick={() => onPageChange(1)}/>
            <Pagination.Prev onClick={() => onPageChange(pageActive - 1)}/>

            {pageNumber.map(number => (
                <Pagination.Item 
                    key={number}
                    onClick={() => onPageChange(number)}
                    active={ number === pageActive }
                    >{number}</Pagination.Item>
            ))}

            <Pagination.Next onClick={() => onPageChange(pageActive + 1)}/>
            <Pagination.Last onClick={() => onPageChange(totalRows)}/>
        </Pagination>
    )
}
