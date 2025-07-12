import React from 'react'
import { Link } from 'react-router-dom'

const SubTiltle = ({ title, btntitle, pathText }) => {
    return (
        <div className="d-flex justify-content-between mons pt-4">
            <div className="sub-tile mons">{title}</div>
            {btntitle ? (
                <Link to={`${pathText}`} style={{ textDecoration: 'none' }}>
                    <div className="shopping-now">{btntitle}</div>
                </Link>
            ) : null}
        </div>
    )
}

export default SubTiltle
