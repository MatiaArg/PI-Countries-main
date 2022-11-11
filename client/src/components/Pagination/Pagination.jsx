import React from 'react'
import { useState } from 'react'

export let Pagination = () => {

    let [page, setPage] = useState(1)
    let [perPage, setPerPage] = useState(9)
    
    return (
        <div>
            PAGINATION
        </div>
    )
}
