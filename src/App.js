import React from 'react';
import {
  HashRouter,
  Switch,
  Redirect,
  Route
} from "react-router-dom"
import IndexRoot from "./views/index_root/index_root"
import UserInfo from "./views/user_info/user_info"
import Card from "./views/card/card"
import FoodMenu from "./views/food_menu/food_menu"
import OrderDetail from "./views/order_detail/order_detail"
import AddCard from "./views/add_card/add_card"
import "./App.css"

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Redirect exact from='/' to='/index_root/index'/>
          <Route path="/index_root" component={IndexRoot} />
          <Route path="/user_info" component={UserInfo} />
          <Route path="/card" component={Card} />
          <Route path="/add_card" component={AddCard} />
          <Route path="/food_menu" component={FoodMenu} />
          <Route path="/order_detail" component={OrderDetail} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;