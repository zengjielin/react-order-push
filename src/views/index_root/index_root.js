import React from "react"
import {
    HashRouter,
    Route
  } from "react-router-dom"

import Tabbar from "../../components/tabbar/tabbar"
import Index from "../index/index"
import OrderAdmin from "../order_admin/order_admin"
import "./index_root.scss"

class IndexRoot extends React.Component{
    render(){
        return(
            <div className='index-root'>
                <div className='index-root-content'>
                    <HashRouter>
                        <Route  path="/index_root/index" component={Index}/>
                        <Route  path="/index_root/order_admin" component={OrderAdmin} />
                    </HashRouter>
                </div>
                <div className="index-root-footer">
                    <Tabbar></Tabbar>
                </div>
            </div>
        )
    }
}

export default IndexRoot