import React from "react"
import './user_info.scss'

class UserInfo extends React.Component{
    render(){
        return (
            <div className="user-info-page">
                <div className="user-info-form-wrapper">
                    <div className="user-info-item-wrapper">
                        <div className="label">手机号：</div>
                        <div className="input-content">
                            <input className="input-wrapper" placeholder="请输入您的手机号" />
                        </div>
                    </div>
                    <div className="user-info-item-wrapper">
                        <div className="label">昵称：</div>
                        <div className="input-content">
                            <input className="input-wrapper" placeholder="请输入您的昵称" />
                        </div>
                    </div>
                    <div className="user-info-item-wrapper">
                        <div className="label">学号：</div>
                        <div className="input-content">
                            <input className="input-wrapper" placeholder="请输入您的学号" />
                        </div>
                    </div>
                    <div className="user-info-item-wrapper">
                        <div className="label">身份证</div>
                        <div className="input-content">
                            <input className="input-wrapper" placeholder="请输入您的身份证" />
                        </div>
                    </div>
                    <div className="user-info-item-wrapper">
                        <div className="label">邮箱</div>
                        <div className="input-content">
                            <input className="input-wrapper" placeholder="请输入您的邮箱" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserInfo;