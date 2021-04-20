import React, { useState } from 'react'
import './index.css'

const CasesTimeSeries = () => {

    const [confirmedCases, setconfirmedCases] = useState([])

    async function getData() {
        const jsonData = await fetch("https://api.covid19india.org/data.json")
        const jsData = await jsonData.json()
        //console.log(jsData)
        let { cases_time_series } = jsData
        //console.log(cases_time_series[1])
        setconfirmedCases(cases_time_series)
    }

    
    getData()

    return (
        <>
            <table>
                <tr className="textCSS">
                    <th>date</th>
                    <th>dailyconfirmed</th>
                    <th>dailydeceased</th>
                    <th>dailyrecovered</th>
                    <th>totalconfirmed</th>
                    <th>totaldeceased</th>
                    <th>totalrecovered</th>
                </tr>
                
                {
                    confirmedCases.map(function (value) {
                            return (
                                <tr>
                                    <td>{value.dateymd}</td>
                                    <td>{value.dailyconfirmed}</td>
                                    <td>{value.dailydeceased}</td>
                                    <td>{value.dailyrecovered}</td>
                                    <td>{value.totalconfirmed}</td>
                                    <td>{value.totaldeceased}</td>
                                    <td>{value.totalrecovered}</td>
                                </tr>

                            )
                    })
                }
                
            </table>
        </>
    )
}

export default CasesTimeSeries;