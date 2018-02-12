import React from 'react';
import Order from "../Order/Order";

class OrderList extends React.Component{



    render(props){
        console.log("*****************");
        console.log(this.props);
        const listItems = this.props.orders.map(order =>
            <Order
                orderNumber={order.orderNumber}
                orderType={order.orderType}
                orderTime={order.orderTime}
            />
        );
        return <ul>{listItems}</ul>
        // return <div>
        //     <Order/>
        //     <Order/>
        //     <Order/>
        // </div>
    }
}

export default OrderList