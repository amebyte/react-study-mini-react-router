import { useContext } from "react"
import RouterContext from "./RouterContext"

function Link({to, children, ...restProps}) {
    const context = useContext(RouterContext)
    const handle = (e) => {
        e.preventDefault()
        // history
        context.history.push(to)
    }
    return (
        <a href={to} onClick={handle} {...restProps}>{children}</a>
    )
}

export default Link