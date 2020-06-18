import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'



const PageOne = () => {
    return (
        <div>
            PageOne
        </div>
    )
}

const PageTwo = () => {
    return (
        <div>
            PageTwo
        </div>
    )
}



export default class App extends Component {
    render() {
        return (
            <Router>
            <div>
                <Route path="/" exact component={PageOne}/>
                <Route path="/pagetwo" component={PageTwo}/>
            </div>
            </Router>
        )
    }
}
