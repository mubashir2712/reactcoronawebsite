import React, { useState } from 'react'
import './index.css'

const TotalVaccinated = () => {

    const [confirmedCases, setconfirmedCases] = useState([])

    async function getData() {
        const jsonData = await fetch("https://api.covid19india.org/data.json")
        const jsData = await jsonData.json()
        //console.log(jsData)
        let { tested } = jsData
        console.log(tested[1])
        setconfirmedCases(tested)
    }

    
    getData()

    return (
        <>
            <table>
                <tr className="textCSS">
                    <th>testedasof</th>
                    <th>totaldosesadministered</th>
                    <th>totalindividualsvaccinated</th>
                    <th>totalsamplestested</th>
                    <th>updatetimestamp</th>
                </tr>
                
                {
                    confirmedCases.map(function (value) {
                            return (
                                <tr>
                                    <td>{value.testedasof}</td>
                                    <td>{value.totaldosesadministered}</td>
                                    <td>{value.totalindividualsvaccinated}</td>
                                    <td>{value.totalsamplestested}</td>
                                    <td>{value.updatetimestamp}</td>
                                </tr>

                            )
                    })
                }
                
            </table>
        </>
    )
}

export default TotalVaccinated;