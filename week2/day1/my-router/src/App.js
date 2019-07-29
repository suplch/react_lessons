import React from 'react';
// 导入 react路由
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail'
import Parent from './pages/Parent';

function Always(props) {
    return (
        <div>
            Always show
        </div>
    )
}
function NotFound(props) {
    return (
        <div>404 Not Found</div>
    );
}
function App() {
  return (
      <BrowserRouter> {/* 使用 html5 路由 */}
          <div>
              router
              <ul>
                  <li> { /* 跳转地址 最终渲染为一个 a 标签 */ }
                      <Link to="/home">首页</Link>
                  </li>
                  <li>
                      <Link to="/about">关于</Link>
                  </li>
                  <li>
                      <Link to="/users">用户列表</Link>
                  </li>

              </ul>
              {/* 通过 Switch 组件 匹配一个 路由对象 */}
              <Switch>
                  {/* 重定向 组件, 当访问 / 目录的时候, 自动跳转到 /home  exact 表示精确匹配 */}
                  <Redirect exact from="/" to="/home" />
                  {/* 定义一个路由 当防卫 /home 的时候, 组件 Home 会被渲染到当前 Route 位置 */}
                  <Route path="/home" component={Home} />
                  <Route path="/about" component={About} />
                  <Route exact path="/users" component={Users} />
                  {/*  :uid 表示路由地址参数 */}
                  <Route path="/users/:uid" component={UserDetail} />
                  <Route path="/pp" component={Parent} />
                  {/* 当都不匹配的时候 显示 一个 404 组件 */}
                  <Route component={NotFound} />
              </Switch>
              {/* 总是会匹配一个 Always 组件 因为没有提供 path 参数 */}
              <Route component={Always} />
          </div>
      </BrowserRouter>

  );
}

export default App;
