import React, {Component} from "react";
// import {
//   // BrowserRouter as Router,
//   // HashRouter as Router,
//   MemoryRouter as Router,
//   Route,
//   Link,
//   Switch,
//   Redirect,
//   useHistory,
//   useLocation,
//   useRouteMatch,
//   useParams,
//   withRouter,
//   Prompt,
// } from "react-router-dom";

import {
  BrowserRouter as Router,
  Route,
  Link,
//   Switch,
//   useHistory,
//   useLocation,
//   useRouteMatch,
//   useParams,
//   withRouter,
  // Redirect,
} from "./co-react-router-dom/";

import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import _404Page from "./pages/_404Page";
import {useState} from "react";

function App() {
  const [state, setState] = useState(1);
  return (
    <div className="App">
      <button onClick={() => setState(state + 1)}>{state}</button>
      {state < 5 && (
        <Router>
          <Link to="/">首页</Link>
          <Link to="/user">用户中心</Link>
          <Link to="/login">登录</Link>
          <Link to="/product/123">商品</Link>

          {/* 独占路由 */}
          {/*  ! Switch只渲染第一个 匹配 的Route或者Redirect */}
          {/* <Switch> */}
            <Route
              path="/"
              exact
              //children={children}
              component={HomePage}
              //component={() => <HomePage />}
            //   render={render}
              ></Route>
            <Route path="/user" component={UserPage} />
            <Route path="/login" component={LoginPage} />
            {/* <Route path="/product/:id" render={() => <Product />} /> */}
            <Route component={_404Page} />
          {/* </Switch> */}
        </Router>
      )}
    </div>
  );
}

export default App;