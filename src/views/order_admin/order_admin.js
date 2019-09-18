import React, {
    Component
} from "react"
import { Icon } from 'antd-mobile';
import {HashRouter, NavLink} from "react-router-dom";
import './order_admin.scss'

class OrderAdmin extends Component {
    render() {
        return (
            <div className="order-admin-page">
                <div className="header-wrapper">
                    <div className="query-date-wrapper">
                        <img src={require("../../assets/img/icon_date.png")} alt="" />
                        <span className="date-text">2019-9-17</span>
                        <Icon type="down" color="#8e8e8e" />
                    </div>
                    <div className="today-food-entry">
                        <HashRouter>
                            <NavLink to="/food_menu" className="food-entry-text">今日菜品</NavLink>
                        </HashRouter>
                    </div>
                </div>
                <div className="order-list-wrapper">
                    {
                        [1,2,3,4,5].map((val,index)=>{
                            return(
                                <div className="order-item-wrapper" key={index}>
                                    <div className="order-item-header-wrapper">
                                        <div className="stall-name">烧鸭档口</div>
                                        <div className="order-date">2019-10-01</div>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="food-list-wrapper">
                                        {[1,2,3,4,5].map((value,index)=>{
                                            return (
                                                <div className="food-item-wrapper" key={index}>
                                                    <div className="food-info-wrapper">
                                                        <div className="food-img-wrapper">
                                                            <img src={require("../../assets/img/head-portrait.jpg")} alt="" />
                                                        </div>
                                                        <div className="food-intro-wrapper">
                                                            蜜汁烤鸭饭 等2件商品
                                                        </div>
                                                        <div className="food-amount-wrapper">
                                                            <span className="unit">￥</span>
                                                            <span>23.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="total-amount-info">
                                        <div className="total-num">共1份</div>
                                        <div className="total-amount-wrapper">
                                            <span className="unit">￥</span>
                                            <span>23.00</span>
                                        </div>
                                    </div>
                                    <div className="detail-btn-wrapper">
                                        <HashRouter>
                                            <NavLink to="/order_detail" className="detail-btn">详情</NavLink>
                                        </HashRouter>
                                    </div>
                                </div>
                            )
                        })
                    }
                   
                </div>
            </div>
        )
    }
}
export default OrderAdmin