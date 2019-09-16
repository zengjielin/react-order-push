import React from "react"
import {
    HashRouter,
    NavLink
} from "react-router-dom"
import "./tabbar.scss"

class Tabbar extends React.Component {
    render(){
        return(
            <div className="tabbar-wrapper">
                <HashRouter>
                    <NavLink to="/index_root/order_admin" className="tabbar-item-wrapper">
                        <span className="nav-name">订单</span>
                        <i className="order-iconfont">&#xe64a;</i>
                    </NavLink>
                    <NavLink to="/index_root/order_admin" className="tabbar-item-wrapper">
                        <span className="nav-name">我的</span>
                        <i className="order-iconfont">&#xe689;</i>
                    </NavLink>
                </HashRouter>
            </div>
        )
    }
}

export default Tabbar;