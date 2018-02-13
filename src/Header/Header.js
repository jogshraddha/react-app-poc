import React from 'react';
import './Header.css'
class Header extends React.Component{

    render(){
       return (
           <div className="col-12">
               <nav className="nav">
                   <a className="col-2 text-center nav-link active" href="#">All</a>
                   <a className="col-2 text-center nav-link" href="#">Dine In</a>
                   <a className="col-2 text-center nav-link" href="#">To-Go</a>
                   <a className="col-2 text-center nav-link" href="#">Order</a>
                   <a className="col-2 text-center nav-link" href="#">Table</a>
                   <a className="col-2 text-center nav-link" href="#">Time</a>
               </nav>
           </div>
       )
    }
}

export default Header