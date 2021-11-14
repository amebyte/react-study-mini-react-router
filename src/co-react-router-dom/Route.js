import React from 'react'
import { Component } from 'react'
import RouterContext from './RouterContext'
import matchPath from './matchPath'

class Route extends Component {
    render() {
        return <RouterContext.Consumer>{context => {
            const {path, children, component, render} = this.props
            const {location} = context
            // const match = location.pathname === path
            const match = matchPath(location.pathname, this.props)
            const props = { match, ...context}
            // return match ? React.createElement(component) : null

            return match ?
            children ? typeof children === 'function' ? children(props) : children
            : component ? React.createElement(component, props) : render ? render(props) : null
            : typeof children === 'function' ? children(props): null

        }}</RouterContext.Consumer>
    }
}

export default Route