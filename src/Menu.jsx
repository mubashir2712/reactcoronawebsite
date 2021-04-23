import React from 'react'
import {Link} from 'react-router-dom'

const Menu = () => {

    return(
        <>
        <div style={{textAlign:"center"}}>
        <Link to = "/reactcoronawebsite/TotalConfirmedCases"> TotalConfirmedCases </Link>
        <br></br>
        <Link to = "/reactcoronawebsite/TotalVaccinated"> TotalVaccinated </Link>
        <br></br>
        <Link to = "/reactcoronawebsite/CasesTimeSeries"> CasesTimeSeries </Link>
        </div>
        </>
    )
}


export default Menu