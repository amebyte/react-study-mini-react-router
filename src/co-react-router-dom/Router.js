import { Component } from 'react'
import RouterContext from './RouterContext'

class Router extends Component {
    render() {
        return (
            <RouterContext.Provider value={{history: this.props.history}}>
                {this.props.children}
            </RouterContext.Provider>
        )
    }
}

export default Router