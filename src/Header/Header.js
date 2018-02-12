import React from 'react';

class Header extends React.Component{

    render(){
       return (
           <div>
               <nav className="nav">
                   <a className="nav-link active" href="#">All</a>
                   <a className="nav-link" href="#">Dine In</a>
                   <a className="nav-link" href="#">TO-GO</a>
                   <a className="nav-link disabled" href="#">Order</a>
                   <a className="nav-link disabled" href="#">Table</a>
                   <a className="nav-link disabled" href="#">Time</a>
               </nav>
           </div>
       )
    }
}

export default Header