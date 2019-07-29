import React, { Component } from 'react';
import './index.css'
export default class Footer extends Component {
  render() {
    return <div>
      <div className='footer'>
        <nav className="tabBar">
          <a href="javascript:;" className="item">
            <i className="index active"></i>
            <span className="txt">首页</span>
          </a>
          <a href="javascript:;" className="item">
            <i className="cate"></i>
            <span className="txt">分类</span>
          </a>
          <a href="javascript:;" className="item">
            <i className="topic"></i>
            <span className="txt">识物</span>
          </a>
          <a href="javascript:;" className="item">
            <i className="cart"></i>
            <span className="txt">购物车</span>
          </a>
          <a href="javascript:;" className="item">
            <i className="ucenter"></i>
            <span className="txt">个人</span>
          </a>
        </nav>
      </div>
    </div>;
  }
}