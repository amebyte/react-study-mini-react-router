import React from 'react'
import { Component } from 'react'
import RouterContext from './RouterContext'
import matchPath from './matchPath'

class Route extends Component {
    render() {
        return <RouterContext.Consumer>{context => {
            const {path, component} = this.props
            const {location} = context
            // const match = location.pathname === path
            const match = matchPath(location.pathname, this.props)
            return match ? React.createElement(component) : null
        }}</RouterContext.Consumer>
    }
}

export default Route