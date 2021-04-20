import React from 'react'
import {Link} from 'react-router-dom'

const Menu = () => {

    return(
        <>
        <div style={{textAlign:"center"}}>
        <Link to = "/TotalConfirmedCases"> TotalConfirmedCases </Link>
        <br></br>
        <Link to = "/TotalVaccinated"> TotalVaccinated </Link>
        <br></br>
        <Link to = "/CasesTimeSeries"> CasesTimeSeries </Link>
        </div>
        </>
    )
}


export default Menu