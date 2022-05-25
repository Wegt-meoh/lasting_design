import React from 'react'
import { Link } from 'react-router-dom'
import { getAllRoutes } from '../../route/routes'

export default function Index() {
    const linkGroup = getAllRoutes().map((i, index) => {
        return <div key={index}>
            <Link to={String(i.path)}>{i.title}</Link>
        </div>
    })
    return (
        <div>
            {linkGroup}
        </div>
    )
}
