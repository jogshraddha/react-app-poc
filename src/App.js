import React from 'react';
import Header from './Header/Header.js'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import OrderList from "./OrderList/OrderList";
import DailyStatistic from "./DailyStatistic/DailyStatistic";

class App extends React.Component{
  render(){
      const ORDERS = [
          {orderNumber: '102', orderType: 'TO-GO', time: '7:11'},
          {orderNumber: '104', orderType: 'Dine In', time: '10:15'},
          {orderNumber: '302', orderType: 'TO-GO', time: '11:12'},
          {orderNumber: '305', orderType: 'TO-GO', time: '8:50'},
          {orderNumber: '502', orderType: 'Dine In', time: '9:15'},
          {orderNumber: '505', orderType: 'TO-GO', time: '1:15'}
      ];
    // return <Order/>
      return(
          <div className="container Main-container">
              <div className="row">
                  <div className="col-md-8 Order-view-component">
                      <div className="row Order-list-header"><div className="text-center col-12">Order List</div>
                      </div>
                      <div className="row Order-list-container">
                      <div className="col">
                      <div className="row Nav-container"><Header/></div>
                          <br></br>
                          <div className="row Order-list-bg"><OrderList orders={ORDERS}/></div></div></div>
                      <br></br>
                      <div className="row Statistic-container"><DailyStatistic/></div>
                  </div>
                  <div className="col-md-4 Log-alert-container">Log Alert</div>
              </div>
          </div>
      )
  }
}

export default App