import React, {
    Component
} from "react"
import {
    HashRouter,
    NavLink
} from "react-router-dom"
import './index.scss'

class Index extends Component{
    render(){
        return  (
            <div className="index">
                <div className="header-wrappr">
                    <div className="head-portrait">
                        <img src={require('../../assets/img/head-portrait.jpg')} alt="" />
                    </div>
                    <div className="user-info">
                        <div className="user-name">曾杰霖</div>
                        <div className="user-phone">15913148223</div>
                    </div>
                </div>
                <div className="compontent-wrapper">
                    <HashRouter>
                        <NavLink to="/card">
                            <div className="compontent-item-wrapper">
                                <div className="compontent-icon-text">
                                    <i className="order-iconfont compontent-card-icon">&#xe650;</i>
                                    <span className="compontent-text">关联卡号</span>
                                </div>
                                <div className="compontent-arrow">
                                    <i className="order-iconfont arrow-icon">&#xe600;</i>
                                </div>
                            </div>
                        </NavLink>
                        <div className="divider-item-wrapper">
                            <div className="divider"></div>
                        </div>
                        <NavLink to="/user_info">
                            <div className="compontent-item-wrapper">
                                <div className="compontent-icon-text">
                                    <i className="order-iconfont compontent-personal-icon">&#xe611;</i>
                                    <span className="compontent-text">个人中心</span>
                                </div>
                                <div className="compontent-arrow">
                                    <i className="order-iconfont arrow-icon">&#xe600;</i>
                                </div>
                            </div>
                        </NavLink>
                    </HashRouter>
                </div>
            </div>
        )
    }
}

export default Index;