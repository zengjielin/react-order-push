import React, {
    Component
} from "react"
import { Icon } from 'antd-mobile';
import {HashRouter, NavLink} from "react-router-dom";
import './order_admin.scss'
import { DatePicker } from 'antd-mobile';
class OrderAdmin extends Component {
    constructor(props){
        super(props)
        this.state={
            dpValue: null,
            dateVisible: false,
        }
    }
    formatDate(date) {
        /* eslint no-confusing-arrow: 0 */
        const pad = n => n < 10 ? `0${n}` : n;
        const dateStr = `${new Date(date).getFullYear()}-${pad(new Date(date).getMonth() + 1)}-${pad(new Date(date).getDate())}`;
        const timeStr = `${pad(new Date(date).getHours())}:${pad(new Date(date).getMinutes())}`;
        return `${dateStr}`;
    }
    selectDate(date){
        this.setState({
            dpValue :this.formatDate(date)
        })
        console.log(this.formatDate(date))
    }
    render() {
        return (
            <div className="order-admin-page">
                <div className="header-wrapper">
                    <div className="query-date-wrapper" onClick={() => this.setState({ dateVisible: true })}>
                        <img src={require("../../assets/img/icon_date.png")} alt="" />
                        <span className="date-text">{this.state.dpValue}</span>
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
                                    
                                    <DatePicker
                                        mode="date"
                                        visible={this.state.dateVisible}
                                        value={this.state.dpValue}
                                        onOk={date => this.selectDate(date)}
                                        onDismiss={() => this.setState({ dateVisible: false })}
                                        />
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