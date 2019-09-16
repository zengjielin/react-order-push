import React from 'react';
import {
  HashRouter,
  Switch,
  Redirect,
  Route
} from "react-router-dom"
import IndexRoot from "./views/index_root/index_root"
import UserInfo from "./views/user_info/user_info"

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Redirect exact from='/' to='/index_root/index'/>
          <Route path="/index_root" component={IndexRoot} />
          <Route path="/user_info" component={UserInfo} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;