import React from 'react';
import './Statistic.css'

class Statistic extends React.Component {

    render() {
        return <div className="col">
            <div className="row">
                <span className="Statistics-span">{this.props.count}</span>
            </div>
            <div className="row">
                <div className="text-center col-12"><span className="Statistics-text">{this.props.caption}</span></div></div>
        </div>
    }
}

export default Statistic
