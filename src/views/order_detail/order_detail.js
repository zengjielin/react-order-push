import React from "react"
import "./order_detail.scss"

class OrderDetail extends React.Component{
    render(){
        return (
            <div className="order-detail">
                <div className="order-info-wrapper">
                    <div className="order-header-wrapper">
                        <div className="stall-name">烧鸭档口</div>
                    </div>
                    <div className="divider-wrapper">
                        <div className="divider"></div>
                    </div>
                    <div className="food-list-wrapper">
                        <div className=""></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderDetail;