import React, { useEffect, useState } from 'react'
import './index.css'

const TotalConfirmedCases = () => {

    let response = ""
    let [confirmedCases, setconfirmedCases] = useState([])


    async function getData() {
        const jsonData = await fetch("https://api.covid19india.org/data.json")
        //console.log(jsonData)
        const jsData = await jsonData.json()
        console.log(jsData)
        let { statewise } = jsData
        //console.log(statewise[1])
        setconfirmedCases(statewise)
    }

    
    getData()
    

    return (
        <>
            <table>
                <tr className="textCSS">
                    <th>state</th>
                    <th>active</th>
                    <th>confirmed</th>
                    <th>deaths</th>
                    <th>recovered</th>
                    <th>statenotes</th>
                    <th>lastupdatedtime</th>
                </tr>
                {
                    confirmedCases.map(function (value, ind) {
                        if (ind !== 0) {
                            return (
                                <tr>
                                    <td>{value.state}</td>
                                    <td>{value.active}</td>
                                    <td>{value.confirmed}</td>
                                    <td>{value.deaths}</td>
                                    <td>{value.recovered}</td>
                                    <td>{value.statenotes}</td>
                                    <td>{value.lastupdatedtime}</td>
                                </tr>

                            )
                        }
                    })


                }

            </table>
        </>
    )
}

export default TotalConfirmedCases;