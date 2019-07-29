import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../../components/header'
import Footer from '../../components/footer'
export default class Home extends Component {
  render() {
    return <div>
      <Route component={Header}/>
      <Route component={Footer}/>
    </div>;
  }
}