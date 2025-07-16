import React from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SubTiltle = ({ title, btntitle, pathText , sectitle }) => {
    return (
        <div>
            <Row className='d-flex justify-content-center fs-1 cor mt-5' style={{
                color : "var(--text-color)"
            }}> 
            {sectitle}
            </Row>
<div className="d-flex justify-content-between mons pt-4">
            <div className="sub-tile mons fs-1">{title}</div>
            {btntitle ? (
                <Link to={`${pathText}`} style={{ textDecoration: 'none' }}>
                    <div className="shopping-now">{btntitle}</div>
                </Link>
            ) : null}
        </div>
        </div>
        
    )
}

export default SubTiltle
