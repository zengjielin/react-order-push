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
                    <NavLink to="/index_root/order_admin" className="tabbar-item-wrapper" activeClassName="active-router-name" >
                        <i className="order-iconfont nav-icon">&#xe64a;</i>
                        <span className="nav-name">订单</span>
                    </NavLink>
                    <NavLink to="/index_root/index" className="tabbar-item-wrapper" activeClassName="active-router-name" >
                        <i className="order-iconfont nav-icon">&#xe689;</i>
                        <span className="nav-name">我的</span>
                    </NavLink>
                </HashRouter>
            </div>
        )
    }
}

export default Tabbar;