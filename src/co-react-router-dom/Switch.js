import React, { Component } from 'react'
import matchPath from './matchPath'
import RouterContext from './RouterContext'

class Switch extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {(context) => {
          let match // 是否找到匹配元素
          let element // 找到的匹配元素

          // todo 匹配
          React.Children.forEach(this.props.children, (child) => {
            // 不要用===判断， 因为undefined == null
            if (match == null && React.isValidElement(child)) {
              element = child
              match = child.props.path
                ? matchPath(context.location.pathname, child.props)
                : context.match
            }
          })

          return match
            ? React.cloneElement(element, { computedMatch: match })
            : null
        }}
      </RouterContext.Consumer>
    )
  }
}

export default Switch
