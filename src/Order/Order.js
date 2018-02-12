import React from 'react';
import './Order.css'

class Order extends React.Component{
	
  render(){
  	const orderNumber = '#101';
	const orderType = 'TO-GO';
	const orderTime = '7:50';

    return (<div><div className="Order-tab" style={{backgroundColor: this.props.orderType === 'TO-GO'? 'yellow': 'orange'}}><span>{this.props.orderNumber}</span></div>
			<div className="Order-tab" style={{backgroundColor: this.props.orderType === 'TO-GO'? 'yellow': 'orange'}}>{this.props.orderType}</div>
        <div className="Order-tab" style={{backgroundColor: this.props.orderType === 'TO-GO'? 'yellow': 'orange'}}>{this.props.orderTime}</div>
			</div>)
  }
}

export default Order