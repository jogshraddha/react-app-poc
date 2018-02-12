import React from 'react';
import Statistic from '../Statistic/Statistic'

class DailyStatistic extends React.Component{

    render(){
        return <div className="col">
            <div className="row"><div className="text-center col-12" style={{padding: '5px'}}>Daily Statistics</div></div>
            <div className="row" style={{backgroundColor: '#233543'}}>
                <Statistic count={'06'} caption={'Customers in Store'}/>
                <Statistic count={'88'} caption={'Total Orders'}/>
                <Statistic count={'04'} caption={'Avg. Delivery Time(Mins.)'}/>
                <Statistic count={'05'} caption={'Target Delivery Time'}/>
                <Statistic count={'94'} caption={'% Goal Met'}/>
            </div>
        </div>
    }
}

export default DailyStatistic