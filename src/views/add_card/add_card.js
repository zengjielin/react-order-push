import React from "react"
import './add_card.scss'
import { Modal  } from 'antd-mobile';

class AddCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            modal1: false,
            modal2: false,
        };

    }
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        });
    }
    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }
    render(){
        return (
            <div className="add-card-page">
                <div className="add-card-form-wrapper">
                    <div className="add-card-tip-title-wrapper">请输入卡号:</div>
                    <div className="add-card-input-wrapper">
                        <input type="text" placeholder="请输入想要关联的卡号" className="input-wrapper" />
                    </div>
                    <div className="query-card-btn-wrapper">
                        <div className="btn-wrapper" onClick={this.showModal('modal1')}>查询</div>
                    </div>
                </div>

                <Modal visible={this.state.modal1} transparent onClose={this.onClose('modal1')} className="add-card-dialog-wrapper">
                    <div className="card-info-wrapper">
                        <div className="card-info-title">卡号信息</div>
                        <div className="card-form-wrapper">
                            <div className="card-form-item-wrapper">
                                <div className="label">姓名</div>
                                <div className="content">曾杰霖</div>
                            </div>
                            <div className="card-form-item-wrapper">
                                <div className="label">卡号：</div>
                                <div className="content">203123123</div>
                            </div>
                            <div className="card-form-item-wrapper">
                                <div className="label">学号：</div>
                                <div className="content">2019230123</div>
                            </div>
                        </div>
                        <div class="card-btn-wrapper">
                            <div className="cancel-button" onClick={this.onClose('modal1')}>取消</div>
                            <div className="confirm-button">确定添加</div>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default AddCard;