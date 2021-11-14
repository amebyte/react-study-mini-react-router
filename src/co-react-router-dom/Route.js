import React from 'react'
import { Component } from 'react'
import RouterContext from './RouterContext'
import matchPath from './matchPath'

class Route extends Component {
    render() {
        return <RouterContext.Consumer>{context => {
            const {path, children, component, render, computedMatch} = this.props
            const {location} = context
            // const match = location.pathname === path
            const match = computedMatch ? computedMatch : path ? matchPath(location.pathname, this.props) : context.match
            const props = { ...context, match}
            // return match ? React.createElement(component) : null

            return <RouterContext.Provider value={props}>{
                match ?
            children ? typeof children === 'function' ? children(props) : children
            : component ? React.createElement(component, props) : render ? render(props) : null
            : typeof children === 'function' ? children(props): null
            }</RouterContext.Provider>

        }}</RouterContext.Consumer>
    }
}

export default Route