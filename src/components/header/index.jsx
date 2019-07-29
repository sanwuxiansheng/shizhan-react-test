import React, { Component } from 'react';
import './index.css'
export default class Header extends Component {
  render() {
    return <div>
      <div className="header-top">
        <div className="header-left">
          <a href="/" className="logo">
          </a>
        </div>
        <div className="header-right">
          <i className="icon">
            <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png" alt=""/>
          </i>
          <span>搜索商品, 共21594款好物</span>
        </div>
        <div className="loginBtn">登录</div>
      </div>
      <div className='header-bottom'>
        <header className='bottom-inner'>
          <div className="bottom-center">
            <ul className='bottom-list'>
              <li className='list-item'>
                <span className="txt">推荐</span>
              </li>
              <li className='list-item'>
                <span className="txt">居家生活</span>
              </li>
              <li className='list-item'>
                <span className="txt">服饰鞋包</span>
              </li>
              <li className='list-item'>
                <span className="txt">美食酒水</span>
              </li>
              <li className='list-item'>
                <span className="txt">个护清洁</span>
              </li>
              <li className='list-item'>
                <span className="txt">母婴亲子</span>
              </li>
              <li className='list-item'>
                <span className="txt">运动旅行</span>
              </li>
              <li className='list-item'>
                <span className="txt">数码家电</span>
              </li>
              <li className='list-item'>
                <span className="txt">全球特色</span>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </div>;
  }
}