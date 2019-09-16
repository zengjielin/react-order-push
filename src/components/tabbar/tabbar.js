import React from "react"
import {
    HashRouter,
    NavLink
} from "react-router-dom"

class Tabbar extends React.Component {
    render(){
        return(
            <div className="tabbar-wrapper">
                <HashRouter>
                    <NavLink to="/index_root/order_admin">订单</NavLink>
                    <NavLink to="/index_root/index">我的</NavLink>
                </HashRouter>
            </div>
        )
    }
}

export default Tabbar;