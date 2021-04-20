import React from 'react'
import { Box, Button } from '@material-ui/core'
import './index.css'
import TotalConfirmedCases from './TotalConfirmedCases'
import TotalVaccinated from './TotalVaccinated'
import CasesTimeSeries from './CasesTimeSeries'
import { Switch, Route } from 'react-router-dom'
import Menu from './Menu'

function App() {
  return (
    <>
      <div className="backgroundColor">
        <h1 > Corona Virus Cases in India</h1>
      </div>
      <Switch>
        <Route exact path="/" component = {Menu} style = {{text : 'center'}}/>
        <Route exact path="/TotalConfirmedCases" component = {TotalConfirmedCases} />
        <Route exact path="/TotalVaccinated" component = {TotalVaccinated} />
        <Route exact path="/CasesTimeSeries" component = {CasesTimeSeries} />
      </Switch>

      <div className="backgroundColor" style = {{marginBottom : "0px"}}>
        <h1 > Stay Safe </h1>
      </div>
    </>
  );
}

export default App;
