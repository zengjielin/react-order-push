import React from "react"
import { Icon } from 'antd-mobile';
import "./food_menu.scss"
class FoodMenu extends React.Component{
    render(){
        return (
            <div className="food-menu-page">
                <div className="header-wrapper">
                    <div className="query-stall-wrapper">
                        <img src={require("../../assets/img/icon.png")} alt="" />
                        <span className="date-text">烧鸭档口</span>
                        <Icon type="down" color="#8e8e8e" />
                    </div>
                    <div className="query-date-wrapper">日期：2019-8-16</div>
                </div>
                <div className="food-list-wrapper">
                    {
                        [1,2,3,4,5,6,7].map((val,index)=>{
                            return (
                                <div className="food-item-wrapper" key={index}>
                                    <div className="food-img-wrapper">
                                        <img src={require("../../assets/img/head-portrait.jpg")} alt="" />
                                    </div>
                                    <div className="food-info-wrapper">
                                        <div className="food-name">蜜汁烤鸭饭</div>
                                        <div className="food-price">￥32.22</div>
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

export default FoodMenu;