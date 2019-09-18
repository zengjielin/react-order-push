import React from "react"
import "./order_detail.scss"

class OrderDetail extends React.Component{
    render(){
        return (
            <div className="order-detail-page">
                <div className="order-info-wrapper">
                    <div className="order-header-wrapper">
                        <div className="stall-name">烧鸭档口</div>
                    </div>
                    <div className="divider-wrapper">
                        <div className="divider"></div>
                    </div>
                    <div className="food-list-wrapper">
                        {
                            [1,2,3].map((val,index)=>{
                                return (
                                    <div className="food-item-wrapper" key={index}>
                                        <div className="food-img-wrapper">
                                            <img src={require("../../assets/img/head-portrait.jpg")} alt="" />
                                        </div>
                                        <div className="food-name-spec-wrapper">
                                            <div className="food-name">烧鸭饭</div>
                                            <div className="spec-name">
                                                <span className="spec-tag">加蛋</span>
                                                <span className="spec-tag">微辣</span>
                                            </div>
                                        </div>
                                        <div className="food-amount-wrapper">
                                            <div className="food-number">x1</div>
                                            <div className="food-price">
                                                <span className="unit">￥</span>
                                                <span>23.33</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="nutrition-wrapper">
                        <div className="nutrition-item-wrapper">
                            <img src="https://packer-static-assets.oss-cn-shenzhen.aliyuncs.com/wechart-order-center/573f4d979e40ed07081628a829ba7a4c1565944874887.png" alt="" />
                            <span className="nutrition-name">蛋白质:1433g</span>
                        </div>
                        <div className="nutrition-item-wrapper">
                            <img src="https://packer-static-assets.oss-cn-shenzhen.aliyuncs.com/wechart-order-center/573f4d979e40ed07081628a829ba7a4c1565944874965.png" alt="" />
                            <span className="nutrition-name">蛋白质:1342g</span>
                        </div>
                        <div className="nutrition-item-wrapper">
                            <img src="https://packer-static-assets.oss-cn-shenzhen.aliyuncs.com/wechart-order-center/573f4d979e40ed07081628a829ba7a4c1565944875043.png" alt="" />
                            <span className="nutrition-name">蛋白质:1333g</span>
                        </div>
                    </div>
                    <div className="divider-wrapper">
                        <div className="divider"></div>
                    </div>
                    <div className="total-fee-wrapper">
                        <span className="total-count">共1份</span>
                        <span className="total-amount">
                            <span className="unit">￥</span>
                            <span>23.33</span>
                        </span>
                    </div>
                </div>

                <div className="other-info-wrpaper">
                    <div className="other-info-title">其他信息</div>
                    <div className="other-detail-info-wrapper">
                        <div className="other-detail-item">
                            <div className="label">交易时间</div>
                            <div className="text">2019-8-16 15:18:39</div>
                        </div>
                        <div className="other-detail-item">
                            <div className="label">订单号</div>
                            <div className="text">3213123124</div>
                        </div>
                        <div className="other-detail-item">
                            <div className="label">支付方式</div>
                            <div className="text">刷卡支付</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderDetail;