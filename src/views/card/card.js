import React from "react"
import {
    HashRouter,
    NavLink
} from "react-router-dom"
import './card.scss'
class Card extends React.Component{
    render(){
        return (
            <div className="card-admin-page">
                <div className="card-list-wrapper">
                    <div className="card-item-wrapper">
                        <div className="card-info-wrapper">
                            <div className="user-name">曾杰霖</div>
                            <div className="card-number">
                                <div className="card-number-item">sgfs</div>
                                <div className="card-number-item">sgfs</div>
                                <div className="card-number-item">sgfs</div>
                            </div>
                            <div className="card-detail-wrapper">
                                <div className="card-text">校园一卡通</div>
                                <div className="card-status">已关联</div>
                            </div>
                        </div>
                        <div className="delete-btn-wrapper">
                            <div className="btn-wrapper">删除</div>
                        </div>
                    </div>
                    <div className="add-card-btn-wrapper">
                        <HashRouter>
                            <NavLink to="/add_card" className="btn-wrapper">添加关联卡号</NavLink>
                        </HashRouter>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card